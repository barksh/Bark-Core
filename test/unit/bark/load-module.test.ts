/**
 * @author WMXPY
 * @namespace Bark
 * @description Load Module
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { BarkConfig } from '../../../lib/config';
import { Bark } from '../../../src/bark';
import { MockIO } from '../../mock/io/mock';
import { MockExampleModule } from '../../mock/module/example';
import { MockPlatform } from '../../mock/platform/mock';

describe('Given {Bark} Class, Test Load Module', (): void => {

    const chance: Chance.Chance = new Chance('bark-load-module');

    it('should be able to load mock example module', async (): Promise<void> => {

        const platform: MockPlatform = new MockPlatform();
        const io: MockIO = new MockIO();
        const config: BarkConfig = BarkConfig.create(platform, io);

        const bark: Bark = Bark.fromConfig(config);
        await bark.loadModule(MockExampleModule);

        expect(io.output).to.be.lengthOf(1);
    });
});
