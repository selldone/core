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

import type {ProductFile} from "./product-file.model";

/**
 * Subscription/content section attached to a product.
 *
 * Backend source: `App\Storefront\Ribbon\ProductContent`, table `product_contents`.
 * Product contents are used mostly for subscription products and can send email updates to subscribed buyers.
 */
export interface ProductContent {
  /** Unique content identifier. Source: `product_contents.id`. */
  id: number;

  /** Owning shop identifier. Source: `product_contents.shop_id`. */
  shop_id: number;

  /** Parent product identifier. Source: `product_contents.product_id`. */
  product_id: number;

  /** Officer/user that created the content, or `null` if the user was deleted. Source: nullable `product_contents.user_id`. */
  user_id: number | null;

  /** Whether the content is available to buyers. Source: `product_contents.available`, default `false`. */
  available: boolean;

  /** Public content title. Source: `product_contents.title`. */
  title: string;

  /** Public short description. Source: nullable `product_contents.description`. */
  description?: string | null;

  /** Whether the backend should send email for this content. Source: `product_contents.mail`, default `false`. */
  mail: boolean;

  /** Email subject. Source: nullable `product_contents.subject`. */
  subject?: string | null;

  /** Email body HTML. Source: nullable long text `product_contents.body`. */
  body?: string | null;

  /** Whether the email is queued for sending. Source: `product_contents.in_que`, default `false`. */
  in_que: boolean;

  /** Total sent emails. Source: `product_contents.emails`. */
  emails: number;

  /** Total content/email views. Source: `product_contents.views`. */
  views: number;

  /** Total content-list opens/clicks. Source: `product_contents.clicks`. */
  clicks: number;

  /** Total buyers that downloaded at least one attached file. Source: `product_contents.downloads`. */
  downloads: number;

  /** Total number of buyer ratings. Source: `product_contents.rate_count`. */
  rate_count: number;

  /** Average rating value, normally in the 1 to 5 range when rated. Source: `product_contents.rate`. */
  rate: number;

  /** Attached files when the backend eager-loads `ProductContent::files()`. */
  files?: ProductFile[];

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Parent product relation when eager-loaded. */
  product?: Record<string, unknown> | null;

  /** Officer/user relation when eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Email receiver history relation when eager-loaded. */
  receivers?: ProductContent.EmailReceiver[];

  /** Buyer ratings relation when eager-loaded. */
  rates?: ProductContent.Rate[];

  /** Creation timestamp serialized by Laravel when included. Source: `product_contents.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `product_contents.updated_at`. */
  updated_at?: string | null;
}

export namespace ProductContent {
  /** Email receiver history row. Backend table: `product_content_receivers`. */
  export interface EmailReceiver {
    /** Receiver row id. */
    id: number;

    /** Parent product content id. */
    content_id: number;

    /** Subscription basket id. */
    basket_id: number;

    /** Receiver name, or `null`. */
    name: string | null;

    /** Receiver email address. */
    email: string;

    /** Whether the buyer viewed the content email/page. */
    view: boolean;

    /** Whether the buyer clicked from the content email/page. */
    click: boolean;

    /** Whether the buyer downloaded at least one file from this content. */
    download: boolean;

    /** Creation timestamp serialized by Laravel. */
    created_at?: string | null;

    /** Last update timestamp serialized by Laravel. */
    updated_at?: string | null;
  }

  /** Buyer rating row. Backend table: `product_content_rates`. */
  export interface Rate {
    /** Rating row id. */
    id: number;

    /** Parent product content id. */
    content_id: number;

    /** Buyer user id, or `null` after user deletion. */
    user_id: number | null;

    /** Rating value stored as unsigned tiny integer. */
    rate: number;

    /** Optional buyer review text. */
    review: string | null;

    /** Whether an officer has published the review. */
    published: boolean;

    /** Officer user id, or `null`. */
    officer_id: number | null;

    /** Creation timestamp serialized by Laravel. */
    created_at?: string | null;

    /** Last update timestamp serialized by Laravel. */
    updated_at?: string | null;
  }

  /** Payload accepted when creating content before backend assigns ids/timestamps and counters. */
  export interface Create {
    /** Parent product id. */
    product_id: number;

    /** Content title. */
    title: string;

    /** Optional public short description. */
    description?: string | null;

    /** Whether backend should send this content by email. */
    mail: boolean;

    /** Optional email subject. */
    subject?: string | null;

    /** Optional email body HTML. */
    body?: string | null;
  }
}
