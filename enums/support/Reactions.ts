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
    icon: require("@/Components/assets/emotions/Angry.svg"),
  },
  Annoyed: {
    code: "Annoyed",
    icon: require("@/Components/assets/emotions/Annoyed.svg"),
  },
  Bored: {
    code: "Bored",
    icon: require("@/Components/assets/emotions/Bored.svg"),
  },
  Glad: { code: "Glad", icon: require("@/Components/assets/emotions/Glad.svg") },
  Excited: {
    code: "Excited",
    icon: require("@/Components/assets/emotions/Excited.svg"),
  },
};
