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

import AirdropImage from '../assets/gift/air-drop.svg';
import AdvertisementImage from '../assets/gift/advertisment.svg';
import PersonalGiftImage from '../assets/gift/personal-gift.svg';
import ShopGiftImage from '../assets/gift/shop-gift.svg';

export const GiftStProgramTypes = {
  Airdrop: {
    code: "Airdrop",
    title: "global.gift_program_status.Airdrop",
    image: AirdropImage
  },
  Advertisement: {
    code: "Advertisement",
    title: "global.gift_program_status.Advertisement",
    image: AdvertisementImage
  },
  PersonalGift: {
    code: "PersonalGift",
    title: "global.gift_program_status.PersonalGift",
    image: PersonalGiftImage
  },
  ShopGift: {
    code: "ShopGift",
    title: "global.gift_program_status.ShopGift",
    image: ShopGiftImage
  }
};