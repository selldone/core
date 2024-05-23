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

/**
 * Represents the main configuration and details for a shop.
 */
export class Domain {
  /**
   * Unique identifier for the domain.
   */
  id?: number;

  /**
   * Identifier of the associated shop.
   */
  shop_id?: number;

  /**
   * Indicates if this is the primary domain for the shop.
   */
  primary?: boolean;

  /**
   * Indicates if the domain is indexed.
   */
  indexed?: boolean;

  /**
   * The domain name.
   */
  domain?: string;

  /**
   * Domain home page (can be null, a page_id, 'avocado', or 'blog').
   */
  home?: string | null;

  /**
   * Indicates if the domain is approved.
   */
  approved?: boolean;

  /**
   * Indicates if the domain is enabled.
   */
  enable?: boolean;

  /**
   * Date and time when the domain expires.
   */
  expire_at?: string;

  /**
   * Indicates if the domain was added via SSL proxy IPs.
   */
  ssl_proxy?: boolean;

  /**
   * Indicates the health status of domain SSL.
   */
  ssl?: boolean;

  /**
   * Last date and time when a request was sent to issue SSL by SSL proxy.
   */
  issue_at?: string | null;

  /**
   * Last date and time when the domain was checked.
   */
  check_at?: string | null;

  /**
   * Indicates if http should be forced to https.
   */
  https?: boolean;

  /**
   * Last error message, if any.
   */
  error?: string | null;

  /**
   * Identifier of the attached affiliate.
   */
  affiliate_id?: number;

  /**
   * Additional domain information provided by the user.
   */
  info?: any[] | null;

  /**
   * Debug details for selldone admin.
   */
  debug?: any[] | null;

  /**
   * Certificate information (see SSLCertificate).
   */
  certificate?: any[] | null;

  /**
   * Date and time when the domain was created.
   */
  created_at?: string;

  /**
   * Date and time when the domain was last updated.
   */
  updated_at?: string;

  constructor(
    data: {
      id: number | null;
      shop_id: number;
      name: string;
      primary: boolean;
      domain: string;
    } & Partial<Domain>,
  ) {
    Object.assign(this, data);
  }
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Domain {}
