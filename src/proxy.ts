import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request });

  if (token) {
    return NextResponse.next();
  }

  const signInUrl = new URL('/api/auth/signin', request.url);
  signInUrl.searchParams.set('callbackUrl', request.url);
  return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: [
    '/profile/:path*', 
    '/saved-properties/:path*', 
    '/messages/:path*', 
    '/properties/add/:path*'
  ],
};
