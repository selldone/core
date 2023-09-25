export const LeadStatus = {
  physical: [
    {
      min: 0,
      max: 3,
      title: (that, lead) => {
        return that.$t("global.lead_status.physical_fast_delivery");
      },
      icon: require("./assets/delivery/physical-fast-delivery.svg")
    },
    {
      min: 3,
      max: 24,
      title: (that, lead) => {
        return that.$t("global.lead_status.physical_under_24h_delivery", {
          lead: Math.round(lead)
        });
      },
      icon: require("./assets/delivery/physical-under-24h.svg")
    },
    {
      min: 24,
      max: 99999999,
      title: (that, lead) => {
        return that.$t("global.lead_status.physical_over_24h_delivery", {
          days: Math.round(lead / 24)
        });
      },
      icon: require("./assets/delivery/physical-over-24h.svg")
    }
  ],
  virtual: [
    {
      min: 0,
      max: 3,
      title: (that, lead) => {
        return that.$t("global.lead_status.virtual_fast_prepare");
      },
      icon: require("./assets/delivery/virtual-prepare-fast.svg")
    },
    {
      min: 3,
      max: 24,
      title: (that, lead) => {
        return that.$t("global.lead_status.virtual_under_24h", {
          lead: Math.round(lead)
        });
      },
      icon: require("./assets/delivery/virtual-prepare-under-24h.svg")
    },
    {
      min: 24,
      max: 99999999,
      title: (that, lead) => {
        return that.$t("global.lead_status.virtual_over_24h", {
          days: Math.round(lead / 24)
        });
      },
      icon: require("./assets/delivery/virtual-prepare-over-24h.svg")
    }
  ]
};
