export const TimeSpans = {
  Morning: {
    value: "Morning",
    min: 8,
    max: 12,
    name: "global.timespan.Morning",
    icon: require("@/Components/assets/icons/morning.svg")
  },
  Evening: {
    value: "Evening",
    min: 12,
    max: 18,
    name: "global.timespan.Evening",
    icon: require("@/Components/assets/icons/evening.svg")
  },
  Night: {
    value: "Night",
    min: 18,
    max: 24,
    name: "global.timespan.Night",
    icon: require("@/Components/assets/icons/night.svg")
  },
  Instant: {
    value: "Instant",
    min: 0,
    max: 24,
    name: "global.timespan.Instant",
    icon: require("@/Components/assets/icons/daynight.svg")
  }
};
