export function isDebugMode(env: {[key: string]: string}): boolean {
  return env['NODE_ENV'] !== 'production' ||
         env['TYPESTYLE_ENV'] === 'debug';
}