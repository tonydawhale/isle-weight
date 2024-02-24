import { NetherIslandPlayerData, FactionWeight } from "../types";
import { WEIGHT_GROUPS } from "../constants";

/**
 * 
 */
const getFactionWeight = (data: NetherIslandPlayerData): FactionWeight => {
    const calculatedWeight = {
        total: 0,
        mages: 0,
        barbarians: 0
    }
    const primaryFaction = data.selected_faction;
    if (!primaryFaction) {
        return calculatedWeight;
    }

    calculatedWeight[primaryFaction] = Math.min((data[`${primaryFaction}_reputation`]! / 12000) * WEIGHT_GROUPS.factions.max_primary, WEIGHT_GROUPS.factions.max_primary);

    const secondaryFaction = primaryFaction === "mages" ? "barbarians" : "mages";

    if (data[`${secondaryFaction}_reputation`]! > 0) {
        calculatedWeight[secondaryFaction] = Math.min((data[`${secondaryFaction}_reputation`]! / 12000) * WEIGHT_GROUPS.factions.max_secondary, WEIGHT_GROUPS.factions.max_secondary);
    }

    calculatedWeight.total = calculatedWeight.mages + calculatedWeight.barbarians;

    return calculatedWeight;
}

export default getFactionWeight;