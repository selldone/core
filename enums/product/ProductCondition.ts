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

import newIcon from '../../assets/conditions/new.svg';
import refurbishedIcon from '../../assets/conditions/refurbished.svg';
import usedIcon from '../../assets/conditions/used.svg';
import usedFairIcon from '../../assets/conditions/used-fair.svg';
import usedGoodIcon from '../../assets/conditions/used-good.svg';
import usedLikeNewIcon from '../../assets/conditions/used-like-new.svg';

export const ProductCondition = {
  NEW: {
    title: "global.condition.new",
    code: "new",
    icon: newIcon,
  },
  REFURBISHED: {
    title: "global.condition.refurbished",
    code: "refurbished",
    icon: refurbishedIcon,
  },
  USED: {
    title: "global.condition.used",
    code: "used",
    icon: usedIcon,
  },
  USED_FAIR: {
    title: "global.condition.used_fair",
    code: "used_fair",
    icon: usedFairIcon,
  },
  USED_GOOD: {
    title: "global.condition.used_good",
    code: "used_good",
    icon: usedGoodIcon,
  },
  USED_LIKE_NEW: {
    title: "global.condition.used_like_new",
    code: "used_like_new",
    icon: usedLikeNewIcon,
  },
};
