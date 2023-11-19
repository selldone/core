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

/**
 * Provides utility methods to retrieve setup configurations and meta values from the document head.
 */
export default class SetupService {
  /**
   * Retrieves the content value of a meta tag by its name attribute.
   * @param name - The name attribute of the meta tag.
   * @param default_val - The default value to return if the meta tag is not found.
   * @returns The content value of the meta tag or the default value.
   */
  static GetMetaValue<T extends string | null>(
    name: string,
    default_val?: T
  ): T | string {
    const meta: HTMLMetaElement | null = document.head.querySelector(
      `meta[name="${name}"]`
    );
    return (meta ? meta.content : default_val) as T;
  }
  static PWAVersion(): string | null {
    return this.GetMetaValue("pwa-version");
  }

  /**
   * Retrieves the main service's full URL.
   * @returns The full URL of the main service (e.g., https://selldone.com).
   */
  static MainServiceUrl(): string {
    const _val = this.GetMetaValue("service-url");
    if (!_val) {
      console.error("[service-url] meta tag!")
      throw "The service url is not defined in [service-url] meta tag!";
    }
    return _val;
  }

  static GetApiSubdomain(subdomain: string): string | null {
    const url = this.MainServiceUrl();
    if (!url) return null;
    return url
      .replace("https://", `https://${subdomain}.`)
      .replace("http://", `http://${subdomain}.`);
  }

  static ShopsDomain(): string | null {
    return this.GetMetaValue("domain-shops");
  }

  static EchoServer(): string | null {
    return this.GetMetaValue("selldone-echo");
  }

  static EchoPort(): string | null {
    return this.GetMetaValue("selldone-echo-port");
  }

  /**
   * Retrieves the local service's country code.
   * @returns The local service's country code (e.g., IR).
   */
  static LocalServiceCountry(): string | null {
    return this.GetMetaValue("local-service-country");
  }

  static SelldoneIframe(): string {
    const _val = this.GetMetaValue("selldone-iframe");
    if (!_val)
      throw "The service url is not defined in [selldone-iframe] meta tag!";
    return _val;
  }

  /**
   * Retrieves the default language code.
   * @returns The default language code.
   */
  static DefaultLanguageCode(): string | null {
    return this.GetMetaValue("default-language");
  }

  static DefaultCurrency(): string | null {
    return this.GetMetaValue("default-currency");
  }

  static DefaultCountry(): string | null {
    // ISO code alpha2
    return this.GetMetaValue("default-country");
  }

  static Contacts(): object | null {
    try {
      const _val = this.GetMetaValue("contacts", "{}");
      if (_val) return JSON.parse(_val);
    } catch (e) {}
    return null;
  }

  static Socials(): object | null {
    try {
      const _val = this.GetMetaValue("socials", "{}");
      if (_val) return JSON.parse(_val);
    } catch (e) {}
    return null;
  }

  /**
   * Selldone Footer HTML.
   * @constructor
   */
  static FooterExtraHtml(): string | undefined {
    return window.extra_footer;
  }

  /**
   * Retrieves the initial language based on the IP location.
   * Default for global service is empty.
   * Default for local service is 'fa' (equivalent to default-language).
   * @returns The initial language.
   */
  static GetInitialLanguage(): string {
    return this.GetMetaValue("initial-language", "en");
  }

  static SaminColorLight(): string {
    return this.GetMetaValue("color--theme-light", "#70557e");
  }

  static SaminColorDark(): string {
    return this.GetMetaValue("color--theme-dark", "#3a2c41");
  }

  // ... [Continue with the rest of the methods in the same pattern]
  static SaminColorDarkDeep(): string {
    return this.GetMetaValue("color--theme-deep-dark", "#261b2d");
  }
  static SaminInfoColor(): string {
    return this.GetMetaValue("color--theme-info", "#9964e3");
  }

  static SelldoneActiveButtonColor(): string {
    return this.GetMetaValue("color--theme-active-btn", "#C2185B");
  }

  // ――――――――――――――――――――――――― UTM Campaign ―――――――――――――――――――――――――
  static GetCampaignId(): string | null {
    return this.GetMetaValue("campaign_id", null);
  }
  static GetCampaignLinkId(): string | null {
    return this.GetMetaValue("link_id", null);
  }
  // ――――――――――――――――――――――――― UTM Affiliate ―――――――――――――――――――――――――
  static GetAffiliateId() {
    return this.GetMetaValue("affiliate_id", null);
  }
  // ――――――――――――――――――――――――― UTM Email ―――――――――――――――――――――――――
  static GetEmailId(): string | null {
    return this.GetMetaValue("email_id", null);
  }
  // ――――――――――――――――――――――――― GDPR ―――――――――――――――――――――――――
  static GetGDPREnable(): string | null {
    return this.GetMetaValue("gdpr", null);
  }

