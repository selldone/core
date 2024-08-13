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
  /**
   * The unique identifier for the gateway.
   */
  id: number;

  /**
   * The currency code associated with the gateway (e.g., 'USD').
   */
  currency: string;

  /**
   * The percentage of wage or fee taken by the gateway.
   */
  wage_percent: number;

  /**
   * The minimum fee amount that can be charged by the gateway.
   */
  wage_min: number;

  /**
   * The maximum fee amount that can be charged by the gateway.
   */
  wage_max: number;

  /**
   * The minimum transaction amount allowed by the gateway.
   */
  min: number;

  /**
   * The maximum transaction amount allowed by the gateway.
   */
  max: number;

  /**
   * Indicates whether the gateway is enabled or not.
   */
  enable: boolean;

  /**
   * Indicates if the gateway accepts service charges (true: accepts charges).
   */
  charge: boolean;

  /**
   * Indicates if the gateway can be used in the POS system by sellers (true: POS enabled).
   */
  pos: boolean;

  /**
   * Indicates if cash on delivery payment is supported (Offline - COD).
   */
  cod: boolean;

  /**
   * Indicates if the gateway is only for Selldone POS.
   */
  cash: boolean;

  /**
   * Indicates if direct payment to a card or bank account is supported, with receipt upload.
   */
  dir: boolean;

  /**
   * Indicates if the gateway uses Selldone's blockchain service (true: generate wallet and save wallet ID).
   */
  blockchain: boolean;

  /**
   * Indicates if the gateway supports subscription-based payments.
   */
  subscription: boolean;

  /**
   * Indicates if the gateway is in debug mode.
   */
  debug: boolean;

  /**
   * Indicates if the gateway supports manual confirmation by the seller.
   */
  manual: boolean;

  /**
   * List of available manual actions such as 'refund' and 'deliver'.
   */
  actions: ('refund'|'deliver')[];

  /**
   * A unique code identifying the gateway.
   */
  code: string;

  /**
   * The name of the gateway.
   */
  name: string;

  /**
   * A brief description of the gateway.
   */
  description: string;

  /**
   * Public configuration or data related to the gateway.
   */
  public: object;

  /**
   * Private configuration or data related to the gateway.
   */
  private: object;

  /**
   * Additional information or metadata about the gateway.
   */
  info: object;

  /**
   * The URL or path to the gateway's logo.
   */
  logo: string;

  /**
   * The URL or path to the gateway's icon.
   */
  icon: string;

  /**
   * The URL to an informational or promotional video for the gateway.
   */
  video: string;

  /**
   * The URL to the gateway's official website or documentation.
   */
  url: string;

  /**
   * The frontend component associated with the gateway.
   */
  component: string;

  /**
   * The timeout duration for gateway transactions, in seconds.
   */
  timeout: number;

  /**
   * Network configuration or settings associated with the gateway.
   */
  network: any;

  /**
   * An array representing wallet configurations or wallet instances for the gateway.
   * Replace `any` with a specific type if known.
   */
  wallet: any[];

  /**
   * Custom script or configuration script associated with the gateway.
   */
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
    actions?: ('refund'|'deliver')[];
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
