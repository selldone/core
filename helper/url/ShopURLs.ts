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

import type {Avocado, Domain, Shop, Vendor} from "../../models";
import {Slugify} from "../../utils/slugify/slugify";
import {SetupService} from "../../server";

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

  /**
   * Generates a URL link for a specific page in the shop, based on the shop information, query parameters, and optional path.
   *
   * @param shop - The `Shop` object containing information about the shop.
   * @param query - An object representing the query parameters as key-value pairs, where each key is a parameter name and each value is the parameter's value.
   * @param path - (Optional) A string specifying the path within the shop. Defaults to an empty string if not provided.
   * @returns The full URL string for the specified shop page, combining the shop's main URL, path, and serialized query string.
   */
  static GetShopPageLink(
    shop: Shop,
    query: { [key: string]: string },
    path: string = "",
  ) {
    const queryString = Object.keys(query)
      .map(function (key) {
        return key + "=" + query[key];
      })
      .join("&");
    return ShopURLs.MainShopUrl(shop) + path + "?" + queryString;
  }

  /**
   * Generates the URL link for a product based on the shop information, product ID, and optional slug.
   *
   * @param shop - The `Shop` object that contains information about the shop.
   * @param product_id - The unique identifier for the product, which can be a number or string.
   * @param slug - (Optional) A slug string that may be appended to the URL for SEO-friendly purposes.
   *               If provided, it will be added to the URL after the product ID.
   *               Defaults to `null`.
   * @returns The full URL string for the product, combining the shop's main URL, product path, and slug if available.
   */
  static GetProductLink(shop: Shop, product_id: number | string, slug = null) {
    return (
      ShopURLs.MainShopUrl(shop) +
      "/product/" +
      product_id +
      (slug ? `-${slug}` : "")
    );
  }

  /**
   * Generates the URL link for a specific category in the shop based on the shop information and category name.
   *
   * @param shop - The `Shop` object containing information about the shop.
   * @param category_name - The name of the category to be included in the URL.
   *                         This will be appended to the URL with a `-category` suffix.
   * @returns The full URL string for the specified category in the shop, combining the shop's main URL and the category name with the `-category` suffix.
   */
  static GetCategoryLink(shop: Shop, category_name: string) {
    return ShopURLs.MainShopUrl(shop) + "/" + category_name + "-category";
  }

  /**
   * Generates the URL link for a blog post based on the shop information and blog ID.
   *
   * @param shop - The `Shop` object containing information about the shop.
   * @param blog_id - The unique identifier for the blog post, which can be a number or a string.
   * @returns The full URL string for the blog post, combining the shop's main URL and the blog ID path.
   */
  static GetBlogLink(shop: Shop, blog_id: number | string) {
    return ShopURLs.MainShopUrl(shop) + "/blog/" + blog_id;
  }

  //――――――――――――――――――――――――― Hyper ―――――――――――――――――――――――――
  static GetShopHyperUrl(shop: Shop) {
    return ShopURLs.MainShopUrl(shop) + "/hyper";
  }

  //――――――――――――――――――――――――― Avocado ―――――――――――――――――――――――――

  static GetShopAvocadoUrl(shop: Shop) {
    return ShopURLs.MainShopUrl(shop) + "/avocado";
  }

  static GetAvocadoBuyerUrl(shop: Shop, avocado: Avocado) {
    return ShopURLs.MainShopUrl(shop) + "/avocado/" + avocado.hash;
  }

  //――――――――――――――――――――――――― Instagram ―――――――――――――――――――――――――
  static GetShopInstagramUrl(shop: Shop) {
    return ShopURLs.MainShopUrl(shop) + "/instagram";
  }


}
