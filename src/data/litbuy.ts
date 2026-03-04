import type { Marketplace } from '../models';

export const litbuyMarketplaceStrings = new Map<Marketplace, string>([
  ['1688', '0'],
  ['taobao', '1'],
  ['tmall', '1'],
  ['weidian', 'weidian'],
]);

export const litbuyStringsMarketplaces = new Map<string, Marketplace>(
  Array.from(litbuyMarketplaceStrings).map(([key, value]) => [value, key])
);
