export const ServiceTypes = {
  DEMAND: {
    title: "ServiceTypes.DEMAND.title",
    code: "DEMAND",
    desc: "ServiceTypes.DEMAND.desc",
    form: ["tasks", "reserve"],
  },

  BOOKING: {
    title: "ServiceTypes.BOOKING.title",
    code: "BOOKING",
    desc: "ServiceTypes.BOOKING.desc",
    form: ["tasks", "booking"],
  },
  APPOINTMENT: {
    title: "ServiceTypes.APPOINTMENT.title",
    code: "APPOINTMENT",
    desc: "ServiceTypes.APPOINTMENT.desc",
    form: ["reserve"],
  },
  RENTAL: {
    title: "ServiceTypes.RENTAL.title",
    code: "RENTAL",
    desc: "ServiceTypes.RENTAL.desc",
    form: ["booking"],
  },

  SUBSCRIPTION: {
    title: "ServiceTypes.SUBSCRIPTION.title",
    code: "SUBSCRIPTION",
    desc: "ServiceTypes.SUBSCRIPTION.desc",
    form: ["subscription"],
  },
  CHARGE: {
    title: "ServiceTypes.CHARGE.title",
    code: "CHARGE",
    desc: "ServiceTypes.CHARGE.desc",
    form: ["charge"],
  },
  CUSTOM: {
    title: "ServiceTypes.CUSTOM.title",
    code: "CUSTOM",
    desc: "ServiceTypes.CUSTOM.desc",
    form: ["tasks"],
  },
};
