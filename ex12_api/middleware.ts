// middleware.ts
// This middleware checks for a custom x-api-key header.
// If the key is wrong, it returns 401 Unauthorized.
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the API key from header
  const apiKey = request.headers.get('x-api-key');
  // The secret value should be in .env.local (for demo, hardcoded)
  const SECRET = process.env.API_SECRET || 'mysecret';
  if (apiKey !== SECRET) {
    // If not authorized, return 401 JSON
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // Allow request to continue
  return NextResponse.next();
}

// Only run for /api/secret
export const config = {
  matcher: ['/api/secret'],
};
