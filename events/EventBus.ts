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


// EventBus.js
import { reactive, toRefs } from 'vue';

export const EventBus = (() => {
  const events = reactive(new Map());

  function $emit(event, ...args) {
    if (events[event]) {
      events[event].forEach((callback) => callback(...args));
}

}

function $on(event, callback) {
  if (!events[event]) {
    events[event] = new Set();
  }
  events[event].add(callback);
}

function $off(event, callback) {
  if (events[event]) {
    events[event].delete(callback);
    if (events[event].size === 0) {
      events.delete(event);
    }
  }
}

return { $emit, $on, $off };
})();


export enum EventName {
  // ━━━━━━━━━━━━━━━ Common in storefront & backoffice ━━━━━━━━━━━━━━━
  SHOW_MAP = "map-show",
  HIDE_MAP = "map-hide",

  // firebase
  FIREBASE_RECEIVE_MESSAGE = "firebase-receive-message",
  FIREBASE_GET_TOKEN = "firebase-get-token",

  // ━━━━━━━━━━━━━━━ Only in storefront ━━━━━━━━━━━━━━━

  // ━━━━━━━━━━━━━━━ Only in backoffice ━━━━━━━━━━━━━━━

  // ━━━━━━━━━━━━━━━ Article ━━━━━━━━━━━━━━━
  ARTICLE_CODE_EDITOR_SHOW = "article-code-editor-show",
  ARTICLE_FLIP_BOOK_SHOW = "article-flip-book-show",
  ARTICLE_COMPARE_IMAGES_SHOW = "article-compare-images-show",
}
