import type { NextRequest } from 'next/server';
import { ENV, getRedactionMapInfo, redactSensitiveConfig } from 'varlock/env';

export function proxy(_request: NextRequest) {

  // Test 1: call redactSensitiveConfig directly
  console.log('direct redact:', redactSensitiveConfig('shhh-im-secret'));

  // Test 2: check if replaceAll exists on strings in this runtime
  console.log('has replaceAll:', typeof String.prototype.replaceAll);

  console.log('re-patching console.log')
  console.log('console.log in proxy:', console.log);

  console.log(getRedactionMapInfo());

  console.log('proxy env vars', {
    ENV_SPECIFIC_ITEM: ENV.ENV_SPECIFIC_ITEM,
    SECRET_ITEM: ENV.SECRET_ITEM,
    VAR_FROM_UI: ENV.VAR_FROM_UI,
  });
  console.log(ENV.SECRET_ITEM);
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
