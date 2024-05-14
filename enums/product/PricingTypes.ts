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

import fixIcon from '../../assets/pricings/fix.svg';
import estimationIcon from '../../assets/pricings/estimation.svg';
import agreementIcon from '../../assets/pricings/agreement.svg';
import bidIcon from '../../assets/pricings/bid.svg';

export const PricingTypes = {
  FIX: {
    // Fix price    (Physical, Virtual, File, Service)
    code: "FIX",
    title: "global.PricingTypes.FIX.title",
    message: "global.PricingTypes.FIX.message",
    image: fixIcon,
  },
  ESTIMATION: {
    // Set price in pre-checkout by seller and can be change in future (Service only)
    code: "ESTIMATION",
    title: "global.PricingTypes.ESTIMATION.title",
    message: "global.PricingTypes.ESTIMATION.message",
    image: estimationIcon,
  },
  AGREEMENT: {
    // Set final price in pre-checkout by seller (Service only)
    code: "AGREEMENT",
    title: "global.PricingTypes.AGREEMENT.title",
    message: "global.PricingTypes.AGREEMENT.message",
    image: agreementIcon,
  },
  BID: {
    // Bid on product by buyer (Higher win) -> Disable now
    code: "BID",
    title: "global.PricingTypes.BID.title",
    message: "global.PricingTypes.BID.message",
    image: bidIcon,
  },
};
