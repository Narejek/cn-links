import { litbuyStringsMarketplaces } from '../../data/litbuy';
import type { RawURL } from '../../models';
import { generateRawLink } from '../generateRawLink';

export function decodeLitbuy(href: URL): RawURL {
  // https://litbuy.com/product/0/858275512438&inviteCode=6EZJ7TR67
  // https://litbuy.com/product/weidian/7626007256
  // https://litbuy.com/product/1/789423074033
  const [, marketplaceString, id] = href.pathname.split('/').slice(1);
  const marketplace = litbuyStringsMarketplaces.get(marketplaceString);

  if (!marketplace) {
    throw new Error(`Unsupported marketplace: ${marketplaceString}`);
  }

  // Handle id parsing with '&' attached from invite code like 858275512438&inviteCode=...
  // Normally searchParams are ? but here there's a & right in the pathname.
  const cleanId = id.split('&')[0];

  return generateRawLink(marketplace, cleanId);
}
