
export const ShopPlugin = {
    TagManager: {
        code: "TagManager",
        name: "Tag Manager",
        description: "",
        icon: require("@/Components/assets/tradmark/google-tag-manager.svg"),
        url: "https://tagmanager.google.com",
        to:{name:'AdminShop_Channels_GoogleApp'}
    },

    VerificationTag: {
        code: "VerificationTag",
        name: "Search Console",
        description: "",
        icon: require("@/Components/assets/tradmark/search-console.svg"),
        url: "https://search.google.com/search-console?",
        to:{name:'AdminShop_Channels_GoogleApp'}
    },

    FacebookPixel: {
        code: "FacebookPixel",
        name: "Facebook Pixel",
        description: "",
        icon: require("@/Components/assets/tradmark/meta.png"),
        //url: "https://search.google.com/search-console?",
        to:{name:'AdminShop_Channels_FacebookApp'}
    },


}