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

export interface Transportation {
  /** Unique identifier for the transportation model */
  id: number;

  /** Identifier for the associated shop */
  shop_id: number;

  /** Type of the transportation */
  type: string;

  /** Indicates if the transportation is enabled or not */
  enable: boolean;

  /** Distance covered by the transportation */
  distance: number;

  /** Maximum weight the transportation can carry */
  max_weight: number;

  /** Maximum width of the item for transportation */
  max_w: number;

  /** Maximum length of the item for transportation */
  max_l: number;

  /** Maximum height of the item for transportation */
  max_h: number;

  /**
   * ETA: the estimated time of arrival.
   * {@see ETA}
   */
  eta?: string;

  /** ETD: the estimated time of departure in hours */
  etd: number;

  /** Days of operation for the transportation */
  days: any[];

  /** Time spans during which the transportation operates */
  time_spans: any[];

  /** Indicates if the transportation operates on holidays or not */
  holidays: boolean;

  /** Currency used for the transportation costs */
  currency: string;

  /** Constant value for the transportation cost calculation */
  const: number;

  /** Coefficient for distance in the transportation cost calculation */
  distance_cof: number;

  /** Coefficient for weight in the transportation cost calculation */
  weight_cof: number;

  /** Coefficient for price in the transportation cost calculation */
  price_cof: number;

  /** Coefficient for distance-weight in the transportation cost calculation */
  distance_weight_cof: number;

  /** Indicates if free shipping is available */
  free_shipping: boolean;

  /** Limit above which free shipping is provided */
  free_shipping_limit: number;

  /** Indicates if cash on delivery is available */
  cod: boolean;

  /** Indicates if "پس کرایه" (sod) is available */
  sod: boolean;

  /**
   * Digest of service info.
   * Contains user IDs, service IDs, errors, and user count.
   */
  info: {
    user_ids: number[];
    service_ids: number[];
    errors: any[];
    users: number;
  };

  /** List of pickup addresses for the customer to select from */
  pickups: any[];

  /** Custom public title for the transportation */
  title: string;

  /** Custom public logo for the transportation */
  logo: string;

  /**
   * Profiles to keep calculation based on country location.
   * Can be null.
   */
  profiles?: any[] | null;
}
