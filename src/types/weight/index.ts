import { BestiaryWeight } from "./bestiaryWeight";
import { DojoWeight } from "./dojoWeight";
import { FactionWeight } from "./factionWeight";
import { KuudraWeight } from "./kuudraWeight";
import { TrophyFishingWeight } from "./trophyFishing";

export * from './bestiaryWeight';
export * from './dojoWeight';
export * from './factionWeight';
export * from './kuudraWeight';

export type IsleWeight = {
    player_id: string;
    total: number;
    factions?: FactionWeight;
    trophy_fishing?: TrophyFishingWeight;
    bestiary?: BestiaryWeight;
    kuudra?: KuudraWeight;
    dojo?: DojoWeight;
    misc?: {

    }
}
