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

import { Club } from "../club";

/**
 * Shop-scoped customer CRM profile.
 *
 * Backend source: `App\Storefront\Customer\ShopCustomer`, table `shop_customers`.
 * A customer row links an optional global user to one shop and stores seller-owned CRM data such as contact snapshots,
 * segments, address/billing JSON, club level, subscription/access flags, private notes, lifecycle timestamps, and
 * integration metadata.
 */
export interface Customer {
  /** Customer id. Source: `shop_customers.id`. */
  id: number;

  /** Owning shop id. Source: `shop_customers.shop_id`. */
  shop_id: number;

  /** Linked global user id, or `null` for manually created/imported customers. */
  user_id: number | null;

  /** Login/source that created the row. Source: `shop_customers.source`, added by source migration. */
  source: Customer.Source;

  /** Customer display name snapshot for this shop. */
  name: string | null;

  /** Customer email snapshot for this shop. */
  email: string | null;

  /** Customer phone snapshot for this shop. */
  phone: string | null;

  /** Seller-defined lowercase segmentation tags. Source: JSONB `shop_customers.segments`. */
  segments: string[] | null;

  /** Shipping/contact address payload. Source: JSONB `shop_customers.address`. */
  address: Customer.Address | null;

  /** Billing address payload. Source: JSONB `shop_customers.billing`. */
  billing: Customer.Address | null;

  /**
   * Last country of user activity.
   *
   * Auto-set by the backend when the user views the shop. ISO alpha-2 country code such as `US`, `DE`, or `AE`.
   * @see OnShopViewJob
   */
  country: string | null;

  /** Customer club/loyalty level. Source enum: `ShopCustomerBadgeEnums::ALL`. */
  level: Customer.Level | null;

  /** Whether the customer is subscribed to shop marketing/news. */
  subscribed: boolean;

  /** Preferred customer currency for this shop. Nullable in DB, usually populated from shop currency on creation. */
  currency: string | null;

  /** Lottery chips owned by the customer in this shop. Backend spends 10 chips per lottery play. */
  chips: number;

  /** Last shop login timestamp, or `null`. */
  login_at: string | null;

  /** Last shop purchase timestamp, or `null`. */
  purchase_at: string | null;

  /** Customer birthdate timestamp/date, or `null`. */
  birthday: string | null;

  /** Customer sex value from personal information, or `null`. */
  sex: Customer.Sex | null;

  /**
   * Customer access flag for private/restricted shop flows.
   *
   * In public shops this does not block storefront visibility. In private/restricted shops it gates storefront access
   * or purchase/authenticated actions according to shop restriction settings.
   */
  access: boolean;

  /** Whether the customer is banned from shop interactions such as orders/community actions. */
  banned: boolean;

  /** Private seller notes; not visible to the customer. */
  notes: string | null;

  /** Private integration metadata. Backend currently validates Stripe customer ids by currency key. */
  meta: Customer.Meta | null;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Soft-delete timestamp when returned. */
  deleted_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Linked global user relation when eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Online basket relations when eager-loaded. */
  baskets?: Record<string, unknown>[];

  /** POS basket relations when eager-loaded. */
  posBaskets?: Record<string, unknown>[];

  /** Club relation matching `level` when eager-loaded. */
  shopClub?: Record<string, unknown> | null;

  /** Email receiver records when eager-loaded. */
  emails?: Record<string, unknown>[];

  /** Gift card relations when eager-loaded. */
  giftCards?: Record<string, unknown>[];