  // ――――――――――――――――――――――――― CDN ―――――――――――――――――――――――――
  static GetSelldoneCDN_Images(): string {
    const _val = this.GetMetaValue("selldone-cdn-images", null);
    if (!_val)
      throw "The images CDN is not defined in [selldone-cdn-images] meta tag!";
    return _val;
  }
  static GetSelldoneCDN_Jsons(): string {
    const _val = this.GetMetaValue("selldone-cdn-jsons", null);
    if (!_val)
      throw "The json CDN is not defined in [selldone-cdn-jsons] meta tag!";
    return _val;
  }

  static GetSelldoneCDNTemp_Files(): string {
    const _val = this.GetMetaValue("selldone-cdn-temp-files", null);
    if (!_val)
      throw "The file CDN is not defined in [selldone-cdn-temp-files] meta tag!";
    return _val;
  }
  static GetSelldoneCDN_AR(): string {
    const _val = this.GetMetaValue("selldone-cdn-ar", null);
    if (!_val)
      throw "The AR/3D CDN is not defined in [selldone-cdn-ar] meta tag!";
    return _val;
  }
  static GetSelldoneCDN_Videos(): string {
    const _val = this.GetMetaValue("selldone-cdn-videos", null);
    if (!_val)
      throw "The videos CDN is not defined in [selldone-cdn-videos] meta tag!";
    return _val;
  }
  static GetSelldoneCDN_ID(): string {
    const _val = this.GetMetaValue("selldone-cdn-id", null);
    if (!_val) throw "The ID CDN is not defined in [selldone-cdn-id] meta tag!";
    return _val;
  }

  static GetStorageDirectHost(): string | null {
    // Get files directly from cloud storage!
    return this.GetMetaValue("storage-redirect-host", null);
  }

  static GetStorageDirect(): boolean {
    // Get files directly from cloud storage!
    return this.GetMetaValue("storage-redirect", null) == "true";
  }
  static GetStorageDirectThumbnails(): boolean {
    // Get files directly from cloud storage!
    return this.GetMetaValue("storage-redirect-thumbnails", null) == "true";
  }

  // ――――――――――――――――――――――――― Official Bots ―――――――――――――――――――――――――
  static GetOfficialBotTelegram(): string | null {
    return this.GetMetaValue("bot:telegram", null);
  }

  // ――――――――――――――――――――――――― Aouth2 Logins ―――――――――――――――――――――――――
  static GetLoginModes() {
    return this.GetMetaValue("login-modes", "")?.split("|");
  }

  // ――――――――――――――――――――――――― iOS / Android Application Links ―――――――――――――――――――――――――
  static AndroidApp(): string | null {
    return this.GetMetaValue(
      "android-app",
      "https://play.google.com/store/apps/details?id=com.selldone.seller&utm_source=webapp"
    );
  }
  static IosApp(): string | null {
    return this.GetMetaValue(
      "ios-app",
      "https://testflight.apple.com/join/tPZ2uif4"
    );
  }

  // ――――――――――――――――――――――――― HTTP_REFERER : Keep origin url on SEO page load mode (Load first static version! ―――――――――――――――――――――――――

  static GetReferrerMeta(): string | null {
    return this.GetMetaValue("http-referer", document.referrer);
  }

  // ――――――――――――――――――――――――― Only for shop ―――――――――――――――――――――――――
  static ShowSelldoneCopyright(): boolean {
    return this.GetMetaValue("copyright-mark", "true") !== "false";
  }

  // ――――――――――――――――――――――――― UTM Affiliate ―――――――――――――――――――――――――
  static GetTemporaryAccessKey(): string | null {
    return this.GetMetaValue("temp_access_key", "");
  }

  // ――――――――――――――――――――――――― Native Tags ―――――――――――――――――――――――――
  static GetTwitterAccount() {
    // Return: @SelldoneInc  -> SelldoneInc
    return this.GetMetaValue("twitter:site", "")?.replace("@", "");
  }

  // ――――――――――――――――――――――――― Map Access Tokens ―――――――――――――――――――――――――

  /**
   * Retrieves the token for maps.
   * @returns The map token.
   */
  static MapToken(): string | null {
    return this.GetMetaValue(
      "map-token",
      "pk.eyJ1IjoicGFqdWhhYW4iLCJhIjoiY2sxaHNtbnU3MDFjcjNta2V0OTZ0d2ExYiJ9.YKRh0EP7NnhbmuSil7AvSw"
    );
  }

  static MapStyle(): string | null {
    return this.GetMetaValue("map-style", "mapbox://styles/mapbox/streets-v11");
  }

  /**
   * Retrieves the captcha key.
   * @returns The captcha key.
   */
  static GetCaptchaKey(): string | null {
    return this.GetMetaValue("captcha", null);
  }
}
