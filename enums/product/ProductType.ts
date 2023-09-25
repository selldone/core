import { PhysicalOrderStates } from "../basket/PhysicalOrderStates";
import { VirtualOrderStates } from "../basket/VirtualOrderStates";
import { FileOrderStates } from "../basket/FileOrderStates";
import { ServiceOrderStates } from "../basket/ServiceOrderStates";
import { SubscriptionOrderStates } from "../basket/SubscriptionOrderStates";

interface IProductType {
  /** Code of the product type. */
  code: string;

  /** Code for the basket associated with the product type. */
  basket_code: string;

  /** Name localization key for the product type. */
  name: string;

  /** Path to the product type's icon. */
  image: string;

  /** Path to the product type's basket image. */
  basket: string;

  /** Description localization key for the product type. */
  description: string;

  /** Indicates whether the product type is enabled. */
  enable: boolean;

  /** Name of the process page for the product type. */
  process_page: string;

  /** Name of the order page for the product type. */
  order_page: string;

  /** Primary color associated with the product type. */
  color: string;

  /** Array of colors associated with the product type. */
  colors: string[];

  /** States associated with the delivery of the product type. */
  delivery_states: typeof PhysicalOrderStates | typeof VirtualOrderStates | typeof FileOrderStates | typeof ServiceOrderStates | typeof SubscriptionOrderStates;
}

export const ProductType: Record<string, IProductType> = {
  PHYSICAL: {
    code: "PHYSICAL",
    basket_code: "SM",
    name: "global.product_types.physical",
    image: require("@/Components/assets/icons/shopping-bag.svg"),
    basket: require("./assets/product-types/basket-physical.svg"),
    description: "global.product_types.physical_description",
    enable: true,
    process_page: "ShopProcessCenter_Physical",
    order_page: "ShopProcessCenterPhysicalOrderPage_Dashboard",

    color: "#689F38",
    colors: ["#689F38", "#AFB42B"],
    delivery_states: PhysicalOrderStates,
  },
  VIRTUAL: {
    code: "VIRTUAL",
    basket_code: "SV",
    name: "global.product_types.virtual",
    image: require("@/Components/assets/icons/virtual-product-icon.svg"),
    basket: require("./assets/product-types/basket-virtual.svg"),
    description: "global.product_types.virtual_description",
    enable: true,
    process_page: "ShopProcessCenter_Virtual",
    order_page: "ShopProcessCenterVirtualOrderPage_Dashboard",

    color: "#2196F3",
    colors: ["#2196F3", "#0097A7"],
    delivery_states: VirtualOrderStates,
  },
  FILE: {
    code: "FILE",
    basket_code: "SF",
    name: "global.product_types.file",
    image: require("@/Components/assets/icons/files.svg"),
    basket: require("./assets/product-types/basket-file.svg"),
    description: "global.product_types.file_description",
    enable: true,
    process_page: "ShopProcessCenter_File",
    order_page: "ShopProcessCenterFileOrderPage_Dashboard",

    color: "#F57C00",
    colors: ["#F57C00", "#FBC02D"],
    delivery_states: FileOrderStates,
  },
  SERVICE: {
    code: "SERVICE",
    basket_code: "SS",
    name: "global.product_types.service",
    image: require("@/Components/assets/icons/service.svg"),
    basket: require("./assets/product-types/basket-service.svg"),
    description: "global.product_types.service_description",
    enable: true,
    process_page: "ShopProcessCenter_Service",
    order_page: "ShopProcessCenterServiceOrderPage_Dashboard",

    color: "#E91E63",
    colors: ["#E91E63", "#C2185B"],
    delivery_states: ServiceOrderStates,
  },

  SUBSCRIPTION: {
    code: "SUBSCRIPTION",
    basket_code: "SN",
    name: "global.product_types.subscription",
    image: require("@/Components/assets/icons/subscription.svg"),
    basket: require("./assets/product-types/basket-subscription.svg"),
    description: "global.product_types.subscription_description",
    enable: true,
    process_page: "ShopProcessCenter_Subscription",
    order_page: "ShopProcessCenterSubscriptionOrderPage_Dashboard",

    color: "#673AB7",
    colors: ["#673AB7", "#512DA8"],
    delivery_states: SubscriptionOrderStates,
  },
};
