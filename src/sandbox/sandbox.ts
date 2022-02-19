/**
 * @author WMXPY
 * @namespace Sandbox
 * @description Sandbox
 */

import { Sandbox, useEverything } from "@sudoo/marked";

export const createSandbox = (): Sandbox => {

    const sandbox: Sandbox = Sandbox.create();
    useEverything(sandbox);

    return sandbox;
};
