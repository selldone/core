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

import {SetupService} from "../server/SetupService";
import {Currency} from "../enums/payment/Currency";

export class GAPI {
  selldone_gapi_url: string = "";

  constructor() {
    this.selldone_gapi_url = SetupService.GetMetaValue("selldone-gapi");
  }

  //―――――――――――――――――――――― Terms ――――――――――――――――――――

  GET_TERMS() {
    return `${this.selldone_gapi_url}/terms`;
  }

  //―――――――――――――――――――――― Privacy ――――――――――――――――――――

  GET_PRIVACY() {
    return `${this.selldone_gapi_url}/privacy`;
  }

  //―――――――――――――――――――――― User ――――――――――――――――――――

  GET_ARTICLE(type: string, article_id: number) {
    return `${this.selldone_gapi_url}/articles/${type}/${article_id}`;
  }

  GET_HOME_DATA() {
    return `${this.selldone_gapi_url}/home`;
  }

  GET_BLOG_DIGEST(blog_id: string | number) {
    return `${this.selldone_gapi_url}/articles/blog/${blog_id}/digest`;
  }

  GET_HELP_DIGEST(blog_id: string | number) {
    return `${this.selldone_gapi_url}/articles/help/${blog_id}/digest`;
  }

  //―――――――――――――――――――――― Comment ――――――――――――――――――――

  GET_COMMENTS(article_id: string | number) {
    return `${this.selldone_gapi_url}/articles/${article_id}/comments`;
  }

  //―――――――――――――――――――――― Page Builder ――――――――――――――――――――

  GET_PAGE_DATA(page_name: string) {
    return `${this.selldone_gapi_url}/pages/${page_name}`;
  }

  //―――――――――――――――――――――― Blog ――――――――――――――――――――
  GET_BLOGS() {
    return `${this.selldone_gapi_url}/blogs`;
  }

  //―――――――――――――――――――――― Help ――――――――――――――――――――

  GET_HELP_MENU(help_id: string | number) {
    return `${this.selldone_gapi_url}/helps/tree/${help_id}`;
  }

  GET_HELPS() {
    return `${this.selldone_gapi_url}/helps`;
  }

  //―――――――――――――――――――――― FAQ ――――――――――――――――――――

  GET_FAQ_TAGS() {
    return `${this.selldone_gapi_url}/faqs/tags`;
  }

  GET_FAQS() {
    return `${this.selldone_gapi_url}/faqs`;
  }

  //―――――――――――――――――――――― Roadmap ――――――――――――――――――――

  GET_ROADMAP() {
    return `${this.selldone_gapi_url}/roadmap`;
  }

  //―――――――――――――――――――――― Gateway ――――――――――――――――――――

  GET_AVAILABLE_GATEWAYS(currency: keyof typeof Currency) {
    return `${this.selldone_gapi_url}/gateways/${currency}`;
  }

  //―――――――――――――――――――――― APIS PLAYGROUND ――――――――――――――――――――

  GET_APIS_OWNER_FOLDERS() {
    return `${this.selldone_gapi_url}/apps/api/owner`;
  }

  GET_APIS_OWNER_FOLDER_ITEM(folder: string) {
    return `${this.selldone_gapi_url}/apps/api/owner/${folder}`;
  }

  GET_APIS_OWNER_ITEM_DETAIL(folder: string, item: string) {
    return `${this.selldone_gapi_url}/apps/api/owner/${folder}/${item}`;
  }

  //―――――――――――――――――――――― Official Pages ――――――――――――――――――――
  GET_OFFICIAL_PAGE(language: string, page: string) {
    return `${this.selldone_gapi_url}/official-pages/${language}/${page}`;
  }

  GET_BUSINESS_IDEAS_PAGES_LIST() {
    return `${this.selldone_gapi_url}/business-ideas`;
  }

  //―――――――――――――――――――――― Shop > Countries service ――――――――――――――――――――
  GET_COUNTRIES() {
    return `${this.selldone_gapi_url}/countries`;
  }

  //―――――――――――――――――――――― All Gateways ――――――――――――――――――――
  GET_GATEWAYS() {
    return `${this.selldone_gapi_url}/gateways`;
  }

  //―――――――――――――――――――――― All Taxes ――――――――――――――――――――
  GET_TAXES(country_code: string) {
    return `${this.selldone_gapi_url}/taxes/${country_code}`;
  }

  //―――――――――――――――――――――― Inline Help (Help Center) ――――――――――――――――――――

  GET_INLINE_HELPS(language: string) {
    return `${this.selldone_gapi_url}/inline-helps/${language}`;
  }

  //―――――――――――――――――――――― Experts > Public ――――――――――――――――――――

  POST_EXPERT_SEND_REQUEST() {
    return `${this.selldone_gapi_url}/expert/request`;
  }

