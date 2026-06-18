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
 * Printable document template stored in `print_templates`.
 *
 * Backend source: `App\Storefront\Print\Template\PrintTemplate`, table `print_templates`.
 * Templates are unique by `shop_id`, `type`, and `language`; `elements` and `fonts` are JSON-cast columns.
 */
export interface PrintTemplate {
  /** Template id. Source: `print_templates.id`. */
  id: number;

  /** Editor user id, or `null`. Source: nullable `print_templates.user_id`. */
  user_id: number | null;

  /** Owning shop id. Source: `print_templates.shop_id`. */
  shop_id: number;

  /** Title of the template. */
  title: string;

  /** Template type. Source: `print_templates.type`. */
  type: PrintTemplateTypes.IType;

  /** Language code such as `en`, or `null` for shop/default language template. */
  language: string | null;

  /** Page width, including unit, for example `100px` or `10cm`. */
  width: string;

  /** Page height, including unit, for example `50px` or `5cm`. */
  height: string;

  /** Printable element tree stored in JSON. */
  elements: PrintTemplate.Element[];

  /** Font URLs used by the template. */
  fonts: string[] | null;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: PrintTemplate.JsonObject | null;

  /** Editor user relation when eager-loaded. */
  user?: PrintTemplate.JsonObject | null;
}

export namespace PrintTemplate {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSON casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Printable design element stored in `print_templates.elements`. */
  export interface Element extends JsonObject {
    id?: string | number;
    type?: string;
    x?: number;
    y?: number;
    width?: number | string;
    height?: number | string;
    text?: string | null;
    value?: JsonValue;
    style?: JsonObject;
    children?: Element[];
  }

  /** Payload accepted by print-template create/update endpoints. */
  export interface Upsert {
    type: PrintTemplateTypes.IType;
    language?: string | null;
    title: string;
    width: string;
    height: string;
    elements: Element[];
    fonts?: string[] | null;
  }

  /** Compact unique key used by backend validation: one template per shop/type/language. */
  export interface UniqueKey {
    shop_id: number;
    type: PrintTemplateTypes.IType;
    language?: string | null;
  }
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace PrintTemplateTypes {
  export enum IType {
    INVOICE = "INVOICE",
    BOX_LABEL = "BOX_LABEL",
  }

  export const Types = {
    INVOICE: { value: IType.INVOICE, title: "Invoice", icon: "receipt" },
    BOX_LABEL: { value: IType.BOX_LABEL, title: "Box Label", icon: "pallet" },
  } as const;
}
