export default class ImageDimension {
  /**
   * Calculate aspect ratio of element.
   * @param el
   * @returns number
   */
  static GetAspect(el) {
    const positionInfo = el.getBoundingClientRect();
    const height = positionInfo.height;
    const width = positionInfo.width;

    const aspect = Math.round((100 * width) / height) / 100;
    //console.log("aspect", aspect);
    return aspect;
  }

  /**
   *
   * @param src
   * @returns {Promise<unknown>}
   * @constructor
   */
  static GetAspectByUrl(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function () {
        if (!this.width || !this.height) {
          reject();
        } else {
          const aspect = Math.round((100 * this.width) / this.height) / 100;
          console.log("aspect", aspect);
          resolve(aspect);
        }
      };
      img.onerror = function () {
        reject();
      };
      img.src = src;
    });
  }
}
