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
// EventBus.ts
import {reactive} from "vue";

type Callback = (...args: any[]) => void;

export const EventBus = (() => {
  const events = reactive(new Map<string, Set<Callback>>());

  function $emit(event: string, ...args: any[]) {
    if (events.has(event)) {
      events.get(event)!.forEach((callback) => callback(...args));
    }
  }

  function $on(event: string, callback: Callback) {
    if (!events.has(event)) {
      events.set(event, new Set());
    }
    events.get(event)!.add(callback);
  }

  function $off(event: string, callback: Callback) {
    if (events.has(event)) {
      events.get(event)!.delete(callback);
      if (events.get(event)!.size === 0) {
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
