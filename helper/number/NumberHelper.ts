export default class NumberHelper {
    static  toEnglishDigits(str) {
        str=''+str;
        // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
        var e = '۰'.charCodeAt(0);
        str = str.replace(/[۰-۹]/g, function(t) {
            return t.charCodeAt(0) - e;
        });

        // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
        e = '٠'.charCodeAt(0);
        str = str.replace(/[٠-٩]/g, function(t) {
            return t.charCodeAt(0) - e;
        });
        return str;
    }

    static  toEnglishNumber(val) {
        return Number(this.toEnglishDigits(val));
    }
    static  toEnglishInt(val) {
        return parseInt(this.toEnglishDigits(val));
    }
    static  toEnglishFloat(val,decimal) {
        return parseFloat(parseFloat(this.toEnglishDigits(val)).toFixed(decimal));
    }
}