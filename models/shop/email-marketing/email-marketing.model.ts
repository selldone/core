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

export  interface EmailMarketing {
    id: number;
    shop_id: number;
    name: string;
    in_que: boolean;
    user_id: number;  // Approved by this user (admin or...)
    approve: string | null;  // null or 'Pending' or 'Accept' or 'Reject'
    sent: boolean;
    schedule_at: string;  // Assuming Carbon translates to JavaScript Date
    structure: any[];  // Assuming array can be of any type
    html: string;
    text: string;
    filter: any[];  // Assuming array can be of any type
    subject: string;
    from: string;
    sends: number;
    delivers: number;
    views: number;
    clicks: number;
    buys: number;
    amount_buy: number;
    currency: string;
    error: string | null;

}
