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

/* eslint-disable no-console */

import {register} from "register-service-worker";

export default function registerServiceWorker() {
  console.log('Service worker registered successfully.');

  if (process.env.NODE_ENV === "production") {
    /* `${process.env.BASE_URL}service-worker.js` */ // MOVE TO ROOT!
    register(`/service-worker.js`, {
      registrationOptions: { scope: "./" },

      ready() {
        console.log(
            "App is being served from cache by a service worker.\n" +
            "For more details, visit https://goo.gl/AFskqB",
        );
      },
      registered() {
        console.log("Service worker has been registered.");
      },
      cached() {
        console.log("Content has been cached for offline use.");
      },
      updatefound() {
        console.log("New content is downloading.");
      },
      updated() {
        console.log("New content is available; please refresh.");
      },
      offline() {
        console.log(
            "No internet connection found. App is running in offline mode.",
        );
      },
      error(error) {
        console.error("Error during service worker registration:", error);
      },
    });
  }

}
