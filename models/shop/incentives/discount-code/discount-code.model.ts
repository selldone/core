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

export  interface DiscountCode {
    id: number;
    code: string;
    percent: number;
    max: number;
    used: number;
    limit: number;
    currency: string;
    dis_start: string;
    dis_end: string;
    title: string;
    description: string;
    amount_discount: number;
    note: { user_id: number, user_name: string, body: string, date: string }[];

}
