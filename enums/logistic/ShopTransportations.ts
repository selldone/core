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

export namespace ShopTransportations {
  export interface IShopTransportations {
    code: string;
    name: string;
    description: string;
    icon: string; // Assuming the require function returns a string path
    default: IDefault;
    pickup?: true; // Is pickup!
  }

  /**
   * Represents the default configuration for a transportation type.
   */
  export interface IDefault {
    /** Specifies the type of transportation. */
    type: string;

    /** Indicates whether the transportation type is enabled or not. */
    enable: boolean;

    /** Specifies the maximum distance (in kilometers or miles) the transportation type can cover. */
    distance: number;

    /** Specifies the maximum weight (in kilograms or pounds) the transportation type can carry. */
    max_weight: number;

    /** Specifies the maximum width (in centimeters or inches) of a package for this transportation type. */
    max_w: number;

    /** Specifies the maximum length (in centimeters or inches) of a package for this transportation type. */
    max_l: number;

    /** Specifies the maximum height (in centimeters or inches) of a package for this transportation type. */
    max_h: number;

    /**
     * Lists the days of the week when this transportation type operates.
     * E.g., ["Sunday", "Monday", ...]
     */
    days: string[];

    /**
     * Lists the time spans during which this transportation type operates.
     * E.g., ["Morning", "Evening"]
     */
    time_spans: string[];

    /** Indicates whether the transportation type operates during holidays. */
    holidays: boolean;

    /** Represents a constant value associated with the transportation type. */
    const: number;

    /** Coefficient for calculating cost based on distance. */
    distance_cof: number;

    /** Coefficient for calculating cost based on weight. */
    weight_cof: number;

    /** Coefficient for calculating cost based on price. */
    price_cof: number;

    /** Coefficient for calculating cost based on a combination of distance and weight. */
    distance_weight_cof: number;

    /** Indicates whether free shipping is available for this transportation type. */
    free_shipping: boolean;

    /** Specifies the price limit above which free shipping is available. */
    free_shipping_limit: number;

    /** Indicates whether cash on delivery is accepted. */
    cod: boolean;

    /** Indicates whether the shipping cost can be paid upon delivery. */
    sod: boolean;
  }
}

export const ShopTransportations: Record<
  string,
  ShopTransportations.IShopTransportations
