export const ShopRestriction = {
  PUBLIC: {
    code: "PUBLIC",
    title: "Public Store",
    desc: "All people can see and access all sides of your store. Also, you can add restrictions on the category level.",
    icon: "public",
  },

  RESTRICTED: {
    code: "RESTRICTED",
    title: "Restricted Purchase",
    desc: "People can see your store but just verifies people can purchase.",
    icon: "vpn_lock",
  },

  PRIVATE: {
    code: "PRIVATE",
    title: "Private Store",
    desc: "The only person who has a password or is granted as a verified customer can access your website. Also, you can add additional restrictions on the category level.",
    icon: "lock",
  },
};
