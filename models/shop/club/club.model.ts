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

import bronze from "./assets/customer-levels/bronze.svg";
import bronzeOutline from "./assets/customer-levels/bronze-outline.svg";
import silver from "./assets/customer-levels/silver.svg";
import silverOutline from "./assets/customer-levels/silver-outline.svg";
import gold from "./assets/customer-levels/gold.svg";
import goldOutline from "./assets/customer-levels/gold-outline.svg";
import platinum from "./assets/customer-levels/platinum.svg";
import platinumOutline from "./assets/customer-levels/platinum-outline.svg";
import diamond from "./assets/customer-levels/diamond.svg";
import diamondOutline from "./assets/customer-levels/diamond-outline.svg";

/**
 * Represents a Shop's Club membership.
 */
export interface Club {
  /** The associated shop's identifier. */
  shop_id: number;

  /** The level of customer badge associated with the shop club. */
  level: keyof typeof Club.Levels;

  /** Description of the shop club. */
  description: string;

  /** Currency for the club's charges. */
  currency: string;

  /** Monthly charge for the club membership. */
  monthly: number;

  /** Annual charge for the club membership. */
  annually: number;

  /** Discount percentage offered to the club members. */
  percent: number;

  /** Upper limit for the discount. */
  limit: number;

  /** Indicates if the club offers free shipping (1 for true, 0 for false). */
  free_shipping: number;

  /** Count of members or other relevant count metric. */
  count: number;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Club {
  export const Levels = {
    BRONZE: {
      code: "BRONZE",
      name: "global.customer_club.bronze",
      icon: bronze,
      icon_outline: bronzeOutline,
    },
    SILVER: {
      code: "SILVER",
      name: "global.customer_club.silver",
      icon: silver,
      icon_outline: silverOutline,
    },
    GOLD: {
      code: "GOLD",
      name: "global.customer_club.gold",
      icon: gold,
      icon_outline: goldOutline,
    },
    PLATINUM: {
      code: "PLATINUM",
      name: "global.customer_club.platinum",
      icon: platinum,
      icon_outline: platinumOutline,
    },
    DIAMOND: {
      code: "DIAMOND",
      name: "global.customer_club.diamond",
      icon: diamond,
      icon_outline: diamondOutline,
    },
  };
}
