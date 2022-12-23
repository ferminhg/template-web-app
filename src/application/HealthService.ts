export type HealthResponse = {
    status: string,
}

export class HealthService {
    constructor() {}
    async run(): Promise<HealthResponse> {
        return { status: 'ok' };
    }
}
