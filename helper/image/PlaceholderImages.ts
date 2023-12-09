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

const IMAGES = [
  require("./assets/images/001-waterfall.svg"),
  require("./assets/images/002-desert.svg"),
  require("./assets/images/003-lighthouse.svg"),
  require("./assets/images/004-bridge.svg"),
  require("./assets/images/005-lighthouse.svg"),
  require("./assets/images/006-volcano.svg"),
  require("./assets/images/007-lake.svg"),
  require("./assets/images/008-forest.svg"),
  require("./assets/images/009-camping.svg"),
  require("./assets/images/010-beach.svg"),
  require("./assets/images/011-pine tree.svg"),
  require("./assets/images/012-lake.svg"),
  require("./assets/images/013-park.svg"),
  require("./assets/images/014-buildings.svg"),
  require("./assets/images/015-hot air balloon.svg"),
  require("./assets/images/016-buildings.svg"),
  require("./assets/images/017-construction.svg"),
  require("./assets/images/018-flowers.svg"),
  require("./assets/images/019-forest.svg"),
  require("./assets/images/020-autumn.svg"),
  require("./assets/images/021-windmill.svg"),
  require("./assets/images/022-sunrise.svg"),
  require("./assets/images/023-industry.svg"),
  require("./assets/images/024-wild west.svg"),
  require("./assets/images/025-fountain.svg"),
  require("./assets/images/026-sakura.svg"),
  require("./assets/images/027-aurora borealis.svg"),
  require("./assets/images/028-igloo.svg"),
  require("./assets/images/029-sailboat.svg"),
  require("./assets/images/030-cottage.svg"),
];

export class PlaceholderImages {
  static GetRamonImage() {
    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
  }
  static GetIDImage(id: number) {
    return IMAGES[id % IMAGES.length];
  }
}
