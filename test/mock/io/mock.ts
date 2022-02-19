/**
 * @author WMXPY
 * @namespace IO
 * @description Mock
 * @package Mock
 */

import { BarkIO } from "@barksh/io";

export class MockIO extends BarkIO {

    private readonly _output: string[];

    public constructor() {

        super();
        this._output = [];
    }

    public get output(): string[] {
        return this._output;
    }

    public write(content: string): void | Promise<void> {

        this._output.push(content);
    }
}
