import { MAX_KUUDRA_COLLECTION_SCORE, KuudraBossTiers, WEIGHT_GROUPS } from "../constants";
import { HypixelAPIKuudraBoss, KuudraWeight, KuudraCompletedTiers } from "../types"

/**
 * Calculates the player's collection score based on the number of tiers they have completed
 * @param completions - profile.members[uuid].nether_island_player_data.kuudra_completed_tiers
 * @returns 
 */
const calculateCollectionScore = (completions: Partial<Record<HypixelAPIKuudraBoss, number>>): number => {
    return ((completions?.none ?? 0) * KuudraBossTiers.BASIC) +
        ((completions?.hot ?? 0) * KuudraBossTiers.HOT) +
        ((completions?.burning ?? 0) * KuudraBossTiers.BURNING) +
        ((completions?.fiery ?? 0) * KuudraBossTiers.FIERY) +
        ((completions?.infernal ?? 0) * KuudraBossTiers.INFERNAL);
}

/**
 * Calculates the player's kuudra collection/completion weight
 * @param completedTiers - profile.members[uuid].nether_island_player_data.kuudra_completed_tiers
 * @returns 
 */
const getKuudraWeight = (completedTiers: KuudraCompletedTiers): KuudraWeight => {
    const { max: MAX_KUUDRA_WEIGHT, overflowExponent: KUUDRA_WEIGHT_OVERFLOW_EXPONENT } = WEIGHT_GROUPS.kuudra;

    const completionScore = calculateCollectionScore(completedTiers);
    const overflowCompletionScore = Math.max(0, completionScore - MAX_KUUDRA_COLLECTION_SCORE);
    const cappedCompletionScore = Math.min(MAX_KUUDRA_COLLECTION_SCORE, completionScore);

    const scalingFactor = MAX_KUUDRA_WEIGHT / Math.log(MAX_KUUDRA_COLLECTION_SCORE);

    const weight = cappedCompletionScore / MAX_KUUDRA_COLLECTION_SCORE * MAX_KUUDRA_WEIGHT
    const overflow = Math.max(0, (scalingFactor * Math.log(overflowCompletionScore)) * Math.exp(KUUDRA_WEIGHT_OVERFLOW_EXPONENT));

    const weightInfo: KuudraWeight = {
        total: weight + overflow,
        weight,
        overflow,
        completionScore: {
            total: completionScore,
            capped: cappedCompletionScore,
            overflow: overflowCompletionScore
        }
    }

    return weightInfo;
}

export default getKuudraWeight;
export { calculateCollectionScore };