> = {
  Motorbike: {
    code: "Motorbike",
    name: "global.transportation_type.motorbike",
    description: "global.transportation_type.motorbike_description",

    icon: require("./assets/transportations/motorbike.svg"),

    default: {
      type: "Motorbike",
      enable: false,
      distance: 15,
      max_weight: 20,
      max_w: 50,
      max_l: 100,
      max_h: 100,

      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      time_spans: ["Morning", "Evening"],
      holidays: false,

      const: 0,
      distance_cof: 0,
      weight_cof: 0,
      price_cof: 0,
      distance_weight_cof: 0,

      free_shipping: true,
      free_shipping_limit: 0,

      cod: false, // Accept cash on delivery
      sod: false, // Pay shipping cost on delivery
    },
  },

  Pickup: {
    code: "Pickup",
    name: "global.transportation_type.pickup",
    description: "global.transportation_type.pickup_description",

    icon: require("./assets/transportations/pickup.svg"),

    pickup: true, // Is pickup!

    default: {
      type: "Pickup",

      enable: false,
      distance: 50,
      max_weight: 2000,
      max_w: 200,
      max_l: 240,
      max_h: 150,

      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      time_spans: ["Morning", "Evening"],
      holidays: false,

      const: 0,
      distance_cof: 0,
      weight_cof: 0,
      price_cof: 0,
      distance_weight_cof: 0,

      free_shipping: true,
      free_shipping_limit: 0,

      cod: false,
      sod: false,
    },
  },

  CargoSmall: {
    code: "CargoSmall",
    name: "global.transportation_type.cargo_small",
    description: "global.transportation_type.cargo_description",

    icon: require("./assets/transportations/cargo_s.svg"),

    default: {
      type: "CargoSmall",
      enable: false,
      distance: 20,
      max_weight: 200,
      max_w: 100,
      max_l: 120,
      max_h: 80,

      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      time_spans: ["Morning", "Evening"],
      holidays: false,

      const: 0,
      distance_cof: 0,
      weight_cof: 0,
      price_cof: 0,
      distance_weight_cof: 0,

      free_shipping: true,
      free_shipping_limit: 0,

      cod: false,
      sod: false, // پس کرایه
    },
  },
  Cargo: {
    code: "Cargo",
    name: "global.transportation_type.cargo",
    description: "global.transportation_type.cargo_description",

    icon: require("./assets/transportations/cargo.svg"),

    default: {
      type: "Cargo",

      enable: false,
      distance: 50,
      max_weight: 2000,
      max_w: 200,
      max_l: 240,
      max_h: 150,

      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      time_spans: ["Morning", "Evening"],
      holidays: false,

      const: 0,
      distance_cof: 0,
      weight_cof: 0,
      price_cof: 0,
      distance_weight_cof: 0,

      free_shipping: true,
      free_shipping_limit: 0,

      cod: false,
      sod: true,
    },
  },
  Truck: {
    code: "Truck",
    name: "global.transportation_type.truck",
    description: "global.transportation_type.truck_description",

    icon: require("./assets/transportations/truck.svg"),

    default: {
      type: "Truck",

      enable: false,
      distance: 1000,
      max_weight: 10000,
      max_w: 220,
      max_l: 320,
      max_h: 220,

      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      time_spans: ["Morning", "Evening"],
      holidays: false,

      const: 0,
      distance_cof: 0,
      weight_cof: 0,
      price_cof: 0,
      distance_weight_cof: 0,

      free_shipping: true,
      free_shipping_limit: 0,

      cod: false,
      sod: true,
    },
  },
  PostFast: {
    code: "PostFast",
    name: "global.transportation_type.fast_post",
    description: "global.transportation_type.fast_post_description",

    icon: require("./assets/transportations/post_fast.svg"),

    default: {
      type: "PostFast",

      enable: false,
      distance: 1500,
      max_weight: 25,
      max_w: 50,
      max_l: 50,
      max_h: 50,

      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      time_spans: ["Morning", "Evening"],
      holidays: false,

      const: 0,
      distance_cof: 0,
      weight_cof: 0,
      price_cof: 0,
      distance_weight_cof: 0,

      free_shipping: true,
      free_shipping_limit: 0,

      cod: true,
      sod: false,
    },
  },
  Post: {
    code: "Post",
    name: "global.transportation_type.post",
    description: "global.transportation_type.post_description",
    icon: require("./assets/transportations/post.svg"),

    default: {
      type: "Post",

      enable: false,
      distance: 1500,
      max_weight: 50,
      max_w: 50,
      max_l: 80,
      max_h: 80,

      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      time_spans: ["Morning", "Evening"],
      holidays: false,

      const: 0,
      distance_cof: 0,
      weight_cof: 0,
      price_cof: 0,
      distance_weight_cof: 0,

      free_shipping: true,
      free_shipping_limit: 0,

      cod: true,
      sod: false,
    },
  },
  Airplane: {
    code: "Airplane",
    name: "global.transportation_type.airplane",
    description: "global.transportation_type.airplane_description",

    icon: require("./assets/transportations/airplane.svg"),

    default: {
      type: "Airplane",

      enable: false,
      distance: 10000,
      max_weight: 200,
      max_w: 100,
      max_l: 100,
      max_h: 100,

      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      time_spans: ["Morning", "Evening"],
      holidays: false,

      const: 0,
      distance_cof: 0,
      weight_cof: 0,
      price_cof: 0,
      distance_weight_cof: 0,

      free_shipping: true,
      free_shipping_limit: 0,

      cod: false,
      sod: true,
    },
  },
  Bicycle: {
    code: "Bicycle",
    name: "global.transportation_type.bicycle",

    description: "global.transportation_type.bicycle_description",

    icon: require("./assets/transportations/bicycle.svg"),

    default: {
      type: "Bicycle",

      enable: false,
      distance: 15,
      max_weight: 20,
      max_w: 40,
      max_l: 40,
      max_h: 40,

      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      time_spans: ["Morning", "Evening"],
      holidays: false,

      const: 0,
      distance_cof: 0,
      weight_cof: 0,
      price_cof: 0,
      distance_weight_cof: 0,

      free_shipping: true,
      free_shipping_limit: 0,

      cod: true,
      sod: false,
    },
  },
  Global: {
    code: "Global",
    name: "global.transportation_type.global",
    description: "global.transportation_type.global_description",

    icon: require("./assets/transportations/global.svg"),

    default: {
      type: "Global",

      enable: false,
      distance: 10000,
      max_weight: 100000,
      max_w: 8000,
      max_l: 4000,
      max_h: 320,

      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      time_spans: ["Morning", "Evening"],
      holidays: false,

      const: 0,
      distance_cof: 0,
      weight_cof: 0,
      price_cof: 0,
      distance_weight_cof: 0,

      free_shipping: true,
      free_shipping_limit: 0,

      cod: false,
      sod: true,
    },
  },
};
