export default class NumberHelper {
  static toEnglishDigits(str: string) {
    str = "" + str;
    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    let e = "۰".charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function (t) {
      return t.charCodeAt(0) - e;
    });

    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = "٠".charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function (t) {
      return t.charCodeAt(0) - e;
    });
    return str;
  }

  static toEnglishNumber(val:string) {
    return Number(this.toEnglishDigits(val));
  }
  static toEnglishInt(val:string) {
    return parseInt(this.toEnglishDigits(val));
  }
  static toEnglishFloat(val:string, decimal:number) {
    return parseFloat(parseFloat(this.toEnglishDigits(val)).toFixed(decimal));
  }
}
