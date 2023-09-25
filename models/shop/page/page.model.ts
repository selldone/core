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
  content: object;

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



}
