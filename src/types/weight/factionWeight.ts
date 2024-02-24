import { CrimsonIsleFactions } from "../hypixel";


export type FactionWeight = {
    [name in CrimsonIsleFactions | 'total']: number;
};