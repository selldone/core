

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

import {Currency} from "@core/enums/payment/Currency";

export class TrackEventOnboarding {
  static EVENT_ONBOARDING = "SD Onboarding";

  static OnSelectCategoryStep1(category:string) {
    if (typeof gtag !== "function") return;
    gtag("event", this.EVENT_ONBOARDING + ": Step 1", {
      category: category,
    });
    //this.LOG({category});
  }
  static OnConfirmStep2(category:string, currency:keyof typeof Currency, income:number) {
    if (typeof gtag !== "function") return;
    gtag("event", this.EVENT_ONBOARDING + ": Step 2", {
      category: category,
      currency: currency,
      income: income,
    });
    //this.LOG({category, currency, income});
  }
  static OnCreateStep3(category:string, currency:keyof typeof Currency, income:number, country:string/* alpha-2 country code */) {
    if (typeof gtag !== "function") return;
    gtag("event", this.EVENT_ONBOARDING + ": Step 33", {
      category: category,
      currency: currency,
      income: income,
      country: country,
    });
    //this.LOG({category, currency, income});
  }

  /**
   * https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#login
   *
   * @constructor
   */
  static OnLoginUser() {
    if (typeof gtag !== "function") return;
    gtag("event", "login", {
      method: null,
    });
    console.log("⚡ Login");
  }

  static OnRegisterUser() {
    if (typeof gtag !== "function") return;
    gtag("event", "sign_up", {
      method: null,
    });
    console.log("⚡ Sign up");
  }

  /**
   * Ecommerce : https://developers.google.com/analytics/devguides/collection/ga4/ecommerce?client_type=gtag
   *
   * @constructor
   */

  static OnPurchasePartnerAffiliateDeal(agency, plan, purchase) {
    if (typeof gtag !== "function") return;
    gtag("event", "purchase", {
      transaction_id: purchase.uuid,
      affiliation: agency.name,
      value: purchase.amount,
      tax: 0,
      shipping: 0,
      currency: purchase.currency,
      coupon: purchase.affiliate_id
        ? `Affiliate-${purchase.affiliate_id}`
        : null,
      items: [
        // If someone purchases more than one item,
        // you can add those items to the items array
        {
          item_id: plan.id,
          item_name: plan.name,
          affiliation: agency.name,
          coupon: purchase.affiliate_id
            ? `Affiliate-${purchase.affiliate_id}`
            : null,

          discount: plan.price_net ? plan.price_net - plan.price : 0,
          index: 0,
          item_brand: "Selldone",
          item_category: "Deal",
          item_category2: "Partner",
          item_category3: plan.license,
          item_category4: plan.lifetime ? "Lifetime" : `${plan.months} months`,
          item_category5: agency.name,
          price: plan.price,
          quantity: 1,
        },
      ],
    });
    console.log("⚡ Purchase", purchase.uuid);
  }

  static OnStartCheckoutPartnerAffiliateDeal(agency, affiliate, plan) {
    if (typeof gtag !== "function") return;
    gtag("event", "begin_checkout", {
      currency: plan.currency,
      value: plan.price,
      items: [
        {
          item_id: plan.id,
          item_name: plan.name,
          affiliation: agency.name,
          coupon: `Affiliate-${affiliate.id}`,

          discount: plan.price_net ? plan.price_net - plan.price : 0,
          index: 0,
          item_brand: "Selldone",
          item_category: "Deal",
          item_category2: "Partner",
          item_category3: plan.license,
          item_category4: plan.lifetime ? "Lifetime" : `${plan.months} months`,
          item_category5: agency.name,
          price: plan.price,
          quantity: 1,
        },
      ],
    });
    console.log("⚡ Begin checkout");
  }

  static OnRefundPartnerAffiliateDeal(agency, plan, purchase) {
    if (typeof gtag !== "function") return;
    gtag("event", "refund", {
      transaction_id: purchase.uuid,
      affiliation: agency.name,
      value: purchase.amount,
      tax: 0,
      shipping: 0,
      currency: purchase.currency,
      coupon: purchase.affiliate_id
        ? `Affiliate-${purchase.affiliate_id}`
        : null,
      items: [
        // If someone purchases more than one item,
        // you can add those items to the items array
        {
          item_id: plan.id,
          item_name: plan.name,
          affiliation: agency.name,
          coupon: purchase.affiliate_id
            ? `Affiliate-${purchase.affiliate_id}`
            : null,

          discount: plan.price_net ? plan.price_net - plan.price : 0,
          index: 0,
          item_brand: "Selldone",
          item_category: "Deal",
          item_category2: "Partner",
          item_category3: plan.license,
          item_category4: plan.lifetime ? "Lifetime" : `${plan.months} months`,
          item_category5: agency.name,
          price: plan.price,
          quantity: 1,
        },
      ],
    });
    console.log("⚡ Refund", purchase.uuid);
  }

  static OnViewPartnerAffiliateDealPage(agency, affiliate, plans) {
    if (typeof gtag !== "function") return;
    gtag("event", "view_item_list", {
      item_list_id: `Agency ${agency.id} | Affiliate ${affiliate.id}`,
      item_list_name: agency.name,
      items: plans.map((plan) => {
        return {
          item_id: plan.id,
          item_name: plan.name,
          affiliation: agency.name,
          coupon: `Affiliate-${affiliate.id}`,

          discount: plan.price_net ? plan.price_net - plan.price : 0,
          index: 0,
          item_brand: "Selldone",
          item_category: "Deal",
          item_category2: "Partner",
          item_category3: plan.license,
          item_category4: plan.lifetime ? "Lifetime" : `${plan.months} months`,
          item_category5: agency.name,
          price: plan.price,
          quantity: 1,
        };
      }),
    });
    console.log("⚡ View list items", plans.length);
  }

  /*static LOG(message) {
    console.log("🧢", this.EVENT_ONBOARDING, message);
  }*/
}
