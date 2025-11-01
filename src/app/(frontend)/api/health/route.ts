import { NextResponse } from 'next/server'

/**
 * @fileoverview App Router Health Check Endpoint (app/api/health/route.ts)
 *
 * This route is hit by deployment services (like Railway) to confirm the
 * application instance is running and responsive.
 *
 * It is available at the root level: GET /api/health
 */

// Define the expected response type (optional, for clarity)
type HealthCheckResponse = {
  status: 'ok' | 'error'
  message: string
  timestamp?: string
}

// Next.js App Router API Handler for GET requests
// The 'request' parameter is optional if you don't need to read from it.
export async function GET() {
  try {
    const responseBody: HealthCheckResponse = {
      status: 'ok',
      message: 'Service is running and healthy.',
      timestamp: new Date().toISOString(),
    }

    // Use NextResponse.json() for App Router API routes.
    // By default, this returns a 200 OK status.
    return NextResponse.json(responseBody)
  } catch (error) {
    // 500 Internal Server Error
    console.error('Health check failed due to internal error:', error)
    const errorBody: HealthCheckResponse = {
      status: 'error',
      message: 'Internal server error during health check.',
    }

    // Explicitly set the status code to 500
    return NextResponse.json(errorBody, { status: 500 })
  }
}

// In the App Router, we typically only export the HTTP methods we support.
// Any request method not exported (like POST, PUT, DELETE) will automatically return a 405 Method Not Allowed error.
