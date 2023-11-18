/**
 * Interface representing a single reaction.
 * @property {string} code - Represents the code name of the emotion.
 * @property {string} icon - Represents the SVG icon path of the emotion.
 */
interface IReaction {
  code: string;
  icon: any; // Change 'any' to the type of your require if known, maybe 'string' or 'SVG'.
}

/**
 * An object containing a collection of reactions.
 */
export const Reactions: { [key: string]: IReaction } = {
  Angry: {
    code: "Angry",
    icon: require("@components/assets/emotions/Angry.svg"),
  },
  Annoyed: {
    code: "Annoyed",
    icon: require("@components/assets/emotions/Annoyed.svg"),
  },
  Bored: {
    code: "Bored",
    icon: require("@components/assets/emotions/Bored.svg"),
  },
  Glad: { code: "Glad", icon: require("@components/assets/emotions/Glad.svg") },
  Excited: {
    code: "Excited",
    icon: require("@components/assets/emotions/Excited.svg"),
  },
};