  /** Customer wallet relations when eager-loaded. */
  wallets?: Record<string, unknown>[];
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Customer {
  export enum Source {
    CUSTOMER = "customer",
    VENDOR = "vendor",
  }

  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSONB casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSONB casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Customer club level values stored in `shop_customers.level`. */
  export type Level = string;

  /** Customer sex values accepted by backend personal information enum. */
  export type Sex = "Male" | "Female" | "MALE" | "FEMALE" | (string & {});

  /** Address/billing JSON payload. Backend uses the shared address document structure and preserves extra keys. */
  export interface Address extends JsonObject {
    country?: string | null;
    state?: string | null;
    state_code?: string | null;
    city?: string | null;
    address?: string | null;
    location?: { lng: number; lat: number } | [number, number] | JsonObject | null;
    no?: string | null;
    unit?: string | null;
    name?: string | null;
    phone?: string | null;
    message?: string | null;
    postal?: string | null;
    business?: boolean | null;
    custom?: boolean | null;
    tax_id?: string | null;
  }

  /** Private integration metadata. */
  export interface Meta extends JsonObject {
    /** Stripe customer id metadata keys are stored as `stripe_customer_id_{CURRENCY}`. */
    [stripeCustomerIdKey: `stripe_customer_id_${string}`]: string | undefined;
  }

  /** Payload used by seller CRM customer create/update flows. */
  export interface Upsert {
    phone?: string | null;
    email?: string | null;
    name?: string | null;
    segments?: string[] | null;
    currency?: string | null;
    sex?: Sex | null;
    birthday?: string | null;
    level?: Level | null;
    address?: Address | null;
    billing?: Address | null;
    notes?: string | null;
    meta?: Meta | null;
  }

  export type FilterCode =
    | "REGISTER_DATE"
    | "LAST_BUY_DATE"
    | "LOGIN_DATE"
    | "LEVEL"
    | "SUBSCRIBED"
    | "NOT_PURCHASED"
    | "SEX"
    | "LOCATION"
    | "LIMIT"
    | "SEGMENTS";

  export interface FilterDefinition {
    type: FilterCode;
    title: string;
    description: string;
    icon: string;
    inputs?: Record<string, unknown>;
  }

  export const Filters: Record<FilterCode, FilterDefinition> = {
    REGISTER_DATE: {
      type: "REGISTER_DATE",
      title: "user_funnel.REGISTER_DATE.title",
      description: "user_funnel.REGISTER_DATE.description",
      icon: "fa:fas fa-user-clock",
      inputs: {
        start: { type: "date", title: "Date start" },
        end: { type: "date", title: "Date end" },
      },
    },
    LAST_BUY_DATE: {
      type: "LAST_BUY_DATE",
      title: "user_funnel.LAST_BUY_DATE.title",
      description: "user_funnel.LAST_BUY_DATE.description",
      icon: "fa:fas fa-business-time",
      inputs: {
        start: { type: "date", title: "Date start" },
        end: { type: "date", title: "Date end" },
      },
    },
    LOGIN_DATE: {
      type: "LOGIN_DATE",
      title: "user_funnel.LOGIN_DATE.title",
      description: "user_funnel.LOGIN_DATE.description",
      icon: "fa:fas fa-undo",
      inputs: {
        start: { type: "date", title: "Date start" },
        end: { type: "date", title: "Date end" },
      },
    },
    LEVEL: {
      type: "LEVEL",
      title: "user_funnel.LEVEL.title",
      description: "user_funnel.LEVEL.description",
      icon: "fa:fas fa-crown",
      inputs: {
        levels: {
          type: "enum",
          title: "Customer clubs",
          items: Object.values(Club.Levels),
          multiple: true,
          chips: true,
        },
      },
    },
    SUBSCRIBED: {
      type: "SUBSCRIBED",
      title: "user_funnel.SUBSCRIBED.title",
      description: "user_funnel.SUBSCRIBED.description",
      icon: "fa:fas fa-user-plus",
      inputs: {
        subscribed: { type: "boolean", title: "Subscribed state" },
      },
    },
    NOT_PURCHASED: {
      type: "NOT_PURCHASED",
      title: "user_funnel.NOT_PURCHASED.title",
      description: "user_funnel.NOT_PURCHASED.description",
      icon: "fa:fas fa-cart-arrow-down",
    },
    SEX: {
      type: "SEX",
      title: "user_funnel.SEX.title",
      description: "user_funnel.SEX.description",
      icon: "fa:fas fa-venus-mars",
      inputs: {
        sex: {
          type: "enum",
          title: "User genders",
          items: [
            { code: "MALE", name: "Male", icon: "user" },
            { code: "FEMALE", name: "Female", icon: "user" },
          ],
          multiple: true,
          chips: true,
        },
      },
    },
    LOCATION: {
      type: "LOCATION",
      title: "user_funnel.LOCATION.title",
      description: "user_funnel.LOCATION.description",
      icon: "fa:fas fa-map-marker-alt",
      inputs: { countries: { type: "countries", title: "User countries" } },
    },

    LIMIT: {
      type: "LIMIT",
      title: "user_funnel.LIMIT.title",
      description: "user_funnel.LIMIT.description",
      icon: "fa:fas fa-sort-numeric-down",
      inputs: { limit: { type: "number", title: "Limit output count" } },
    },

    SEGMENTS: {
      type: "SEGMENTS",
      title: "user_funnel.SEGMENTS.title",
      description: "user_funnel.SEGMENTS.description",
      icon: "fa:fas fa-object-ungroup",
      inputs: {
        segments: { type: "segments", title: "Select customers segments" },
      },
    },
  };

}

export namespace Customer {
  /** JSON primitive accepted by customer metadata and relation payloads. */
  export type ApiJsonPrimitive = string | number | boolean | null;

  /** JSON object used for customer profile, tags, metrics, and relation projections. */
  export interface ApiJsonObject {
    [key: string]: ApiJsonValue | undefined;
  }

  /** JSON array used for customer profile, tags, metrics, and relation projections. */
  export interface ApiJsonArray extends Array<ApiJsonValue> {}

  export type ApiJsonValue = ApiJsonPrimitive | ApiJsonObject | ApiJsonArray;

  /** Compact customer projection embedded in order and payment payloads. */
  export interface CompactProjection {
    id: number;
    shop_id?: number;
    user_id?: number | null;
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    badge?: string | null;
  }

  /** Safe partial update payload for shop customer profile and segmentation fields. */
  export interface ApiPatch {
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    badge?: string | null;
    note?: string | null;
    tags?: string[] | null;
    meta?: ApiJsonObject | null;
  }
}
