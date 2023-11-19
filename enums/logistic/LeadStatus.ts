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
