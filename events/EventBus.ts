import Vue from "vue";
export const EventBus: Vue = new Vue();


export enum EventName {

    // ━━━━━━━━━━━━━━━ Common in storefront & backoffice ━━━━━━━━━━━━━━━
    SHOW_MAP='map-show',
    HIDE_MAP='map-hide',

    // firebase
    FIREBASE_RECEIVE_MESSAGE="firebase-receive-message",
    FIREBASE_GET_TOKEN="firebase-get-token",

    // ━━━━━━━━━━━━━━━ Only in storefront ━━━━━━━━━━━━━━━


    // ━━━━━━━━━━━━━━━ Only in backoffice ━━━━━━━━━━━━━━━



    // ━━━━━━━━━━━━━━━ Article ━━━━━━━━━━━━━━━
    ARTICLE_CODE_EDITOR_SHOW="article-code-editor-show",
    ARTICLE_FLIP_BOOK_SHOW="article-flip-book-show",
    ARTICLE_COMPARE_IMAGES_SHOW="article-compare-images-show",


}
