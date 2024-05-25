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

import {Club} from "../../models";

export default {
  REGISTER_DATE: {
    type: "REGISTER_DATE",
    title: "user_funnel.REGISTER_DATE.title",
    description: "user_funnel.REGISTER_DATE.description",
    icon: "fa:fas fa-user-clock",
    inputs: {
      start: { type: "date", title: "Date start" },
      end: { type: "date", title: "Date end" },
    },
  },
  LAST_BUY_DATE: {
    type: "LAST_BUY_DATE",
    title: "user_funnel.LAST_BUY_DATE.title",
    description: "user_funnel.LAST_BUY_DATE.description",
    icon: "fa:fas fa-business-time",
    inputs: {
      start: { type: "date", title: "Date start" },
      end: { type: "date", title: "Date end" },
    },
  },
  LOGIN_DATE: {
    type: "LOGIN_DATE",
    title: "user_funnel.LOGIN_DATE.title",
    description: "user_funnel.LOGIN_DATE.description",
    icon: "fa:fas fa-undo",
    inputs: {
      start: { type: "date", title: "Date start" },
      end: { type: "date", title: "Date end" },
    },
  },
  LEVEL: {
    type: "LEVEL",
    title: "user_funnel.LEVEL.title",
    description: "user_funnel.LEVEL.description",
    icon: "fa:fas fa-crown",
    inputs: {
      levels: {
        type: "enum",
        title: "Customer clubs",
        items: Object.values(Club.Levels),
        multiple: true,
        chips: true,
      },
    },
  },
  SUBSCRIBED: {
    type: "SUBSCRIBED",
    title: "user_funnel.SUBSCRIBED.title",
    description: "user_funnel.SUBSCRIBED.description",
    icon: "fa:fas fa-user-plus",
    inputs: {
      subscribed: { type: "boolean", title: "Subscribed state" },
    },
  },
  NOT_PURCHASED: {
    type: "NOT_PURCHASED",
    title: "user_funnel.NOT_PURCHASED.title",
    description: "user_funnel.NOT_PURCHASED.description",
    icon: "fa:fas fa-cart-arrow-down",
  },
  SEX: {
    type: "SEX",
    title: "user_funnel.SEX.title",
    description: "user_funnel.SEX.description",
    icon: "fa:fas fa-venus-mars",
    inputs: {
      sex: {
        type: "enum",
        title: "User genders",
        items: [
          { code: "MALE", name: "Male", icon: "user" },
          { code: "FEMALE", name: "Female", icon: "user" },
        ],
        multiple: true,
        chips: true,
      },
    },
  },
  LOCATION: {
    type: "LOCATION",
    title: "user_funnel.LOCATION.title",
    description: "user_funnel.LOCATION.description",
    icon: "fa:fas fa-map-marker-alt",
    inputs: { countries: { type: "countries", title: "User countries" } },
  },

  LIMIT: {
    type: "LIMIT",
    title: "user_funnel.LIMIT.title",
    description: "user_funnel.LIMIT.description",
    icon: "fa:fas fa-sort-numeric-down",
    inputs: { limit: { type: "number", title: "Limit output count" } },
  },

  SEGMENTS: {
    type: "SEGMENTS",
    title: "user_funnel.SEGMENTS.title",
    description: "user_funnel.SEGMENTS.description",
    icon: "fa:fas fa-object-ungroup",
    inputs: {
      segments: { type: "segments", title: "Select customers segments" },
    },
  },
};
