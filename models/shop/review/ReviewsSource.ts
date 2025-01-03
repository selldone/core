/*
 * Copyright (c) 2024. Selldone® Business OS™
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

export const ReviewsSource = {
    facebook:{
        code: 'facebook',
        title: 'Facebook',
        image: require('./../../../assets/trademark/facebook.svg'),
        message:'🚧 Please note that Facebook reviews are not available for all regions. Also Facebook not provide reviewer name and profile picture to us yet.',
    },
   google:{
        code: 'google',
        title: 'Google',
        image: require('@selldone/core-js/assets/trademark/google.svg'),
       message:"🚫 Google provides limited access for authentication of business, we are working on that, so now you will get rate limit error, please try again later.",
    },
}