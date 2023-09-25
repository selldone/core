import { BusinessModel } from "./BusinessModel";

export const ShopLicense = {
  // wage_factor: wage_factor*gateway wage percent!             wage_percent: default payment wage of selldone!
  FREE: {
    code: "FREE",
    name: "global.license.free",
    wage_percent: 2,
    wage_factor: 1,
    icon: require("./assets/license/free.svg"),
    file_sell_percent: 30,
  },
  STARTUP: {
    code: "STARTUP",
    name: "global.license.startup",
    wage_percent: 1.5,
    wage_factor: 0.75,
    icon: require("./assets/license/startup.svg"),
    file_sell_percent: 20,
  },
  COMPANY: {
    code: "COMPANY",
    name: "global.license.company",
    wage_percent: 1,
    wage_factor: 0.5,
    icon: require("./assets/license/company.svg"),
    file_sell_percent: 7,
  },
  ENTERPRISE: {
    code: "ENTERPRISE",
    name: "global.license.enterprise",
    wage_percent: 0.5,
    wage_factor: 0.25,
    icon: require("./assets/license/enterprise.svg"),
    file_sell_percent: 3,
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
    "importing-que": 10000,
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
  static CanAddNewDomain(shop) {
    let limit = this.DomainsLimit(shop);
    return shop.domains.length < limit;
  }
  static CanEditDomain(shop, domain_id) {
    const domain_index = shop.domains.findIndex((it) => it.id === domain_id);

    let limit = this.DomainsLimit(shop);
    return shop.domains.length <= limit || domain_index < limit;
  }

  static DomainsLimit(shop) {
    // Default plan limit:
    let limit = ShopLicenseLimits[shop.license].domains;
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
  static CanAddNewStaff(shop, staff_count) {
    let limit = this.StaffLimit(shop);
    return staff_count < limit;
  }
  static CanEditStaff(shop, staff_count) {
    let limit = this.StaffLimit(shop);
    return staff_count <= limit;
  }

  static StaffLimit(shop) {
    // Default plan limit:
    let limit = ShopLicenseLimits[shop.license].staff;
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
  static CanAddNewDiscountCode(shop, discount_codes_count) {
    return (
      discount_codes_count < ShopLicenseLimits[shop.license]["discount-codes"]
    );
  }
  static CanEditDiscountCode(shop, discount_codes_count) {
    return (
      discount_codes_count <= ShopLicenseLimits[shop.license]["discount-codes"]
    );
  }

  //――――――――――――――――――― Coupon ――――――――――――――――――
  static CanAddNewCoupon(shop, coupons_count) {
    return coupons_count < ShopLicenseLimits[shop.license].coupons;
  }
  static CanEditCoupon(shop, coupons_count) {
    return coupons_count <= ShopLicenseLimits[shop.license].coupons;
  }

  //――――――――――――――――――― Offer ――――――――――――――――――
  static CanAddNewOffer(shop, offers_count) {
    return offers_count < ShopLicenseLimits[shop.license].coupons;
  }
  static CanEditOffer(shop, offers_count) {
    return offers_count <= ShopLicenseLimits[shop.license].coupons;
  }

  //――――――――――――――――――― GiftCard ――――――――――――――――――
  static CanAddNewGiftCardType(shop, gift_card_types_count) {
    return (
      gift_card_types_count < ShopLicenseLimits[shop.license]["gift-card-types"]
    );
  }
  static CanEditGiftCardType(shop, gift_card_types_count) {
    return (
      gift_card_types_count <=
      ShopLicenseLimits[shop.license]["gift-card-types"]
    );
  }

  //――――――――――――――――――― Campaign ――――――――――――――――――
  static CanAddNewCampaign(shop, campaigns_count) {
    return campaigns_count < ShopLicenseLimits[shop.license].campaigns;
  }
  static CanEditCampaign(shop, campaigns_count) {
    return campaigns_count <= ShopLicenseLimits[shop.license].campaigns;
  }

  //――――――――――――――――――― Affiliate ――――――――――――――――――
  static CanAddNewAffiliate(shop, affiliates_count) {
    return affiliates_count < ShopLicenseLimits[shop.license].affiliates;
  }
  static CanEditAffiliate(shop, affiliates_count) {
    return affiliates_count <= ShopLicenseLimits[shop.license].affiliates;
  }

  //――――――――――――――――――― Email ――――――――――――――――――
  static CanAddNewEmail(shop, emails_count) {
    return emails_count < ShopLicenseLimits[shop.license].emails;
  }
  static CanEditEmail(shop, emails_count) {
    return emails_count <= ShopLicenseLimits[shop.license].emails;
  }

  //――――――――――――――――――― Product > 3D AR ――――――――――――――――――
  static CanAdd3DModel(shop) {
    return shop.license !== ShopLicense.FREE.code;
  }

  //――――――――――――――――――― Lottery ――――――――――――――――――
  static CanAddNewLottery(shop, lotteries_count) {
    return lotteries_count < ShopLicenseLimits[shop.license].lotteries;
  }
  static CanEditLottery(shop, lotteries_count) {
    return lotteries_count <= ShopLicenseLimits[shop.license].lotteries;
  }

  //――――――――――――――――――― Transportation Person ――――――――――――――――――
  static CanAddNewTransportationPerson(shop, transportation_persons_count) {
    return (
      transportation_persons_count <
      ShopLicenseLimits[shop.license]["transportation-persons"]
    );
  }
  static CanEditTransportationPerson(shop, transportation_persons_count) {
    return (
      transportation_persons_count <=
      ShopLicenseLimits[shop.license]["transportation-persons"]
    );
  }

  //――――――――――――――――――― Import Que Limit ――――――――――――――――――
  static getImportQueLimit(shop) {
    return ShopLicenseLimits[shop.license]["importing-que"];
  }
  static getMaxImportProductsBatchSize(shop) {
    return ShopLicenseLimits[shop.license]["importing-que-batch-size"];
  }
  //――――――――――――――――――― Drop Shipping ――――――――――――――――――
  static CanDropShip(shop) {
    return (
      shop.drop_shipping &&
      ShopLicenseLimits[shop.license]["drop-shipping"] &&
      shop.model === BusinessModel.WHOLESALER.code
    );
  }
  static CanReselling(shop) {
    return ShopLicenseLimits[shop.license]["reselling"];
  }

  //――――――――――――――――――― File Sell ――――――――――――――――――
  static GetFileUploadLimitMB(shop) {
    return ShopLicenseLimits[shop.license]["max-file-size"];
  }
  static GetMaxCapacityMB(shop) {
    return ShopLicenseLimits[shop.license]["capacity"];
  }

  //――――――――――――――――――― 🦠 Connect ――――――――――――――――――
  static CanAddNewConnect(shop, connects_count) {
    return connects_count < ShopLicenseLimits[shop.license]["connects-count"];
  }

  //――――――――――――――――――― Tax Profiles ――――――――――――――――――
  static CanAddTaxProfile(shop, profiles_count) {
    return profiles_count < ShopLicenseLimits[shop.license]["tax-profiles"];
  }
  static GetTaxProfilesLimit(shop) {
    return ShopLicenseLimits[shop.license]["tax-profiles"];
  }
}
