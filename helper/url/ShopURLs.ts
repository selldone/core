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

/**
 * URL builder utilities for public shop, product, vendor, and campaign pages.
 */
export class ShopURLs {
  /**
   * Returns the main public URL of a shop.
   *
   * Prefers a primary custom domain when present, otherwise falls back to the primary
   * subdomain or local `@shop-name` route.
   *
   * @param {Shop & { domains?: Domain[] }} shop - Shop model with optional domain records.
   * @returns {string} Absolute shop URL.
   */
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

  /**
   * Builds the vendor landing-page URL inside a shop.
   *
   * @param {Shop} shop - Shop model.
   * @param {Vendor} vendor - Vendor model.
   * @returns {string | null} Absolute vendor landing-page URL.
   */
  static GetVendorLandingPageUrl(shop: Shop, vendor: Vendor) {
    if (!shop || !vendor?.id) return null;
    const domain = ShopURLs.MainShopUrl(shop);
    return `${domain}/vendor/@${vendor.slug ? vendor.slug : Slugify.apply(vendor.name)}-${vendor.id}`;
  }

  /**
   * Builds the vendor listing/profile URL inside a shop.
   *
   * @param {Shop} shop - Shop model.
   * @param {Vendor} vendor - Vendor model.
   * @returns {string | null} Absolute vendor listing URL.
   */
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
  /**
   * Returns the public Hyper page URL.
   * @param {Shop} shop - Shop model.
   * @returns {string} Absolute Hyper URL.
   */
  static GetShopHyperUrl(shop: Shop) {
    return ShopURLs.MainShopUrl(shop) + "/hyper";
  }

  //――――――――――――――――――――――――― Avocado ―――――――――――――――――――――――――

  /**
   * Returns the public Avocado page URL.
   * @param {Shop} shop - Shop model.
   * @returns {string} Absolute Avocado URL.
   */
  static GetShopAvocadoUrl(shop: Shop) {
    return ShopURLs.MainShopUrl(shop) + "/avocado";
  }

  /**
   * Builds the buyer-facing Avocado checkout URL.
   * @param {Shop} shop - Shop model.
   * @param {Avocado} avocado - Avocado order/session model.
   * @returns {string} Absolute Avocado buyer URL.
   */
  static GetAvocadoBuyerUrl(shop: Shop, avocado: Avocado) {
    return ShopURLs.MainShopUrl(shop) + "/avocado/" + avocado.hash;
  }

  //――――――――――――――――――――――――― Instagram ―――――――――――――――――――――――――
  /**
   * Returns the public Instagram storefront URL.
   * @param {Shop} shop - Shop model.
   * @returns {string} Absolute Instagram storefront URL.
   */
  static GetShopInstagramUrl(shop: Shop) {
    return ShopURLs.MainShopUrl(shop) + "/instagram";
  }


}
