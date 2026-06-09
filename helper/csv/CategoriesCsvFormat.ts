

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
 * Canonical header order for category import/export CSV files.
 */
export const CategoriesCsvHeaders= [
    "Name",
    "Title",
    "Description",
    "Image",
    "Parent",
]

/**
 * Column metadata used by CSV editors/importers for categories.
 */
export const CategoriesCsvStyler= {

    Name: {
        type: "text",
    },
    Title: {
        type: "text",
    },
    Description: {
        type: "text",
    },
    Image: {
        type: "image",
    },
    Parent: {
        type: "text",
        is_parent:true,
    },

}


/**
 * Validation helpers for category CSV files.
 */
export class CategoriesCsvFormat {
    /**
     * Checks whether a CSV header list contains all required category columns.
     * @param {string[]} headers - Parsed CSV headers.
     * @returns {boolean} True when all required headers are present.
     */
    static CheckValidFile(headers:string[]){
        if(!headers)return false;
        return !CategoriesCsvHeaders.some(it=>{
            return !headers.includes(it)
        })
    }
}