// @ts-nocheck
/*
 * Copyright (c) 2023. Selldone® Business OS™
 *
 * Author: M.Pajuhaan
 * Web: https://selldone.com
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * All rights reserved. In the weave of time, where traditions and innovations intermingle, this content was crafted.
 * From the essence of thought, through the corridors of creativity, each word, and sentiment has been molded.
 * Not just to exist, but to inspire. Like an artist's stroke or a sculptor's chisel, every nuance is deliberate.
 * Our journey is not just about reaching a destination, but about creating a masterpiece.
 * Tread carefully, for you're treading on dreams.
 */

import {SetupService} from "@core/server/SetupService";
import {Shop} from "@core/models/shop/shop.model";

export class DomainsHelper {
  static GetShopDomains(shop: Shop, domains, contains_default_domains = true) {
    let out = contains_default_domains
      ? [
          {
            url: `${SetupService.MainServiceUrl()}/@${shop.name}`,
            site_map: `${SetupService.MainServiceUrl()}/@${shop.name}/sitemap`,
            enable: shop.local ? shop.local.enable : false,
            indexed: shop.local ? shop.local.indexed : false,
            primary: shop.local ? shop.local.primary : false,
            official: "local",
            name: `@${shop.name}`,
            ssl: true,
          },
          {
            url: `https://${shop.name}.${SetupService.ShopsDomain()}`,
            site_map: `https://${
              shop.name
            }.${SetupService.ShopsDomain()}/sitemap`,
            enable: shop.sub ? shop.sub.enable : false,
            indexed: shop.sub ? shop.sub.indexed : false,
            primary: shop.sub ? shop.sub.primary : false,
            official: "sub",
            name: "Sub domain",
            ssl: true,
          },
        ]
      : [];

    domains.forEach((item) => {
      out.push({
        url: `https://${item.domain}`,
        site_map: `https://${item.domain}/sitemap`,
        enable: item.enable,
        indexed: item.indexed,
        primary: item.primary,
        approved: item.approved,
        domain: item,
        name: item.domain,
        affiliate_id: item.affiliate_id,
        ssl: item.ssl,
        error: item.error,
        certificate: item.certificate,
      });
    });

    return out;
  }
}