  GET_EXPERT_REQUEST_INFO_BY_KEY(request_key: string) {
    return `${this.selldone_gapi_url}/expert/request/${request_key}`;
  }

  GET_EXPERT_JOB_PUBLIC_INFO(job_id: string | number) {
    return `${this.selldone_gapi_url}/expert/jobs/${job_id}`;
  }

  GET_EXPERT_JOBS() {
    return `${this.selldone_gapi_url}/expert/jobs`;
  }

  GET_EXPERT_PROFILE(expert_id: string | number) {
    return `${this.selldone_gapi_url}/experts/${expert_id}`;
  }

  //―――――――――――――――――――――― App store ――――――――――――――――――――
  GET_APP_STORE_APPS() {
    return `${this.selldone_gapi_url}/app-store/apps`;
  }

  GET_APP_INFO(app_code: string) {
    return `${this.selldone_gapi_url}/app-store/apps/${app_code}`;
  }

  GET_APP_COMMENTS(app_code: string) {
    return `${this.selldone_gapi_url}/apps/${app_code}/comments`;
  }

  //―――――――――――――――――――――― Guild ――――――――――――――――――――
  GET_CHECK_GUILD_NAME_AVAILABLE() {
    return `${this.selldone_gapi_url}/guild/name-check`;
  }

  GET_PUBLIC_GUILD(guild_name: string) {
    return `${this.selldone_gapi_url}/guilds/${guild_name}`;
  }

  //―――――――――――――――――――――― Form ――――――――――――――――――――
  GET_FORM(code: string) {
    return `${this.selldone_gapi_url}/forms/${code}`;
  }

  POST_FORM_DATA(code: string) {
    return `${this.selldone_gapi_url}/forms/${code}`;
  }

  //―――――――――――――――――――――― Onboarding ――――――――――――――――――――
  POST_ONBOARDING_CREATE_SHOP() {
    return `${this.selldone_gapi_url}/onboarding/shop`;
  }

  //―――――――――――――――――――――― Terms ――――――――――――――――――――

  GET_PRICING(currency: keyof typeof Currency) {
    return `${this.selldone_gapi_url}/pricing/${currency}`;
  }

  //―――――――――――――――――――――― Landing page elements ――――――――――――――――――――

  GET_LANDING_PAGE_PUBLISHED_ELEMENTS() {
    return `${this.selldone_gapi_url}/landing/elements`;
  }

  //―――――――――――――――――――――― Books ――――――――――――――――――――

  GET_BOOKS() {
    return `${this.selldone_gapi_url}/books`;
  }

  GET_BOOK_PDF_URL(name: string) {
    return `${this.selldone_gapi_url}/books/${name}`;
  }

  //―――――――――――――――――――――― Subscribe for something's ――――――――――――――――――――

  POST_SUBSCRIBE_FOR(code: string) {
    return `${this.selldone_gapi_url}/subscribe/${code}`;
  }

  //―――――――――――――――――――――― Partner Deals ――――――――――――――――――――

  GET_PARTNER_DEAL_BY_CURRENCY(
    ref_code: string,
    currency: keyof typeof Currency,
  ) {
    return `${this.selldone_gapi_url}/partners/deals/${ref_code}/${currency}`;
  }

  //―――――――――――――――――――――― Testimonials ――――――――――――――――――――

  GET_TESTIMONIALS() {
    return `${this.selldone_gapi_url}/testimonials`;
  }

  //―――――――――――――――――――――― Stories ――――――――――――――――――――

  GET_STORIES() {
    return `${this.selldone_gapi_url}/stories`;
  }

  GET_STORY(story_id: string | number) {
    return `${this.selldone_gapi_url}/stories/${story_id}`;
  }

  //―――――――――――――――――――――― Integration ――――――――――――――――――――

  GET_INTEGRATION_PAYMENT(payment_code: string) {
    return `${this.selldone_gapi_url}/integrations/payments/${payment_code}`;
  }

  //―――――――――――――――――――――― Target Pages ――――――――――――――――――――

  GET_TARGET_COUNTRY(country_code: string) {
    return `${this.selldone_gapi_url}/target/countries/${country_code}`;
  }

  //―――――――――――――――――――――― Page ――――――――――――――――――――
  GET_PAGE_BUILDER_TEMPLATES() {
    return `${this.selldone_gapi_url}/page-templates`;
  }

  //―――――――――――――――――――――― Demo ――――――――――――――――――――
  POST_DEMO_AI_ADD_PRODUCT() {
    return `${this.selldone_gapi_url}/demo/ai-add-product`;
  }

  GET_DEMO_SHOP() {
    return `${this.selldone_gapi_url}/demo/shop`;
  }

}
