
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
import tagManagerIcon from './plugin/assets/google-tag-manager.svg';
import verificationTagIcon from './plugin/assets/search-console.svg';
import facebookPixelIcon from './plugin/assets/meta.png';

export const ShopPlugin = {
    TagManager: {
        code: "TagManager",
        name: "Tag Manager",
        description: "",
        icon: tagManagerIcon,
        url: "https://tagmanager.google.com",
        to:{name:'BPageShopChannelGoogle'}
    },

    VerificationTag: {
        code: "VerificationTag",
        name: "Search Console",
        description: "",
        icon: verificationTagIcon,
        url: "https://search.google.com/search-console?",
        to:{name:'BPageShopChannelGoogle'}
    },

    FacebookPixel: {
        code: "FacebookPixel",
        name: "Facebook Pixel",
        description: "",
        icon: facebookPixelIcon,
        //url: "https://search.google.com/search-console?",
        to:{name:'BPageShopChannelMeta'}
    },
}