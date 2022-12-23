// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {HealthResponse, HealthService} from "../../src/application/HealthService";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<HealthResponse>
) {
    const handler = new HealthService()
    const response = await handler.run()

    res.setHeader('Cache-Control', 'no-store')
    res.status(200).json(response)
}
