import { calculateCollectionScore } from '../src';
import getFactionWeight from '../src/calculators/factions';
import getKuudraWeight from '../src/calculators/kuudra';

import * as data from './data';

describe('isle-weight', () => {
    describe('kuudra collection score calculations', () => {
        test('calculate player\'s kuudra collection score to be 4123', () => {
            expect(calculateCollectionScore(data.test_profile_1.nether_island_player_data.kuudra_completed_tiers)).toBe(4123)
        })
        test('calculate player\'s kuudra collection score to be 823', () => {
            expect(calculateCollectionScore(data.kuudra_completions_missing_types)).toBe(823)
        })
    })
    describe('kuudra weight calculations', () => {
        const tiers = data.test_profile_2.nether_island_player_data.kuudra_completed_tiers
        console.log(getKuudraWeight(tiers))
    })
    describe('faction weight calculations', () => {
        const nether = data.test_profile_1.nether_island_player_data
        // @ts-ignore
        console.log(getFactionWeight(nether));
    })
})