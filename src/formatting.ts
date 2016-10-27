import { ensureString } from './index';

export function ensurePercent(value: CSSPercentage | number): number {
  return typeof value === 'number'
    ? value as number
    : parseFloat(ensureString(value)) * .01;
}

export function formatPercent(value: number): string {
  return (value * 100) + '%'
}
