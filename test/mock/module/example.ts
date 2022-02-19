/**
 * @author WMXPY
 * @namespace Module
 * @description Example
 * @package Mock
 */

import { Sandbox } from "@sudoo/marked";
import { BarkModule } from "../../../lib/module";

export class MockExampleModule extends BarkModule {

    public load(): void | Promise<void> {

        this.config.io.write('Load');
    }

    public register(sandbox: Sandbox): void | Promise<void> {

        this.config.io.write('Register');

        sandbox.provide('test', {
            execute: () => {
                this.config.io.write('Execute');
            },
        });
    }
}
