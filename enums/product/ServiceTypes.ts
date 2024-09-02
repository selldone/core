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

export const ServiceTypes = {
  DEMAND: {
    title: "global.ServiceTypes.DEMAND.title",
    code: "DEMAND",
    desc: "global.ServiceTypes.DEMAND.desc",
    form: ["tasks", "reserve"],
  },

  BOOKING: {
    title: "global.ServiceTypes.BOOKING.title",
    code: "BOOKING",
    desc: "global.ServiceTypes.BOOKING.desc",
    form: ["tasks", "booking"],
  },
  APPOINTMENT: {
    title: "global.ServiceTypes.APPOINTMENT.title",
    code: "APPOINTMENT",
    desc: "global.ServiceTypes.APPOINTMENT.desc",
    form: ["reserve"],
  },
  RENTAL: {
    title: "global.ServiceTypes.RENTAL.title",
    code: "RENTAL",
    desc: "global.ServiceTypes.RENTAL.desc",
    form: ["booking"],
  },

  SUBSCRIPTION: {
    title: "global.ServiceTypes.SUBSCRIPTION.title",
    code: "SUBSCRIPTION",
    desc: "global.ServiceTypes.SUBSCRIPTION.desc",
    form: ["subscription"],
  },
  CHARGE: {
    title: "global.ServiceTypes.CHARGE.title",
    code: "CHARGE",
    desc: "global.ServiceTypes.CHARGE.desc",
    form: ["charge"],
  },
  CUSTOM: {
    title: "global.ServiceTypes.CUSTOM.title",
    code: "CUSTOM",
    desc: "global.ServiceTypes.CUSTOM.desc",
    form: ["tasks"],
  },
};
