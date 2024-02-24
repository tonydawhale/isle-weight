export type KuudraWeight = {
    total: number;
    weight: number;
    overflow: number;
    completionScore: {
        total: number;
        capped: number;
        overflow: number;
    }
}