export class HypixelAPIError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'HypixelAPIError';
    }
}