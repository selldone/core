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

import { BusinessModel } from "./BusinessModel";
import { Shop } from "@selldone/core-js/models/shop/shop.model";
import { AgencyClient } from "@selldone/core-js/models/agency/agency-client.model";
import { Agency } from "@selldone/core-js/models/agency/agency.model";
import { AgencyPlan } from "@selldone/core-js/models/agency/agency-plan.model";
import { Domain } from "@selldone/core-js/models/shop/domain/domain.model";

export const ShopLicense = {
  // wage_factor: wage_factor*gateway wage percent!             wage_percent: default payment wage of selldone!
  FREE: {
    test:"ITS TEST!!!!!!!!!!!!!!!! XXXXXXX",
    code: "FREE",
    name: "global.license.free",
    wage_percent: 2,
    wage_factor: 1,
    icon: require("./assets/license/free.svg"),
    file_sell_percent: 30,
    quota_multiple:1,   // Multiple of quota
  },
  STARTUP: {
    code: "STARTUP",
    name: "global.license.startup",
    wage_percent: 1.5,
    wage_factor: 0.75,
    icon: require("./assets/license/startup.svg"),
    file_sell_percent: 20,
    quota_multiple:2,   // Multiple of quota
  },
  COMPANY: {
    code: "COMPANY",
    name: "global.license.company",
    wage_percent: 1,
    wage_factor: 0.5,
    icon: require("./assets/license/company.svg"),
    file_sell_percent: 7,
    quota_multiple:3,   // Multiple of quota
  },
  ENTERPRISE: {
    code: "ENTERPRISE",
    name: "global.license.enterprise",
    wage_percent: 0.5,
    wage_factor: 0.25,
    icon: require("./assets/license/enterprise.svg"),
    file_sell_percent: 3,
    quota_multiple:10,   // Multiple of quota
  },
};

export const ShopLicenseLimits = {
  FREE: {
    domains: 1,
    "discount-codes": 3,
    coupons: 3,
    offers: 3,
    "gift-card-types": 1,
    campaigns: 2,
    affiliates: 2,
    emails: 2,
    lotteries: 7,
    "transportation-persons": 2,
    "importing-que": 50,
    "importing-que-batch-size": 10,
    reselling: false,
    "drop-shipping": false,
    "max-file-size": 20 /*MB*/,
    capacity: 1000 /*MB*/,
    staff: 1,
    community: false,
    "connects-count": 1,
    marketplace: false,
    "tax-profiles": 5,
  },

  STARTUP: {
    domains: 1,
    "discount-codes": 10,
    coupons: 10,
    offers: 10,
    "gift-card-types": 10,
    campaigns: 10,
    affiliates: 10,
    emails: 10,
    lotteries: 24,
    "transportation-persons": 10,
    "importing-que": 200,
    "importing-que-batch-size": 50,
    reselling: true,
    "drop-shipping": false,
    "max-file-size": 250 /*MB*/,
    capacity: 10000 /*MB*/,
    staff: 5,
    community: false,
    "connects-count": 5,
    marketplace: false,
    "tax-profiles": 10,
  },

  COMPANY: {
    domains: 5,
    "discount-codes": 50,
    coupons: 50,
    offers: 50,
    "gift-card-types": 50,
    campaigns: 50,
    affiliates: 100,
    emails: 100,
    lotteries: 48,
    "transportation-persons": 50,
    "importing-que": 1000,
    "importing-que-batch-size": 100,
    reselling: true,
    "drop-shipping": false,
    "max-file-size": 1000 /*MB*/,
    capacity: 100000 /*MB*/,
    staff: 20,
    community: false,
    "connects-count": 10,
    marketplace: false,
    "tax-profiles": 20,
  },

  ENTERPRISE: {
    domains: 9999, // 9999 = Infinite!
    "discount-codes": 1000,
    coupons: 1000,
    offers: 1000,
    "gift-card-types": 1000,
    campaigns: 1000,
    affiliates: 1000,
    emails: 1000,
    lotteries: 120,
    "transportation-persons": 200,
    "importing-que": 15000,
    "importing-que-batch-size": 200,
    reselling: true,
    "drop-shipping": true,
    "max-file-size": 2000 /*MB*/,
    capacity: 300000 /*MB*/,
    staff: 9999, // 9999 = Infinite!
    community: true,
    "connects-count": 100,
    marketplace: true,
    "tax-profiles": 100,
  },
};

