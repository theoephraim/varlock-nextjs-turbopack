import type { NextRequest } from 'next/server';
import { ENV } from 'varlock/env';

export function proxy(_request: NextRequest) {
  console.log('console.log in proxy:', console.log);
  console.log('proxy env vars', {
    ENV_SPECIFIC_ITEM: ENV.ENV_SPECIFIC_ITEM,
    SECRET_ITEM: ENV.SECRET_ITEM,
    VAR_FROM_UI: ENV.VAR_FROM_UI,
  });
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
