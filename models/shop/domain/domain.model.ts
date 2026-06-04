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
 * Custom domain attached to a shop.
 *
 * Backend source: `App\Shop\Domains\Domain`, table `shop_domains`.
 * Managed by `DomainController`, `DomainSettingController`, and domain verification controllers. `debug` is hidden
 * by the Eloquent model unless explicitly exposed to admins.
 */
export class Domain {
  /** Domain id. Source: `shop_domains.id`. */
  id!: number;

  /** Owning shop id. Source: `shop_domains.shop_id`. */
  shop_id!: number;

  /** Whether this is the shop primary domain. Source: `shop_domains.primary` cast to boolean. */
  primary!: boolean;

  /** Whether the domain should be indexed. Source: `shop_domains.indexed` cast to boolean. */
  indexed!: boolean;

  /** Host/domain value. May include wildcard prefix such as `*.example.com`. */
  domain!: string;

  /** Domain home target: `null`, a page id encoded as string, or built-in values such as `shop`, `blog`, `avocado`. */
  home!: string | null;

  /** Whether DNS/domain ownership has been approved. Source: `shop_domains.approved`. */
  approved!: boolean;

  /** Whether this domain is enabled for routing. Source: `shop_domains.enable`. */
  enable!: boolean;

  /** SSL/certificate expiration timestamp, or `null`. Source: nullable `shop_domains.expire_at`. */
  expire_at!: string | null;

  /** Whether the domain was added through SSL proxy IPs. Source: `shop_domains.ssl_proxy`. */
  ssl_proxy!: boolean;

  /** Last SSL health-check result. Source: `shop_domains.ssl` cast to boolean. */
  ssl!: boolean;

  /** Last SSL issue request timestamp, or `null`. Source: nullable `shop_domains.issue_at`. */
  issue_at!: string | null;

  /** Last DNS/SSL connection check timestamp, or `null`. Source: nullable `shop_domains.check_at`. */
  check_at!: string | null;

  /** Whether HTTP should be forced to HTTPS. Source: `shop_domains.https`. */
  https!: boolean;

  /** Last domain/SSL error message, or `null`. Source: nullable `shop_domains.error`. */
  error!: string | null;

  /** Attached affiliate id, or `null`. Source: nullable `shop_domains.affiliate_id`. */
  affiliate_id!: number | null;

  /** User-provided domain info. Source: nullable JSON `shop_domains.info`. */
  info!: Record<string, unknown> | null;

  /** Admin-only debug details. Source: nullable JSON `shop_domains.debug`; hidden by default. */
  debug?: Record<string, unknown> | null;

  /** Parsed SSL certificate info. Source: nullable JSON `shop_domains.certificate`. */
  certificate!: Domain.CertificateInfo | null;

  /** Available currencies for this domain; `null` means all shop currencies. */
  currencies?: string[] | null;

  /** Available languages for this domain; `null` means all shop languages. */
  languages?: string[] | null;

  /** Extra metadata from `HasMeta`. Source: nullable JSON `shop_domains.meta`. */
  meta?: Record<string, unknown> | null;

  /** Soft-delete timestamp when included. Source: `shop_domains.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_domains.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `shop_domains.updated_at`. */
  updated_at?: string;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;

  /** Affiliate relation when eager-loaded. */
  affiliate?: Record<string, unknown> | null;

  constructor(data: Partial<Domain> & { id?: number | null }) {
    Object.assign(this, data);
  }
}

export namespace Domain {
  /** Public certificate fields returned by backend `SSLCertificate::toCertificateInfo()`. */
  export type CertificateInfo = Record<string, unknown>;
}