export class Eligible {
  //――――――――――――――――――― Domain ――――――――――――――――――
  static CanAddNewDomain(shop: Shop & { domains: Domain[] }) {
    const limit = this.DomainsLimit(shop);
    return shop.domains.length < limit;
  }
  static CanEditDomain(shop: Shop & { domains: Domain[] }, domain_id: number) {
    const domain_index = shop.domains.findIndex((it) => it.id === domain_id);

    const limit = this.DomainsLimit(shop);
    return shop.domains.length <= limit || domain_index < limit;
  }

  static DomainsLimit(
    shop: Shop & {
      agency_client?: AgencyClient & { agency?: Agency; plan?: AgencyPlan };
    }
  ) {
    // Default plan limit:
    let limit = ShopLicenseLimits[shop.license!].domains;
    // Override limit by partners plans:
    if (
      shop.agency_client &&
      shop.agency_client.agency &&
      shop.agency_client.plan &&
      shop.agency_client.plan.domains /*null: default mode!*/
    ) {
      limit = shop.agency_client.plan.domains;
    }
    return limit;
  }
  //――――――――――――――――――― Staff ――――――――――――――――――
  static CanAddNewStaff(shop: Shop, staff_count: number) {
    const limit = this.StaffLimit(shop);
    return staff_count < limit;
  }
  static CanEditStaff(shop: Shop, staff_count: number) {
    const limit = this.StaffLimit(shop);
    return staff_count <= limit;
  }

  static StaffLimit(
    shop: Shop & {
      agency_client?: AgencyClient & { agency?: Agency; plan?: AgencyPlan };
    }
  ) {
    // Default plan limit:
    let limit = ShopLicenseLimits[shop.license!].staff;
    // Override limit by partners plans:
    if (
      shop.agency_client &&
      shop.agency_client.agency &&
      shop.agency_client.plan &&
      shop.agency_client.plan.staff /*null: default mode!*/
    ) {
      limit = shop.agency_client.plan.staff;
    }
    return limit;
  }
  //――――――――――――――――――― DiscountCode ――――――――――――――――――
  static CanAddNewDiscountCode(shop: Shop, discount_codes_count: number) {
    return (
      discount_codes_count < ShopLicenseLimits[shop.license!]["discount-codes"]
    );
  }
  static CanEditDiscountCode(shop: Shop, discount_codes_count: number) {
    return (
      discount_codes_count <= ShopLicenseLimits[shop.license!]["discount-codes"]
    );
  }

  //――――――――――――――――――― Coupon ――――――――――――――――――
  static CanAddNewCoupon(shop: Shop, coupons_count: number) {
    return coupons_count < ShopLicenseLimits[shop.license!].coupons;
  }
  static CanEditCoupon(shop: Shop, coupons_count: number) {
    return coupons_count <= ShopLicenseLimits[shop.license!].coupons;
  }

  //――――――――――――――――――― Offer ――――――――――――――――――
  static CanAddNewOffer(shop: Shop, offers_count: number) {
    return offers_count < ShopLicenseLimits[shop.license!].coupons;
  }
  static CanEditOffer(shop: Shop, offers_count: number) {
    return offers_count <= ShopLicenseLimits[shop.license!].coupons;
  }

  //――――――――――――――――――― GiftCard ――――――――――――――――――
  static CanAddNewGiftCardType(shop: Shop, gift_card_types_count: number) {
    return (
      gift_card_types_count <
      ShopLicenseLimits[shop.license!]["gift-card-types"]
    );
  }
  static CanEditGiftCardType(shop: Shop, gift_card_types_count: number) {
    return (
      gift_card_types_count <=
      ShopLicenseLimits[shop.license!]["gift-card-types"]
    );
  }

