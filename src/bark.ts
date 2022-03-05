/**
 * @author WMXPY
 * @namespace Core
 * @description Bark
 */

import { BarkIO } from "@barksh/io";
import { BarkModule } from "@barksh/module";
import { BarkPlatform } from "@barksh/platform";
import { END_SIGNAL, MarkedResult, Sandbox } from "@sudoo/marked";
import { createSandbox } from "./sandbox/sandbox";

export class Bark {

    public static fromConfig(platform: BarkPlatform, io: BarkIO): Bark {

        return new Bark(platform, io);
    }

    private readonly _platform: BarkPlatform;
    private readonly _io: BarkIO;
    private readonly _modules: Set<BarkModule>;

    private constructor(platform: BarkPlatform, io: BarkIO) {

        this._platform = platform;
        this._io = io;
        this._modules = new Set();
    }

    public async loadModule(TargetModule: typeof BarkModule): Promise<void> {

        const instance: BarkModule = new (TargetModule as any)(this._platform, this._io);
        await Promise.resolve(instance.load());

        this._modules.add(instance);
    }

    public async executeScript(script: string): Promise<boolean> {

        const sandbox: Sandbox = await this.createSandbox();
        const result: MarkedResult = await sandbox.evaluate(script);

        if (result.signal === END_SIGNAL.FAILED) {

            this._io.writeError(result.error.description);
            return false;
        }

        if (result.signal === END_SIGNAL.EXCEPTION) {

            this._io.writeError(result.exception.description);
            return false;
        }

        return result.signal === END_SIGNAL.SUCCEED;
    }

    public async createSandbox(): Promise<Sandbox> {

        const sandbox = createSandbox();

        for (const module of this._modules) {
            await Promise.resolve(module.register(sandbox));
        }

        return sandbox;
    }
}
