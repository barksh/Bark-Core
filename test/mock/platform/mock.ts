/**
 * @author WMXPY
 * @namespace Platform
 * @description Mock
 * @package Mock
 */

import { BarkPlatform } from "@barksh/platform";
import { BarkPreference } from "@barksh/preference";

export class MockPlatform extends BarkPlatform {

    public platform: string = "mock";

    private _preference: BarkPreference;

    public constructor() {

        super();
        this._preference = {

            modules: [],
        };
    }

    public get output(): BarkPreference {
        return this._preference;
    }

    public async readBarkPreference(): Promise<BarkPreference> {

        return this._preference;
    }

    public async writeBarkPreference(preference: BarkPreference): Promise<void> {

        this._preference = preference;
    }
}
