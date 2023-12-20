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
  /** ━━━━━━━━━━━━━━━━━━━━━━ Mailgun ━━━━━━━━━━━━━━━━━━━━━━ **/

  {
    driver: "mailgun",
    title: "Mailgun",
    description:
      "A powerful, developer-focused email service known for its robust API capabilities for sending, receiving, and tracking emails.",

    icon: require("@components/assets/trademark/mailgun.svg"),

    options: {
      host: {
        label: "Domain",
        message: "Match with your verified domain in Mailgun.",
        placeholder: "your-domain.com",
      },
      endpoint: {
        label: "Endpoint",
        placeholder: "api.mailgun.net",
        items: ["api.mailgun.net", "api.eu.mailgun.net"],
      },
      api: {
        label: "API Key",
        placeholder: "XXXXXXXXXXXXXXXXXXXXX-XXXXX-XXXXX",
      },
    },
  },
  /** ━━━━━━━━━━━━━━━━━━━━━━ Postmark ━━━━━━━━━━━━━━━━━━━━━━ **/
  {
    driver: "postmark",
    title: "Postmark",
    description:
      "A fast and reliable email delivery service that specializes in transactional emails, offering detailed analytics and consistent high-speed performance.",
    icon: require("@components/assets/trademark/postmark.svg"),
    options: {
      endpoint: {
        label: "Stream ID",
        message: "Enter message stream id.",
      },
      api: {
        label: "API Key",
        message: "Enter your Postmark api key.",
        placeholder: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      },
    },
  },

  /** ━━━━━━━━━━━━━━━━━━━━━━ SES ━━━━━━━━━━━━━━━━━━━━━━ **/
  {
    driver: "ses",
    title: "Amazon SES",
    description:
      "Amazon Simple Email Service is a cost-effective, flexible, and scalable email service that enables developers to send mail from within any application.",
    icon: require("@components/assets/trademark/amazon-ses.svg"),
    options: {
      username: {
        label: "Key",
        message: "AWS access key.",
      },
      api: {
        label: "Secret Key",
        message: "AWS secret key.",
      },
      endpoint: {
        label: "Region",
        message: "AWS region.",
        placeholder: "us-east-1",
      },
    },
  },

  /** ━━━━━━━━━━━━━━━━━━━━━━ SMTP ━━━━━━━━━━━━━━━━━━━━━━ **/

  {
    driver: "smtp",
    title: "SMTP",
    description: "All other mail service providers.",
    icon: require("@components/assets/icons/smtp.svg"),

    options: {
      host: {
        label: "SMTP Host",
        message: "Your SMTP host address.",
        placeholder: "smtp.mail-provider.com",
      },
      port: {
        label: "SMTP Port",
        message: "Your SMTP port.",
        placeholder: "Set the SMTP port, example: 25.",
      },
      username: {
        label: "SMTP Username",
        message: "Your SMTP username.",
        placeholder: "User name...",
      },
      password: {
        label: "SMTP Password",
        message: "Your SMTP password.",
        placeholder: "Password...",
      },
    },
  },
];
