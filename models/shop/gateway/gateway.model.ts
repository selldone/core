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

export class Gateway implements Gateway.IGateway {
  id: number;
  currency: string;
  wage_percent: number;
  wage_min: number;
  wage_max: number;
  min: number;
  max: number;
  enable: boolean;
  charge: boolean;
  pos: boolean;
  cod: boolean;
  cash: boolean;
  dir: boolean;
  blockchain: boolean;
  subscription: boolean;
  debug: boolean;
  manual: boolean;
  code: string;
  name: string;
  description: string;
  public: object;
  private: object;
  info: object;
  logo: string;
  icon: string;
  video: string;
  url: string;
  component: string;
  timeout: number;
  network: any;
  wallet: any[]; // assuming array of a certain type, replace 'any' with the specific type if known
  script: string;

  constructor(
    data: {
      id: number;
    } & Partial<Gateway.IGateway>,
  ) {
    Object.assign(this, data);
  }
}

export namespace Gateway {
  export interface IGateway {
    id: number;
    currency?: string;
    wage_percent?: number;
    wage_min?: number;
    wage_max?: number;
    min?: number;
    max?: number;
    enable?: boolean;
    charge?: boolean;
    pos?: boolean;
    cod?: boolean;
    cash?: boolean;
    dir?: boolean;
    blockchain?: boolean;
    subscription?: boolean;
    debug?: boolean;
    manual?: boolean;
    code?: string;
    name?: string;
    description?: string;
    public?: object;
    private?: object;
    info?: object;
    logo?: string;
    icon?: string;
    video?: string;
    url?: string;
    component?: string;
    timeout?: number;
    network?: any; // Assuming GatewayNetworkStatus is defined elsewhere
    wallet?: any[]; // assuming array of a certain type, replace 'any' with the specific type if known
    script?: string;
  }
}
