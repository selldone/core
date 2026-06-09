// @ts-nocheck
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

//――――――――――――――――――――― Global Rules ―――――――――――――――――――――

/**
 * Collection of reusable validation helpers and Vuetify-style rule factories.
 */
const GlobalRules = {
    /**
     * Validates an email string with a permissive RFC-like pattern.
     * @param {string} value - Email candidate.
     * @returns {boolean} True when the email format is valid.
     */
    ValidateEmail(value){
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value);
    },
    /**
     * Validates a domain string.
     * @param {string} value - Domain candidate.
     * @returns {boolean} True when the domain format is valid.
     */
    ValidateDomain(value) {
        return /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/.test(value)
    },
    /**
     * Validates a URL with optional protocol.
     * @param {string} str - URL candidate.
     * @returns {boolean} True when the URL format is valid.
     */
     ValidURL(str) {
      const pattern = new RegExp('^(https?:\\/\\/)?'+
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
          '((\\d{1,3}\\.){3}\\d{1,3}))'+
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
          '(\\?[;&a-z\\d%_.~+=-]*)?'+
          '(\\#[-a-z\\d_]*)?$','i');
      return !!pattern.test(str);
    },

    /**
     * Creates a required-field validation rule.
     * @returns {(value: any) => true | string} Rule function returning translated error text on failure.
     */
    required() {
        return value => (value && Array.isArray(value)?value.length>0 : !!value) || window.$i18n_global.t('global.notification.required')
    },
    /**
     * Creates a maximum-length validation rule.
     * @param {number} maxCount - Maximum character count.
     * @returns {(value: string) => true | string} Rule function.
     */
    counter(maxCount) {
        return value => !value || value.length <= maxCount || window.$i18n_global.t('global.notification.invalid_max_chars',{maxCount:maxCount})
    },
    /**
     * Creates an email validation rule.
     * @returns {(value: string) => true | string} Rule function.
     */
    email() {
        return value => {
            return (this.ValidateEmail(value) || !value) || window.$i18n_global.t('global.notification.invalid_email')
        }
    },
    /**
     * Creates a domain validation rule.
     * @returns {(value: string) => true | string} Rule function.
     */
    domain() {
        return value => {
            return this.ValidateDomain(value) || window.$i18n_global.t('global.notification.invalid_domain')
        }
    },
    /**
     * Creates a minimum-length validation rule.
     * @param {number} length - Minimum required length.
     * @returns {(value: any[] | string) => true | string} Rule function.
     */
    minLength(length) {
        return value => {
            return (value && value.length>=length )|| window.$i18n_global.t(Array.isArray(value)?'global.notification.invalid_min_array_length':'global.notification.invalid_min_length',{length:length})
        }
    },
    /**
     * Creates a URL validation rule.
     * @returns {(value: string) => true | string} Rule function.
     */
    url() {
        return value => {
            return (!value || this.ValidURL(value)) || window.$i18n_global.t('global.notification.invalid_url')
        }
    },
}

export default GlobalRules
