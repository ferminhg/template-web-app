import {HealthResponse, HealthService} from "../../src/application/HealthService";

describe('HealthService', () => {
    it('run HealthService', async () => {
        const applicationService = new HealthService()
        const response = await applicationService.run()
        expect(response).toStrictEqual({"status": "ok"})
    });
})
