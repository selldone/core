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

import {SetupService} from "../server/SetupService";
import {Shop} from "../models/shop/shop.model";
import {Product} from "../models/shop/product/product.model";

export class URLS {
  selldone_url = "";
  selldone_iframe_url = ""; // https://iframe.selldone.com

  constructor() {
    this.selldone_url = SetupService.MainServiceUrl();
    this.selldone_iframe_url = SetupService.SelldoneIframe();
  }

  //―――――――――――――――――――――― URLs for access in shop ――――――――――――――――――――
  MainServiceUrl() {
    return `${this.selldone_url}`;
  }

  StripeLandingLoginPage() {
    return `${this.selldone_url}/stripe/login`;
  }

  AdminShopsURL() {
    return `${this.selldone_url}/shuttle`;
  }

  AdminShopURL(shop_id: string | number) {
    return `${this.selldone_url}/shuttle/shop/${shop_id}`;
  }

  UserSettingURL() {
    return `${this.selldone_url}/shuttle/kyc`;
  }

  ARViewURL(
    shop_name: string,
    product_id: string | number,
    variant_id: string | number,
    folder_name: string,
  ) {
    return `${this.selldone_iframe_url}/@${shop_name}/ar/${product_id}/${variant_id}/${folder_name}`;
  }

  CommunityPostUrl(base_url: string, post_id: string | number) {
    return `${base_url}/community/posts/${post_id}`;
  }

  CommunityPostEmbedUrl(base_url: string, post_id: string | number) {
    return `${base_url}/community/posts/${post_id}/embed`;
  }

  ProductIframeUrl(shop: Shop, product: Product) {
    return `${this.selldone_iframe_url}/embed/@${shop.name}/product/${product.id}`;
  }
}
