import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @fileoverview Basic Health Check API Route for Next.js (TypeScript)
 *
 * This route is designed to be hit by deployment services (like Railway, Kubernetes,
 * or load balancers) to confirm the application instance is running and responsive.
 * It simply returns a 200 OK status and a JSON object.
 */

// Define the expected response type
type HealthCheckResponse = {
  status: 'ok' | 'error'
  message: string
  timestamp?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthCheckResponse>,
) {
  try {
    // 1. Check request method: Only allow GET requests for a health check
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET'])
      // 405 Method Not Allowed
      return res.status(405).json({
        status: 'error',
        message: `Method ${req.method} Not Allowed`,
      })
    }

    // 2. Respond with a success status (200 OK)
    return res.status(200).json({
      status: 'ok',
      message: 'Service is running and healthy.',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    // 3. Handle unexpected errors internally
    console.error('Health check failed due to internal error:', error)
    // 500 Internal Server Error
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error during health check.',
    })
  }
}
