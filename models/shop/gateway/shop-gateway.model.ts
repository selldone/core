// @ts-nocheck
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

export class ShopGateway implements ShopGateway.IShopGateway {
  id: number;
  shop_id: number;
  gateway_id: number;
  livemode: boolean;
  public: any[];
  private: any[];
  info: any[];
  token: string;
  enable: boolean;
  manual: boolean;
  caption: string;
  config: any[];
  theme: any[];
  meta: any[];

  constructor(
    data: {
      id: number;
      gateway_id: number;
    } & Partial<ShopGateway.IShopGateway>,
  ) {
    Object.assign(this, data);
  }
}

export namespace ShopGateway {
  export interface IShopGateway {
    id: number;
    shop_id: number;
    gateway_id: number;
    livemode: boolean;
    public: any[];
    private: any[];
    info: any[];
    token: string;
    enable: boolean;
    manual: boolean;
    caption: string;
    config: any[];
    theme: any[];
    meta: any[];
  }
}
