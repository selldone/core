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
export default {
    ValidateEmail(value){
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value);
    },
    ValidateDomain(value) {
        return /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/.test(value)
       // return /^[a-zA-Z0-9][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9]{0,1}\.([a-zA-Z]{1,6}|[a-zA-Z0-9-]{1,30}\.[a-zA-Z]{2,})$/.test(value)   // Not accept more than 4 parts! ex: shop.sqmarchitects.com.ddf
       // return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(value)    // Problem: can not accept domains with dash!

    },
     ValidURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
},

    required() {
        return value => (value && Array.isArray(value)?value.length>0 : !!value) || window.$i18n_global.t('global.notification.required')
    },
    counter(maxCount) {
        return value => !value || value.length <= maxCount || window.$i18n_global.t('global.notification.invalid_max_chars',{maxCount:maxCount})
    },
    email() {
        return value => {
            return (this.ValidateEmail(value) || !value) || window.$i18n_global.t('global.notification.invalid_email')
        }
    },
    domain() {
        return value => {
            return this.ValidateDomain(value) || window.$i18n_global.t('global.notification.invalid_domain')
        }
    },
    minLength(length) {
        return value => {
            return (value && value.length>=length )|| window.$i18n_global.t(Array.isArray(value)?'global.notification.invalid_min_array_length':'global.notification.invalid_min_length',{length:length})
        }
    },


    url() {
        return value => {
            return (!value || this.ValidURL(value)) || window.$i18n_global.t('global.notification.invalid_url')
        }
    },
}
