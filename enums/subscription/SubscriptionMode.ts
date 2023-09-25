import { PhysicalOrderStates } from "../basket/PhysicalOrderStates";
import { VirtualOrderStates } from "../basket/VirtualOrderStates";
import { FileOrderStates } from "../basket/FileOrderStates";
import { ServiceOrderStates } from "../basket/ServiceOrderStates";
import { ProductType } from "../product/ProductType";

export const SubscriptionMode = {
  // ══════════════════════════════ Subscription Box ══════════════════════════════
  SubBox: {
    code: "SubBox",
    title: "Subscription Box",
    desc: "A simple subscription box with a recurring delivery.",
    image: require("@/Components/assets/icons/subscription-box.svg"),
    delivery_states: PhysicalOrderStates,
    link_type: null,

    support_shipping: true,
    support_count: true, // User can select more than on item in order!
  },

  // ══════════════════════════════ 🦄 Membership ══════════════════════════════

  Membership: {
    code: "Membership",
    title: "Membership",
    desc: "Subscription for membership. Use this option if this subscription does not need fulfillment. You can upload files and send automated emails to subscribers.",
    image: require("@/Components/assets/icons/membership.svg"),
    delivery_states: null,
    link_type: null,

    support_shipping: false,
    support_count: false,
  },
  // ══════════════════════════════ Physical ══════════════════════════════

  SubPhysical: {
    code: "SubPhysical",
    title: "Subscription ● Auto Physical",
    desc: "A subscription box with a recurring delivery and auto-creation physical order after each successful payment.",
    image: ProductType.PHYSICAL.image,
    delivery_states: PhysicalOrderStates,
    link_type: ProductType.PHYSICAL,

    support_shipping: true,
    support_count: true, // User can select more than on item in order!
  },
  // ══════════════════════════════ Virtual ══════════════════════════════

  SubVirtual: {
    code: "SubVirtual",
    title: "Subscription ● Auto Virtual",
    desc: "A subscription with a recurring virtual item sends an auto-creation virtual order after each successful payment.",
    image: ProductType.VIRTUAL.image,
    delivery_states: VirtualOrderStates,
    link_type: ProductType.VIRTUAL,

    support_shipping: false,
    support_count: true, // User can select more than on item in order!
  },
  // ══════════════════════════════ File ══════════════════════════════

  SubFile: {
    code: "SubFile",
    title: "Subscription ● Auto File",
    desc: "A subscription with a recurring payment and auto-creation virtual order and get access to new linked file-products after each successful payment.",
    image: ProductType.FILE.image,
    delivery_states: FileOrderStates,
    link_type: ProductType.FILE,

    support_shipping: false,
    support_count: true, // User can select more than on item in order!
  },
  // ══════════════════════════════ Service ══════════════════════════════

  SubService: {
    code: "SubService",
    title: "Subscription ● Auto Service",
    desc: "A subscription with a recurring payment and auto-creation service order after each successful payment.",
    image: ProductType.SERVICE.image,
    delivery_states: ServiceOrderStates,
    link_type: ProductType.SERVICE,

    support_shipping: true,
    support_count: true, // User can select more than on item in order!
  },
};
