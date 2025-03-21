import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Базовая защита от XSS
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Защита от MIME-снифинга
  response.headers.set('X-Content-Type-Options', 'nosniff')
  
  // Защита от кликджекинга
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 