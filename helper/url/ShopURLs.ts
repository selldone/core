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

import {SetupService} from "../../server";
import type {Shop} from "../../models";
import {Domain} from "../../models";
import {Slugify} from "../../utils/slugify/slugify";
import {Vendor} from "../../models";

export class ShopURLs {
  static MainShopUrl(shop: Shop & { domains?: Domain[] }) {
    if (shop.domains) {
      const domain = shop.domains.find((item) => item.primary);
      if (domain) {
        return `https://${domain.domain}`;
      } else {
        return shop.sub?.enable && shop.sub?.primary
          ? `https://${shop.name}.${SetupService.ShopsDomain()}`
          : `${SetupService.MainServiceUrl()}/@${shop.name}`;
      }
    } else {
      // Return by domain record for shop. (Not realy accurate!)
      return shop.domain
        ? shop.domain
        : `${SetupService.MainServiceUrl()}/@${shop.name}`;
    }
  }

  static GetVendorLandingPageUrl(shop: Shop, vendor: Vendor) {
    if (!shop || !vendor?.id) return null;
    const domain = ShopURLs.MainShopUrl(shop);
    return `${domain}/vendor/@${vendor.slug ? vendor.slug : Slugify.apply(vendor.name)}-${vendor.id}`;
  }

  static GetVendorListingPageUrl(shop: Shop, vendor: Vendor) {
    if (!shop || !vendor?.id) return null;
    const domain = ShopURLs.MainShopUrl(shop);
    return `${domain}/@${vendor.slug ? vendor.slug : Slugify.apply(vendor.name)}-${vendor.id}`;
  }
}
