/**
 * Defines the structure of a post reaction.
 *
 * - `code`: The unique code representing the type of reaction.
 * - `name`: The i18n key associated with the reaction for translations.
 * - `image`: The path to the image representing the reaction.
 * - `column`: The database column associated with this type of reaction.
 */
interface IPostReactionType {
  code: string;
  name: string;
  image: any; // You might want to specify the exact type here based on your use case
  column: string;
}

/**
 * Enum for post reactions with their properties.
 */
export const PostReaction: Record<string, IPostReactionType> = {
  LIKE: {
    code: "LIKE",
    name: "community.post_reaction.LIKE",
    image: require('./assets/reactions/like.svg'),
    column: 'likes',
  },
  SMILE: {
    code: "SMILE",
    name: "community.post_reaction.SMILE",
    image: require('./assets/reactions/smile.svg'),
    column: 'smiles',
  },
  CLAP: {
    code: "CLAP",
    name: "community.post_reaction.CLAP",
    image: require('./assets/reactions/claps.svg'),
    column: 'claps',
  },
  IDEA: {
    code: "IDEA",
    name: "community.post_reaction.IDEA",
    image: require('./assets/reactions/idea.svg'),
    column: 'ideas',
  },
  DISAGREE: {
    code: "DISAGREE",
    name: "community.post_reaction.DISAGREE",
    image: require('./assets/reactions/disagree.svg'),
    column: 'disagrees',
  },
};
