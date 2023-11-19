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

export const LogisticProfileType = {
  WARRANTY: {
    value: "WARRANTY",
    title: "Warranty",
    desc: "A warranty is a term of a contract. Depending on the terms of the contract, a product warranty may cover a product such that a manufacturer provides a warranty to a consumer with which the manufacturer has no direct contractual relationship. ",
    icon: "workspace_premium",
    product_column: "warranty_id",
  },
  RETURN_POLICY: {
    value: "RETURN_POLICY",
    title: "Return Policy",
    desc: "Return policies are the rules a retailer creates to manage how customers return and exchange unwanted merchandise they purchased. A return policy tells customers what items can be returned and for what reasons, as well as the timeframe over which returns are accepted.",
    icon: "repartition",
    product_column: "return_policy_id",
  },
  GUIDE: {
    value: "GUIDE",
    title: "Guide",
    desc: "It can be a size table of dresses or a diamond selection guide. The important thing to consider before creating guide profiles is that they should be applicable to more than one product.",
    icon: "support",
    product_column: "guide_id",
  },
  SHIPPING: {
    value: "SHIPPING",
    title: "Shipping",
    desc: "A shipping policy is a concise document or webpage that outlines important information around shipping when an order is placed online. It often includes details on shipping costs and methods, delivery times, and more.",
    icon: "local_shipping",
    product_column: "shipping_id",
  },
};
