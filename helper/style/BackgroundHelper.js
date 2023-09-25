export class BackgroundHelper {
  static CreateCompleteBackgroundStyleObject(
    bgCustom,
    bgGradient,
    bgImage,
    bgImageSize,
    BgImageRepeat,
    bgColor = null,
    dark = false,
    position = "center"
  ) {
    if (bgCustom && bgCustom.includes("background")) {
      const out = this.StringStyleToObj(bgCustom);
      if (!out.color && dark !== null && dark !== undefined) {
        out.color = dark ? "#fff" : "#333";
      }
      return out;
    }

    const out = {
      backgroundColor: bgColor,
      backgroundImage: this.CreateBackgroundImageStyle(
        bgCustom,
        bgGradient,
        bgImage
      ),
      backgroundSize: this.CreateBackgroundSizeStyle(
        bgCustom,
        bgGradient,
        bgImage,
        bgImageSize
      ),
      backgroundRepeat: BgImageRepeat,
      color:
        dark === null || dark === undefined
          ? undefined
          : dark
          ? "#fff"
          : "#333",
      backgroundPosition: position,
    };

    //   console.log('CreateCompleteBackgroundStyleObject',out)
    return out;
  }

  static StringStyleToObj(style) {
    if (!style) return {};
    const attributes = style.trim().split(";");
    const result = {};
    for (let i = 0; i < attributes.length; i++) {
      const entry = attributes[i].split(":");

      // Convert to camel case:
      const key = entry
        .splice(0, 1)[0]
        .trim()
        .replace(/-([a-z])/g, function (g) {
          return g[1].toUpperCase();
        });
      if (!key) continue;

      result[key] = entry.join(":");
    }
    return result;
  }

  static GetBackgroundSafeStyle(style) {
    if (style && style.includes("background")) return style;
    return { backgroundImage: style };
  }

  static CreateBackgroundImageStyle(bgCustom, bgGradient, bgImage) {
    let out = [];

    if (bgCustom) out.push(bgCustom);

    let gradient = "";
    if (bgGradient && bgGradient.length >= 2) {
      gradient = "linear-gradient(45deg";
      bgGradient.forEach(function (e) {
        gradient += "," + e;
      });
      gradient += ")";
      out.push(gradient);
    }

    if (bgImage) out.push(`url('${bgImage}')`);

    return out.join(",");
  }

  static CreateBackgroundSizeStyle(bgCustom, bgGradient, bgImage, bgImageSize) {
    let out = [];

    if (bgCustom) out.push("cover");

    if (bgGradient && bgGradient.length >= 2) {
      out.push("cover");
    }

    if (bgImage) out.push(bgImageSize);

    return out.join(",");
  }
}
