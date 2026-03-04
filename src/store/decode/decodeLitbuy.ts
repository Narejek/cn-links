import { litbuyStringsMarketplaces } from '../../data/litbuy';

export function decodeLitbuy(href: URL): { marketplace: string; id: string } {
  // url: https://litbuy.com/product/0/858275512438&inviteCode=6EZJ7TR67
  const [, marketplaceString, id] = href.pathname.split('/').slice(2);
  const marketplace = litbuyStringsMarketplaces.get(marketplaceString);

  if (!marketplace) {
    throw new Error(`Unsupported marketplace: ${marketplaceString}`);
  }

  const cleanId = id.split('&')[0];

  return { marketplace, id: cleanId };
}
