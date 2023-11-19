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

export const EmailProviders = [
  {
    driver: "mailgun",
    title: "Mailgun",
    icon: require("@components/assets/tradmark/mailgun.svg"),
    options: ["host", "endpoint", "api"],
    host_msg: "Match with your verified domain in Mailgun.",
  },
  /*  {
        driver: "smtp",
        title: "SMTP (Not recommended - slow)",
        icon: require("@components/assets/icons/smtp.svg"),
        options: ["host", "port", "username", "password"],

        host_placeholder: "smtp.mail-provider.com",
        host_msg: "Your SMTP host address.",
      },*/
];
