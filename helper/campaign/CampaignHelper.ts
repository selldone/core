export class CampaignHelper {
  static isSearch(net) {
    return ["google"].includes(net);
  }
  static isSocialNetwork(net) {
    return net !== "direct" && !this.isSearch(net);
  }

  static GetTotalAmount(instance, payment) {
    let out = 0;
    if (payment) {
      Object.keys(payment).forEach((currency) => {
        out +=
          instance.getBuyRateValue(
            instance.shop,
            currency,
            instance.GetUserSelectedCurrency().code
          ) * payment[currency];
      });
    }
    return out;
  }
  static GetTotalSocials(campaign) {
    let out = 0;
    if (campaign.social) {
      Object.keys(campaign.social).forEach((key) => {
        if (!this.isSocialNetwork(key)) return;
        out += campaign.social[key];
      });
    }
    return out;
  }
  static GetSocialsOnly(campaign, limit = 0) {
    let out = {};
    if (campaign.social) {
      // 1. Sort values:
      let sorted = [];
      Object.keys(campaign.social).forEach((key) => {
        // 2. Filter only social:
        if (!this.isSocialNetwork(key)) return;

        sorted.push({ key: key, value: campaign.social[key] });
      });
      sorted.sortByKey("value");

      // 3. Apply limit:
      if (limit) {
        sorted = sorted.limit(limit);
      }
      // 4. Convert to object:
      sorted.forEach(({ key, value }) => {
        out[key] = value;
      });
    }
    return out;
  }
  static GetTotalDirects(campaign) {
    return campaign.social && campaign.social.direct
      ? campaign.social.direct
      : 0;
  }

  static GetTotalOrganicSearch(campaign) {
    let out = 0;
    if (campaign.social) {
      Object.keys(campaign.social).forEach((key) => {
        if (!this.isSearch(key)) return;
        out += campaign.social[key];
      });
    }
    return out;
  }

  static GetTotalOther(campaign) {
    const out =
      campaign.sessions -
      (this.GetTotalSocials(campaign) +
        this.GetTotalOrganicSearch(campaign) +
        this.GetTotalDirects(campaign));

    return out > 0 ? out : 0;
  }
}
