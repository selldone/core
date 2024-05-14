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

import Angry from './reaction/assets/Angry.svg';
import Annoyed from './reaction/assets/Annoyed.svg';
import Bored from './reaction/assets/Bored.svg';
import Glad from './reaction/assets/Glad.svg';
import Excited from './reaction/assets/Excited.svg';

/**
 * Interface representing a single reaction.
 * @property {string} code - Represents the code name of the emotion.
 * @property {string} icon - Represents the SVG icon path of the emotion.
 */
interface IReaction {
    code: string;
    icon: any; // Change 'any' to the type of your requirement if known, maybe 'string' or 'SVG'.
}

/**
 * An object containing a collection of reactions.
 */
export const Reactions: { [key: string]: IReaction } = {
    Angry: {
        code: "Angry",
        icon: Angry,
    },
    Annoyed: {
        code: "Annoyed",
        icon: Annoyed,
    },
    Bored: {
        code: "Bored",
        icon: Bored,
    },
    Glad: {code: "Glad", icon: Glad},
    Excited: {
        code: "Excited",
        icon: Excited,
    },
};
