/**
 * @author WMXPY
 * @namespace Core
 * @description Bark
 */

import { Sandbox } from "@sudoo/marked";
import { BarkModule } from "../lib/module";
import { createSandbox } from "./sandbox/sandbox";

export class Bark {

    public static fromConfig(platform: BarkPlatform, io: BarkIO): Bark {

        return new Bark(config);
    }

    private readonly _config: BarkConfig;
    private readonly _modules: Set<BarkModule>;

    private constructor(config: BarkConfig) {

        this._config = config;
        this._modules = new Set();
    }

    public async loadModule(TargetModule: typeof BarkModule): Promise<void> {

        const instance: BarkModule = new (TargetModule as any)(this._config);
        await Promise.resolve(instance.load());

        this._modules.add(instance);
    }

    public async createSandbox(): Promise<Sandbox> {

        const sandbox = createSandbox();

        for (const module of this._modules) {
            await Promise.resolve(module.register(sandbox));
        }

        return sandbox;
    }
}
