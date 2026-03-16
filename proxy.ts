import type { NextRequest } from 'next/server';
// import { ENV, getRedactionMapInfo, redactSensitiveConfig } from 'varlock/env';

export function proxy(_request: NextRequest) {
  // console.log('proxy - log vars', {
  //   SECRET_ITEM: ENV.SECRET_ITEM,
  //   ENV_SPECIFIC_ITEM: ENV.ENV_SPECIFIC_ITEM,
  //   NEXT_PUBLIC_VAR: ENV.NEXT_PUBLIC_VAR,
  //   PUBLIC_VAR: ENV.PUBLIC_VAR,
  //   VAR_FROM_UI: ENV.VAR_FROM_UI,
  // });
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
