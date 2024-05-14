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

import {SetupService} from "../../server/SetupService";
import googleIcon from '../../assets/trademark/google.svg';
import telegramIcon from '../../assets/trademark/telegram.svg';
import appleIcon from "../../assets/trademark/apple.svg";
import facebookIcon from '../../assets/trademark/meta.png';
import instagramIcon from '../../assets/trademark/instagram.svg';
import mediumIcon from '../../assets/trademark/medium.svg';
import selldoneIcon from '../../assets/trademark/selldone.svg';
import facebookMessengerIcon from '../../assets/trademark/facebook-messenger.svg';
import pinterestIcon from '../../assets/trademark/pinterest.svg';
import whatsappIcon from '../../assets/trademark/whatsapp.svg';
import skypeIcon from '../../assets/trademark/skype.svg';

import twitterIcon from "../../assets/trademark/twitter.svg"

import linkedinIcon from "../../assets/trademark/linkedin.svg"

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
        icon: "fa:fab fa-instagram",
        title: "global.social_network.instagram",
        image: instagramIcon,

        color: "#C2185B",
    },
    Telegram: {
        code: "Telegram",
        name: "global.social_network.telegram",
        host: "https://t.me/",
        icon: "fa:fab fa-telegram",
        title: "global.social_network.telegram",
        image: telegramIcon,
        color: "#0288D1",
        product: true, // Show in product
    },
    GooglePlay: {
        code: "GooglePlay",
        name: "global.social_network.googleplay",
        host: "https://play.google.com/",
        icon: "fa:fab fa-google-play",
        title: "global.social_network.googleplay",
        image: googleIcon,
        color: "#009688",
    },
    AppStore: {
        code: "AppStore",
        name: "global.social_network.appstore",
        host: "https://apps.apple.com/",
        icon: "fa:fab fa-app-store",
        title: "global.social_network.appstore",
        image: appleIcon,
        color: "#616161",
    },
    Twitter: {
        code: "Twitter",
        name: "global.social_network.twitter",
        host: "https://twitter.com/",
        icon: "fa:fab fa-twitter",
        title: "global.social_network.twitter",
        image: twitterIcon,
        color: "#0097A7",
    },
    Linkedin: {
        code: "Linkedin",
        name: "global.social_network.linkedin",
        host: "https://linkedin.com/",
        icon: "fa:fab fa-linkedin",
        title: "global.social_network.linkedin",
        image: linkedinIcon,
        color: "#1576b6",
    },

    Medium: {
        code: "Medium",
        name: "global.social_network.medium",
        host: "https://medium.com/",
        icon: "fa:fab fa-medium",
        title: "global.social_network.medium",
        image: mediumIcon,
        color: "#1a1a1a",
    },
    Selldone: {
        code: "Selldone",
        name: "global.social_network.selldone",
        host: SetupService.MainServiceUrl() + "/",
        icon: "fa:fas fa-store",
        title: "global.social_network.selldone",
        image: selldoneIcon,

        color: "#70557e",
    },

    Facebook: {
        code: "Facebook",
        name: "global.social_network.facebook",
        host: "https://facebook.com/",
        icon: "fa:fab fa-facebook",
        title: "global.social_network.facebook",
        image: facebookIcon,
        color: "#4267b2",
    },
    Messenger: {
        code: "Messenger",
        name: "global.social_network.facebook_messenger",
        host: "https://www.messenger.com/t/",
        icon: "fa:fab fa-facebook-messenger",
        title: "global.social_network.facebook_messenger",
        image: facebookMessengerIcon,
        color: "#2196f3",
        product: true, // Show in product
    },

    Pinterest: {
        code: "Pinterest",
        name: "global.social_network.pinterest",
        host: "https://pinterest.com/",
        icon: "fa:fab fa-pinterest",
        title: "global.social_network.pinterest",
        image: pinterestIcon,
        color: "#cb1f24",
    },
    WhatsApp: {
        code: "WhatsApp",
        name: "global.social_network.whatsapp",
        host: "https://wa.me/",
        icon: "fa:fab fa-whatsapp",
        title: "global.social_network.whatsapp",
        image: whatsappIcon,
        color: "#4caf50",
        query: {text: "url"}, //url: current encoded url
        product: true, // Show in product
    },

    Skype: {
        code: "Skype",
        name: "global.social_network.skype",
        host: "skype:",
        icon: "fa:fab fa-skype",
        title: "global.social_network.skype",
        image: skypeIcon,
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
