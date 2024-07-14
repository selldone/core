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
 * Represents a Page associated with a shop.
 */
export interface Page {
  /**
   * Unique identifier for the Page.
   */
  id: number;

  /**
   * Identifier for the user associated with this Page.
   */
  user_id: number;

  /**
   * Identifier for the shop associated with this Page.
   */
  shop_id: number;

  /**
   * Boolean flag indicating if the Page is published.
   */
  published: boolean;

  /**
   * Name of the Page.
   */
  name: string;

  /**
   * Color associated with the Page.
   */
  color: string;

  /**
   * Note or remarks related to the Page.
   */
  note: string;

  /**
   * Image associated with the Page.
   */
  image: string;

  /**
   * Description of the Page.
   */
  description: string;

  /**
   * Direction or layout related to the Page.
   */
  direction: string;

  /**
   * Title of the Page.
   */
  title: string;

  /**
   * Content related to the Page.
   */
  content: Page.IContent;

  /**
   * Background settings or image for the Page.
   */
  background: string;

  /**
   * HTML content of the Page.
   */
  html: string;

  /**
   * CSS styles associated with the Page.
   */
  css: string;

  /**
   * SEO settings and data for the Page.
   */
  seo: object;

  /**
   * Number of visits to the Page.
   */
  visits: number;

  /**
   * Mobile-specific settings or data for the Page.
   */
  mobile: any[];

  /**
   * Tablet-specific settings or data for the Page.
   */
  tablet: any[];

  /**
   * Desktop-specific settings or data for the Page.
   */
  desktop: any[];

  /**
   * Prompt or hint describing what the Page is about. Optional.
   */
  prompt?: string;

  /**
   * SEO fetched data for auditing purposes. Optional.
   */
  audit?: object;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Page {
  export interface IContent {
    title: string;
    sections: ISection[];
    style: IStyle;
  }

  export interface ISection {
    /**
     * @deprecated
     */
    name: string;
    uid: string; // Keep section ID [new]
    /**
     * V1
     * @deprecated
     */
    data: any;
    /**
     * V2
     */

    label: string;
    object: {
      component: string;
      background: any;
      style: Record<string, any>;
      classes: string[];
      data: any;
      children: any;
      props: any;
    }[];
  }

  export interface IStyle {
    font_size: number;
    bg_color: string | null;
    fonts: string[];
    bg_gradient: any[];
    bg_size: string;
    bg_custom: string | null;
    bg_repeat: string | null;
    h1_size: string;
    h2_size: string;
    h3_size: string;
    h4_size: string;
    h5_size: string;
    h6_size: string;
    plate_light_1: string;
    plate_dark_1: string;
    plate_light_2: string;
    plate_dark_2: string;
    plate_light_3: string;
    plate_dark_3: string;
    plate_light_4: string;
    plate_dark_4: string;
    plate_light_5: string;
    plate_dark_5: string;
    plate_light_6: string;
    plate_dark_6: string;
    plate_light_7: string;
    plate_dark_7: string;
    plate_light_8: string;
    plate_dark_8: string;
    plate_light_9: string;
    plate_dark_9: string;
    plate_light_10: string;
    plate_dark_10: string;
    plate_light_11: string;
    plate_dark_11: string;
  }
}