  //――――――――――――――――――― Campaign ――――――――――――――――――
  static CanAddNewCampaign(shop: Shop, campaigns_count: number) {
    return campaigns_count < ShopLicenseLimits[shop.license!].campaigns;
  }
  static CanEditCampaign(shop: Shop, campaigns_count: number) {
    return campaigns_count <= ShopLicenseLimits[shop.license!].campaigns;
  }

  //――――――――――――――――――― Affiliate ――――――――――――――――――
  static CanAddNewAffiliate(shop: Shop, affiliates_count: number) {
    return affiliates_count < ShopLicenseLimits[shop.license!].affiliates;
  }
  static CanEditAffiliate(shop: Shop, affiliates_count: number) {
    return affiliates_count <= ShopLicenseLimits[shop.license!].affiliates;
  }

  //――――――――――――――――――― Email ――――――――――――――――――
  static CanAddNewEmail(shop: Shop, emails_count: number) {
    return emails_count < ShopLicenseLimits[shop.license!].emails;
  }
  static CanEditEmail(shop: Shop, emails_count: number) {
    return emails_count <= ShopLicenseLimits[shop.license!].emails;
  }

  //――――――――――――――――――― Product > 3D AR ――――――――――――――――――
  static CanAdd3DModel(shop: Shop) {
    return shop.license !== ShopLicense.FREE.code;
  }

  //――――――――――――――――――― Lottery ――――――――――――――――――
  static CanAddNewLottery(shop: Shop, lotteries_count: number) {
    return lotteries_count < ShopLicenseLimits[shop.license!].lotteries;
  }
  static CanEditLottery(shop: Shop, lotteries_count: number) {
    return lotteries_count <= ShopLicenseLimits[shop.license!].lotteries;
  }

  //――――――――――――――――――― Transportation Person ――――――――――――――――――
  static CanAddNewTransportationPerson(
    shop: Shop,
    transportation_persons_count: number
  ) {
    return (
      transportation_persons_count <
      ShopLicenseLimits[shop.license!]["transportation-persons"]
    );
  }
  static CanEditTransportationPerson(
    shop: Shop,
    transportation_persons_count: number
  ) {
    return (
      transportation_persons_count <=
      ShopLicenseLimits[shop.license!]["transportation-persons"]
    );
  }

  //――――――――――――――――――― Import Que Limit ――――――――――――――――――
  static getImportQueLimit(shop: Shop) {
    return ShopLicenseLimits[shop.license!]["importing-que"];
  }
  static getMaxImportProductsBatchSize(shop: Shop) {
    return ShopLicenseLimits[shop.license!]["importing-que-batch-size"];
  }
  //――――――――――――――――――― Drop Shipping ――――――――――――――――――
  static CanDropShip(shop: Shop) {
    return (
      shop.drop_shipping &&
      ShopLicenseLimits[shop.license!]["drop-shipping"] &&
      shop.model === BusinessModel.WHOLESALER.code
    );
  }
  static CanReselling(shop: Shop) {
    return ShopLicenseLimits[shop.license!]["reselling"];
  }

  //――――――――――――――――――― File Sell ――――――――――――――――――
  static GetFileUploadLimitMB(shop: Shop) {
    return ShopLicenseLimits[shop.license!]["max-file-size"];
  }
  static GetMaxCapacityMB(shop: Shop) {
    return ShopLicenseLimits[shop.license!]["capacity"];
  }

  //――――――――――――――――――― 🦠 Connect ――――――――――――――――――
  static CanAddNewConnect(shop: Shop, connects_count: number) {
    return connects_count < ShopLicenseLimits[shop.license!]["connects-count"];
  }

  //――――――――――――――――――― Tax Profiles ――――――――――――――――――
  static CanAddTaxProfile(shop: Shop, profiles_count: number) {
    return profiles_count < ShopLicenseLimits[shop.license!]["tax-profiles"];
  }
  static GetTaxProfilesLimit(shop: Shop) {
    return ShopLicenseLimits[shop.license!]["tax-profiles"];
  }
}
