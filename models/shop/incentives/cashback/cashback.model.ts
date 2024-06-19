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


export interface Cashback {
  /**
   * @property int id - Cashback's unique identifier.
   */
  id: number;

  /**
   * @property int shop_id - Shop's unique identifier associated with this Cashback.
   */
  shop_id: number;

  /**
   * @property string code - Cashback code.
   */
  code: string;

  /**
   * @property boolean enable - Indicates if the Cashback is enabled.
   */
  enable: boolean;

  /**
   * @property double total_cashback - Total amount of cashback.
   */
  total_cashback: number;

  /**
   * @property int percent - Percentage discount.
   */
  percent: number;

  /**
   * @property double limit - Cashback limit.
   */
  limit: number;

  /**
   * @property boolean boosted - Boosted cashback (2x cashback mode).
   */
  boosted: boolean;

  /**
   * @property string currency - Currency type.
   */
  currency: string;

  /**
   * @property Carbon|null start - Start date.
   */
  start: Carbon | null;

  /**
   * @property Carbon|null end - End date.
   */
  end: Carbon | null;

  /**
   * @property string title - Title of the cashback program.
   */
  title: string;

  /**
   * @property string description - Description of the cashback program.
   */
  description: string;

  /**
   * @property boolean qualify - If true, checks qualification limits.
   */
  qualify: boolean;

  /**
   * @property boolean only_first_buy - Available only for the first buy.
   */
  only_first_buy: boolean;

  /**
   * @property float min_purchase - Minimum purchase required.
   */
  min_purchase: number;

  /**
   * @property boolean no_club - User not in any club.
   */
  no_club: boolean;

  /**
   * @property boolean bronze_club - User in bronze club.
   */
  bronze_club: boolean;

  /**
   * @property boolean silver_club - User in silver club.
   */
  silver_club: boolean;

  /**
   * @property boolean gold_club - User in gold club.
   */
  gold_club: boolean;

  /**
   * @property boolean platinum_club - User in platinum club.
   */
  platinum_club: boolean;

  /**
   * @property boolean diamond_club - User in diamond club.
   */
  diamond_club: boolean;

  /**
   * Notes by the team regarding the Cashback. Contains user_id, user_name, body, and date.
   */
  note: Array<{
    user_id: number;
    user_name: string;
    body: string;
    date: string;
  }>;
}
