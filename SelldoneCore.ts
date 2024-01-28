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

import { Gapi } from "./gapi/Gapi";
import { GAPI } from "./server/GAPI";
import { SetupService } from "@core/server/SetupService";

import "./utils/console/ConsoleStyle";
import {CDN} from "./server/CDN";
import { URLS } from "@core/server/URLS";

const SDK_VERSION = "0.02";
//█████████████████████████████████████████████████████████████
//―――――――――――――― Global Types ―――――――――――――――
//█████████████████████████████████████████████████████████████

// Extend the Window interface to recognize the properties you add to the global window object.
declare global {
  interface Window {
    axios: any;

    CDN: CDN;
    URLS: URLS;

    // APIs
    GAPI: GAPI;

    // Selldone Core
    $selldone: {
      gapi: Gapi;
    };
  }
}

//█████████████████████████████████████████████████████████████
//――――――――――― Selldone® Storefront SDK ―――――――――――
//█████████████████████████████████████████████████████████████
export class SelldoneCore {
  static Setup(): void {
    console.log(`Selldone® Core: V${SDK_VERSION}`);

    //――――――――――――――――――――――――― Axios ―――――――――――――――――――――――――
    window.axios = require("axios");
    // 🞧 Header: CORS
    window.axios.defaults.headers.common["Access-Control-Allow-Origin"] =
      SetupService.MainServiceUrl();
    window.axios.defaults.headers.common["Access-Control-Allow-Headers"] =
      "Origin, X-Requested-With, Content-Type, Accept";

    // Set CSRF token:
    const token = SetupService.GetMetaValue("csrf-token");

    if (token) {
      // 🞧 Header: CSRF
      window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
    } else {
      console.warn("CSRF token not found!");
    }
    //――――――――――――――――――――――――― Initialize Resources Origin ―――――――――――――――――――――――――

    window.CDN = new CDN();
    window.URLS = new URLS();

    // Define API repositories:
    window.GAPI = new GAPI();

    //――――――――――――――――――――――――― Create Instance ―――――――――――――――――――――――――

    window.$selldone = {
      gapi: new Gapi(),
    };
  }
}
