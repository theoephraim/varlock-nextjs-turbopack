// import { ENV } from 'varlock/env';
console.log('instrumentation.ts -- module loaded!');
// console.log('log in instrumentation:', ENV.SECRET_ITEM);

(globalThis as any).SET_IN_INSTRUMENTATION = 'foo';

export async function register() {
  console.log('instrumentation.ts -- register!');

  // if (process.env.NEXT_RUNTIME === 'edge') {
  //   await import('varlock/init-edge');
  // } else {
  //   await import('varlock/init-server');
  // }
}