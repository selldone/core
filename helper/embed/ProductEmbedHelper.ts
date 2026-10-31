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

import {Product, Shop} from "../../models";

/**
 * Helper for generating embeddable product iframe markup.
 */
export class ProductEmbedHelper {
  /** Resolve the configured embed host before code is pasted into another website. */
  static ProductIframeUrl(shop: Shop, product: Product): string {
    const url = new URL(
      window.URLS.ProductIframeUrl(shop, product),
      window.location.origin,
    );
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      throw new Error("Product embeds require an HTTP(S) URL.");
    }
    return url.href;
  }

  /**
   * Builds an HTML iframe string that renders the embeddable product page.
   *
   * @param {Shop} shop - Shop owning the product.
   * @param {Product} product - Product to embed.
   * @returns {string} HTML iframe markup pointing to the product embed URL.
   */
  static ProductIframe(shop: Shop, product: Product) {
    const entities: Record<string, string> = {
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    };
    const escapeAttribute = (value: unknown) =>
      String(value ?? "").replace(/[&<>"']/g, (character) => entities[character]);
    const url = ProductEmbedHelper.ProductIframeUrl(shop, product);
    return `<iframe src="${escapeAttribute(url)}" title="${escapeAttribute(product.title)}" style="width:100%; max-width:100%;height: 640px;max-height: 100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}
