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

declare global {
  // Extend the Console interface with the new methods
  interface Console {
    style: {
      (...args: any): void;
      wrap?: (text: string, rules: string) => string;
    };
    errorStyle: (...args: any[]) => void;
    colors: Record<string, (text: string) => string>;
  }
}
export {};

/**
 * @file console.style is micro-library for intuitively styling browser console text with CSS.
 */
(function (console) {
  /**
   * @namespace console
   */
  /* istanbul ignore if */
  if (!console || !console.log) {
    return;
  }

  const colors: string[] =
    "Black Blue Cyan Gray Green Magenta Red White Yellow".split(" ");
  const rxTags: RegExp = /<(css|b|i)(?:=['"](.*?)['"])?>(.*?)<\/(?:css|b|i)>/gi;
  const rxRules: RegExp = /([a-z\-]+)\s?:\s?([^;'"]+);?/gi;
  const rxTokens: RegExp = /%[sdifoO]/g;
  const rxImgs: RegExp = /<img=['"](.*?)['"]>/gi;
  const bg: string = "background";
  const px: string = "px";
  let wrap: Function;

  /**
   * Regex mojo to parse the text to log in the console.
   * @function parse
   * @param {string} text - the text with styles to parse
   * @returns {Array} args - an array of console.log arguments
   */
  const parse = (text: any): any[] => {
    const args: any[] = [text];
    if (typeof text === "string") {
      text = text.replace(rxImgs, function (_matchI, $1I) {
        let width: string = "";
        let height: string = "";
        const styles = ["font-size:1px"];
        $1I.replace(rxRules, function (_matchR: any, $1R: any, $2R: any) {
          switch ($1R) {
            case bg:
            case bg + "-image":
              styles.push($1R + ":" + $2R, bg + "-repeat:no-repeat");
              break;
            case "width":
              width = $2R;
              break;
            case "height":
              height = $2R;
              styles.push("line-height:" + $2R);
              break;
          }
        });
        const halfWidth = Math.ceil(parseInt(width) / 2);
        const halfHeight = Math.ceil(parseInt(height) / 2);
        styles.push(bg + "-size:" + width + " " + height);
        styles.push("padding:" + halfHeight + px + " " + halfWidth + px);
        return wrap("", styles.join(";"));
      });
      args[0] = text.replace(
        rxTags,
        function (_matchT: any, $1T: any, $2T: any, $3T: any) {
          $2T = $2T || "";
          $3T = $3T.replace(rxTokens, "");
          switch ($1T) {
            case "b":
              $2T += ";font-weight:bold";
              break;
            case "i":
              $2T += ";font-style:italic";
              break;
          }
          args.push($2T, "");
          return "%c" + $3T + "%c";
        }
      );
    }
    return args;
  };

  /**
   * Define color shortcut methods on the console.
   * @function colors
   * @memberOf console
   * @param {string} color - the CSS color rule to apply
   * @example console.wrap('Wow, this is ' + console.colors.green('so much') + ' better!');
   */
  console.colors = {};
  colors.forEach(function (color: string) {
    console.colors[color.toLowerCase()] = (text: string): string => {
      return wrap(text, "color:" + color);
    };
    console.colors["bg" + color] = (text: string): string => {
      return wrap(text, bg + "-color:" + color);
    };
  });

  /**
   * Intuitively Style Browser Console Text with CSS.
   * @function style
   * @memberOf console
   * @example console.style('Wow, this is <css="color:green;font-weight:bold;">so much</css> better!');
   * @param args
   */
  console.style = async function (...args: any[]) {
    console.log(...parse(args.shift()), ...args);
  };
  console.errorStyle = async function (...args) {
    console.error(...parse(args.shift()), ...args);
  };
  /**
   * Wraps the given text in a <css> tag with the provided style rules.
   * @function wrap
   * @memberOf console
   * @param {string} text - the text to wrap
   * @param rules
   * @returns {string} - the wrapped text
   * @example console.style('I just ' + console.style.wrap('love', 'color:#c00;font-weight:bold;')');
   */
  console.style.wrap = wrap = (text: string, rules: string): string => {
    return '<css="' + rules + '">' + text + "</css>";
  };
})(console);
