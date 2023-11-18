export const PricingTypes = {
  FIX: {
    // Fix price    (Physical, Virtual, File, Service)
    code: "FIX",
    title: "global.PricingTypes.FIX.title",
    message: "global.PricingTypes.FIX.message",
    image: require("@components/assets/pricings/fix.svg"),
  },
  ESTIMATION: {
    // Set price in pre-checkout by seller and can be change in future (Service only)
    code: "ESTIMATION",
    title: "global.PricingTypes.ESTIMATION.title",
    message: "global.PricingTypes.ESTIMATION.message",
    image: require("@components/assets/pricings/estimation.svg"),
  },
  AGREEMENT: {
    // Set final price in pre-checkout by seller (Service only)
    code: "AGREEMENT",
    title: "global.PricingTypes.AGREEMENT.title",
    message: "global.PricingTypes.AGREEMENT.message",
    image: require("@components/assets/pricings/agreement.svg"),
  },
  BID: {
    // Bid on product by buyer (Higher win) -> Disable now
    code: "BID",
    title: "global.PricingTypes.BID.title",
    message: "global.PricingTypes.BID.message",
    image: require("@components/assets/pricings/bid.svg"),
  },
};
