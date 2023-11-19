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

export const SmsTemplateMode = {
  text: {
    code: "text",
    title: "Plain Text",
    desc: "Message will be created from a text with auto replace parameters and send.",
    icon: 'subject',
  },

  template:  {
    code: "template",
    title: "Structural Template",
    desc: "An object will be created from parameters and send to the provider.",
    icon: 'data_object',
  },
}