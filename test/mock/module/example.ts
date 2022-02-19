/**
 * @author WMXPY
 * @namespace Module
 * @description Example
 * @package Mock
 */

import { Sandbox } from "@sudoo/marked";
import { BarkModule } from "@barksh/module";

export class MockExampleModule extends BarkModule {

    public load(): void | Promise<void> {

        this.io.write('Load');
    }

    public register(sandbox: Sandbox): void | Promise<void> {

        this.io.write('Register');

        sandbox.provide('test', {
            execute: () => {
                this.io.write('Execute');
            },
        });
    }
}
