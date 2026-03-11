import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED = ['/users'];
const AUTH_ROUTES = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = request.cookies.has('refreshToken');

  //Temporarily disabled for UI development
  //if (PROTECTED.some(p => pathname.startsWith(p)) && !hasSession) {
  //  return NextResponse.redirect(new URL('/login', request.url));
  //}

  if (AUTH_ROUTES.some(p => pathname.startsWith(p)) && hasSession) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/users/:path*', '/login/:path*', '/register/:path*'],
};
