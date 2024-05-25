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

export interface Connect {
  id: number;
  user_id: number;
  code: string;
  mode: Connect.ConnectMode;
  name: string;
  description: string;
  icon: string;
  enable: boolean;
  form?: any[] | null; // Define a stricter type for the form elements if possible.
  confirm: boolean;
  read_categories: boolean;
  write_categories: boolean;
  read_products: boolean;
  write_products: boolean;
  read_orders: boolean;
  write_orders: boolean;
  read_customers: boolean;
  write_customers: boolean;
  shipping: boolean;
  created_at: Date;
  updated_at: Date;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace Connect {
  export enum ConnectMode {
    Migration = "Migration",
    Dropshipping = "Dropshipping",
    Marketplace = "Marketplace",
    Accounting = "Accounting",
    Other = "Other",
  }
}
