/**
 * @author WMXPY
 * @namespace IO
 * @description Mock
 * @package Mock
 */

import { BarkIO, createIOWriteSuccess, IOWriteResult } from "@barksh/io";

export class MockIO extends BarkIO {

    private readonly _output: string[];

    private readonly _verbose: string[];
    private readonly _debug: string[];
    private readonly _warning: string[];
    private readonly _error: string[];

    public constructor() {

        super("MOCK");

        this._output = [];

        this._verbose = [];
        this._debug = [];
        this._warning = [];
        this._error = [];
    }

    public get output(): string[] {
        return this._output;
    }

    public writeString(content: string): IOWriteResult {

        this._output.push(content);

        return createIOWriteSuccess();
    }

    public writeObject(content: Record<string, string>): IOWriteResult {

        this._output.push(JSON.stringify(content));

        return createIOWriteSuccess();
    }

    public writeArray(content: string[]): IOWriteResult {

        this._output.push(JSON.stringify(content));

        return createIOWriteSuccess();
    }

    public writeVerbose(content: string): IOWriteResult {

        this._verbose.push(content);

        return createIOWriteSuccess();
    }

    public writeDebug(content: string): IOWriteResult {

        this._debug.push(content);

        return createIOWriteSuccess();
    }

    public writeWarning(content: string): IOWriteResult {

        this._warning.push(content);

        return createIOWriteSuccess();
    }

    public writeError(content: string): IOWriteResult {

        this._error.push(content);

        return createIOWriteSuccess();
    }
}
