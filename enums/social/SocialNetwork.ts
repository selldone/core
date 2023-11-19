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

import SetupService from "../../server/SetupService";

interface SocialNetworkEntry {
  code: string;
  name: string;
  host: string;
  icon: string;
  title: string;
  image: string;
  color: string;
  query?: { text: string }; //url: current encoded url
  /**
   * create: skype:XXXXXXXX?chat
   * e.g. ?chat
   */
  suffix?: string;
  /**
   * Show in product
   */
  product?: boolean;
}

export const SocialNetwork: Record<string, SocialNetworkEntry> = {
  Instagram: {
    code: "Instagram",
    name: "global.social_network.instagram",
    host: "https://www.instagram.com/",
    icon: "fab fa-instagram",
    title: "global.social_network.instagram",
    image: require("@components/assets/tradmark/instagram.svg"),
    color: "#C2185B",
  },
  Telegram: {
    code: "Telegram",
    name: "global.social_network.telegram",
    host: "https://t.me/",
    icon: "fab fa-telegram",
    title: "global.social_network.telegram",
    image: require("@components/assets/tradmark/telegram.svg"),
    color: "#0288D1",
    product: true, // Show in product
  },
  GooglePlay: {
    code: "GooglePlay",
    name: "global.social_network.googleplay",
    host: "https://play.google.com/",
    icon: "fab fa-google-play",
    title: "global.social_network.googleplay",
    image: require("@components/assets/tradmark/googleplay.svg"),
    color: "#009688",
  },
  AppStore: {
    code: "AppStore",
    name: "global.social_network.appstore",
    host: "https://apps.apple.com/",
    icon: "fab fa-app-store",
    title: "global.social_network.appstore",
    image: require("@components/assets/tradmark/apple.svg"),
    color: "#616161",
  },
  Twitter: {
    code: "Twitter",
    name: "global.social_network.twitter",
    host: "https://twitter.com/",
    icon: "fab fa-twitter",
    title: "global.social_network.twitter",
    image: require("@components/assets/tradmark/twitter.svg"),
    color: "#0097A7",
  },
  Linkedin: {
    code: "Linkedin",
    name: "global.social_network.linkedin",
    host: "https://linkedin.com/",
    icon: "fab fa-linkedin",
    title: "global.social_network.linkedin",
    image: require("@components/assets/tradmark/linkedin.svg"),
    color: "#1576b6",
  },

  Medium: {
    code: "Medium",
    name: "global.social_network.medium",
    host: "https://medium.com/",
    icon: "fab fa-medium",
    title: "global.social_network.medium",
    image: require("@components/assets/tradmark/medium.svg"),
    color: "#1a1a1a",
  },
  Selldone: {
    code: "Selldone",
    name: "global.social_network.selldone",
    host: SetupService.MainServiceUrl() + "/",
    icon: "fas fa-store",
    title: "global.social_network.selldone",
    image: require("@components/assets/tradmark/selldone.svg"),
    color: "#70557e",
  },

  Facebook: {
    code: "Facebook",
    name: "global.social_network.facebook",
    host: "https://facebook.com/",
    icon: "fab fa-facebook",
    title: "global.social_network.facebook",
    image: require("@components/assets/tradmark/facebook.svg"),
    color: "#4267b2",
  },
  Messenger: {
    code: "Messenger",
    name: "global.social_network.facebook_messenger",
    host: "https://www.messenger.com/t/",
    icon: "fab fa-facebook-messenger",
    title: "global.social_network.facebook_messenger",
    image: require("@components/assets/tradmark/facebook-messenger.svg"),
    color: "#2196f3",
    product: true, // Show in product
  },

  Pinterest: {
    code: "Pinterest",
    name: "global.social_network.pinterest",
    host: "https://pinterest.com/",
    icon: "fab fa-pinterest",
    title: "global.social_network.pinterest",
    image: require("@components/assets/tradmark/pinterest.svg"),
    color: "#cb1f24",
  },
  WhatsApp: {
    code: "WhatsApp",
    name: "global.social_network.whatsapp",
    host: "https://wa.me/",
    icon: "fab fa-whatsapp",
    title: "global.social_network.whatsapp",
    image: require("@components/assets/tradmark/whatsapp.svg"),
    color: "#4caf50",
    query: { text: "url" }, //url: current encoded url
    product: true, // Show in product
  },

  Skype: {
    code: "Skype",
    name: "global.social_network.skype",
    host: "skype:",
    icon: "fab fa-skype",
    title: "global.social_network.skype",
    image: require("@components/assets/tradmark/skype.svg"),
    color: "#03a9f4",
    suffix: "?chat", // create: skype:XXXXXXXX?chat
    product: true, // Show in product
  },
};

export function CreateSocialConnectLink(
  network: keyof typeof SocialNetwork,
  user_name: string,
  query?: Record<string, any> | null
): string {
  const social_net = SocialNetwork[network];

  return (
    social_net.host +
    user_name +
    getSocialQuery(query ? query : social_net.query) +
    (social_net.suffix ? social_net.suffix : "")
  );
}

function getSocialQuery(query?: Record<string, any> | null) {
  if (!query) return "";

  const queryString = Object.keys(query)
    .map((key) => {
      const val = query[key] === "url" ? window.location.href : query[key];
      return key + "=" + val;
    })
    .join("&");

  return "?" + decodeURIComponent(queryString);
}
