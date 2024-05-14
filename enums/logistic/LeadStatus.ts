// @ts-nocheck
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

import physicalFastDeliveryIcon from './assets/delivery/physical-fast-delivery.svg';
import physicalUnder24hIcon from './assets/delivery/physical-under-24h.svg';
import physicalOver24hIcon from './assets/delivery/physical-over-24h.svg';
import virtualPrepareFastIcon from './assets/delivery/virtual-prepare-fast.svg';
import virtualPrepareUnder24hIcon from './assets/delivery/virtual-prepare-under-24h.svg';
import virtualPrepareOver24hIcon from './assets/delivery/virtual-prepare-over-24h.svg';


export const LeadStatus = {
  physical: [
    {
      min: 0,
      max: 3,
      title: (that, lead) => {
        return that.$t("global.lead_status.physical_fast_delivery");
      },
      icon: physicalFastDeliveryIcon
    },
    {
      min: 3,
      max: 24,
      title: (that, lead) => {
        return that.$t("global.lead_status.physical_under_24h_delivery", {
          lead: Math.round(lead)
        });
      },
      icon: physicalUnder24hIcon
    },
    {
      min: 24,
      max: 99999999,
      title: (that, lead) => {
        return that.$t("global.lead_status.physical_over_24h_delivery", {
          days: Math.round(lead / 24)
        });
      },
      icon: physicalOver24hIcon
    }
  ],
  virtual: [
    {
      min: 0,
      max: 3,
      title: (that, lead) => {
        return that.$t("global.lead_status.virtual_fast_prepare");
      },
      icon: virtualPrepareFastIcon
    },
    {
      min: 3,
      max: 24,
      title: (that, lead) => {
        return that.$t("global.lead_status.virtual_under_24h", {
          lead: Math.round(lead)
        });
      },
      icon: virtualPrepareUnder24hIcon
    },
    {
      min: 24,
      max: 99999999,
      title: (that, lead) => {
        return that.$t("global.lead_status.virtual_over_24h", {
          days: Math.round(lead / 24)
        });
      },
      icon: virtualPrepareOver24hIcon
    }
  ]
};
