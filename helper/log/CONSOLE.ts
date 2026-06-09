/*
 * Copyright (c) 2024. Selldone® Business OS™
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
 * Tiny wrapper around `console.log` used to centrally disable noisy debug logs.
 */
export class CONSOLE {
   /**
    * Logs debug arguments only when the internal development flag is enabled.
    *
    * The current implementation intentionally never logs because the condition is hardcoded
    * to `false`. Keeping the wrapper allows re-enabling debug output from one place later.
    *
    * @param {...any[]} args - Values that would be forwarded to `console.log`.
    */
   static log(...args: any[]) {
       // @ts-ignore
       if (/*import.meta?.env?.MODE === 'development' && */false) {
           console.log(...args);
       }
    }
}