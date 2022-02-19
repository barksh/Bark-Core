/**
 * @author WMXPY
 * @namespace Bark
 * @description Register
 * @package Unit Test
 */

import { Sandbox } from '@sudoo/marked';
import { expect } from 'chai';
import * as Chance from 'chance';
import { BarkConfig } from '../../../lib/config';
import { Bark } from '../../../src/bark';
import { MockIO } from '../../mock/io/mock';
import { MockExampleModule } from '../../mock/module/example';
import { MockPlatform } from '../../mock/platform/mock';

describe('Given {Bark} Class, Test Register', (): void => {

    const chance: Chance.Chance = new Chance('bark-register');

    it('should be able to register module', async (): Promise<void> => {

        const platform: MockPlatform = new MockPlatform();
        const io: MockIO = new MockIO();
        const config: BarkConfig = BarkConfig.create(platform, io);

        const bark: Bark = Bark.fromConfig(config);
        await bark.loadModule(MockExampleModule);
        await bark.createSandbox();

        expect(io.output).to.be.lengthOf(2);
    });

    it('should be able to register module and run execute', async (): Promise<void> => {

        const platform: MockPlatform = new MockPlatform();
        const io: MockIO = new MockIO();
        const config: BarkConfig = BarkConfig.create(platform, io);

        const bark: Bark = Bark.fromConfig(config);
        await bark.loadModule(MockExampleModule);

        const sandbox: Sandbox = await bark.createSandbox();
        await sandbox.evaluate('import {execute} from "test";execute()');

        expect(io.output).to.be.lengthOf(3);
    });
});
