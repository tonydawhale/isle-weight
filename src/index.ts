import { IsleWeight } from './types';

export * from './errors';
export * from './types';
export * from './calculators';

function IsleWeight(profile: Record<any, any>): IsleWeight  {
    const weight: IsleWeight = {
        player_id: profile?.player_id,
        total: 0,
    }
    return weight;
}