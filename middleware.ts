import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Si l'URL commence par /fr ou /en, rediriger vers la racine
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/fr') || pathname.startsWith('/en')) {
    // Supprimer le préfixe de langue et rediriger
    const newPath = pathname.replace(/^\/(fr|en)/, '');
    request.nextUrl.pathname = newPath || '/';
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
