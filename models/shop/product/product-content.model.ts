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
 * Backend source: `App\Shop\Ribbon\ProductContent`, table `product_contents`.
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

  /** Creation timestamp serialized by Laravel when included. Source: `product_contents.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `product_contents.updated_at`. */
  updated_at?: string | null;
}