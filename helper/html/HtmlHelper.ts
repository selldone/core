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
export function SmartConvertTextToHtml(
  message,
  remove_links = false,
  compile_markdown = false,
  ALLOW_TAGS=null // Auto
) {
  if (!message) return "";

  if (compile_markdown) {
    message = CompileMarkdown(message);
  }

  // Replace white space (&nbsp;):
  message = message.replace(/&nbsp;/g, " ").trim();

  function linkify(inputText, remove_links) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with   whitespace or newline or <br>    &    http://, https://, or ftp://
    replacePattern1 =
      /((?:^|\s|\b(<br>))(\b(https?|ftp)):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(
      replacePattern1,
      remove_links ? "" : '<a href="$1" target="_blank" rel="nofollow">$1</a>'
    );

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    /*replacePattern2 = /(^|[^\/])(www\.[a-zA-Z0-9]+\.[^\s]{2,})/gim;  BAD WORK!
    replacedText = replacedText.replace(
      replacePattern2,
      remove_links
        ? ""
        : '$1<a href="https://$2" target="_blank" rel="nofollow">$2</a>'
    );*/

    //Change email addresses to mailto:: links.
    replacePattern3 =
      /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(
      replacePattern3,
      remove_links ? "" : '<a href="mailto:$1" rel="nofollow">$1</a>'
    );

    return replacedText;
  }

  //message = message.replace(/<[^>]*>?/gm, "");
  if(ALLOW_TAGS && Array.isArray(ALLOW_TAGS)){
    message = StripTags(message, ...ALLOW_TAGS);
  }

  else if (compile_markdown) {
    message = StripTags(
      message,
      "b",
      "p",
      "i",
      "a",
      "hr",
      "br",
      "span",
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "pre",
      "code",
      "u",
      "em",
      "del",
      "q",
      "ul",
      "ol",
      "li",
      "blockquote",
      "hr",
      "bl"
    );
  } else {
    message = StripTags(message, "b", "p", "i", "a", "hr", "br", "span", "img");
  }

  message = message.replace(/(?:\r\n|\r|\n)/g, "<br>");

  return linkify(message, remove_links);
}

export function SmartConvertTextToHtmlHashtags(
  message,
  remove_links = false,
  compile_markdown = false,
  hashtag_base_url = ""
) {
  let out = SmartConvertTextToHtml(message, remove_links, compile_markdown);

  // Convert hashtags to link:
  out = out.replace(/#[^\s!@#$%^&*()=+.\/,\[{\]};:'"?><]+/g, (hash) => {
    return `<a class="hash-tag" href="${hashtag_base_url}?hashtag=${hash
      .replace("#", "")
      .trim()}">${hash}</a>`;
  });
  return out;
}
export function StripTags(_html /*you can put each single tag per argument*/) {
  if (!_html) return _html;

  let _tags = [],
    _tag = "";
  for (let _a = 1; _a < arguments.length; _a++) {
    _tag = arguments[_a].replace(/<|>/g, "").trim();
    if (arguments[_a].length > 0) _tags.push(_tag, "/" + _tag);
  }

  if (!(typeof _html == "string") && !(_html instanceof String)) return "";
  else if (_tags.length == 0) return _html.replace(/<(\s*\/?)[^>]+>/g, "");
  else {
    // Remove tags
    let _re = new RegExp("<(?!(" + _tags.join("|") + ")s*/?)[^>]+>", "g");
    return _html.replace(_re, "");
  }
}

export function CompileMarkdown(message) {
  if (!message) return message;
  return Landmark.render(message);

}

(function (w, libName) {
  let esc = function (s) {
      s = s.replace(/\&/g, "&amp;");

      let escChars = "'#<>`*-~_=:\"![]()nt",
        c,
        l = escChars.length,
        i;
      for (i = 0; i < l; i++)
        s = s.replace(RegExp("\\" + escChars[i], "g"), function (m) {
          return "&#" + m.charCodeAt(0) + ";";
        });
      return s;
    },
    rules = [
      { p: /\r\n/g, r: "\n" },
      {
        p: /\n\s*```\n([^]*?)\n\s*```\s*\n/g,
        r: function (m, grp) {
          return "<pre>" + esc(grp) + "</pre>";
        },
      },
      {
        p: /`(.*?)`/g,
        r: function (m, grp) {
          return "<code>" + esc(grp) + "</code>";
        },
      },
      {
        p: /\n\s*(#+)(.*)/g,
        r: function (m, hset, hval) {
         // console.log("===>", m, hset, hval);
          m = hset.length;
          return "<h" + m + ">" + hval.trim() + "</h" + m + ">";
        },
      },
      { p: /\n\s*(.*?)\n={3,}\n/g, r: "\n<h1>$1</h1>\n" },
      { p: /\n\s*(.*?)\n-{3,}\n/g, r: "\n<h2>$1</h2>\n" },
      { p: /___(.*?)___/g, r: "<u>$1</u>" },
      { p: /(\*\*)(.*?)\1/g, r: "<b>$2</b>" },
      { p: /(__)(.*?)\1/g, r: "<i>$2</i>" },
      { p: /(\*|_)(.*?)\1/g, r: "<em>$2</em>" },
      { p: /~~(.*?)~~/g, r: "<del>$1</del>" },
      { p: /:"(.*?)":/g, r: "<q>$1</q>" },
      { p: /\!\[([^\[]+?)\]\s*\(([^\)]+?)\)/g, r: '<img src="$2" alt="$1">' },
      { p: /\[([^\[]+?)\]\s*\(([^\)]+?)\)/g, r: '<a href="$2">$1</a>' },
      { p: /\n\s*(\*|\-)\s*([^\n]*)/g, r: "\n<ul><li>$2</li></ul>" },
      { p: /\n\s*\d+\.\s*([^\n]*)/g, r: "\n<ol><li>$1</li></ol>" },
      { p: /\n\s*(\>|&gt;)\s*([^\n]*)/g, r: "\n<blockquote>$2</blockquote>" },
      { p: /<\/(ul|ol|blockquote)>\s*<\1>/g, r: " " },
      { p: /\n\s*\*{5,}\s*\n/g, r: "\n<hr>" },
      { p: /\n{3,}/g, r: "\n\n" },
      {
        p: /\n([^\n]+)\n/g,
        r: function (m, grp) {
          grp = grp.trim();
          return /^\<\/?(ul|ol|bl|h\d|p).*/.test(grp.slice(0, 9))
            ? grp
            : "<p>" + grp + "</p>";
        },
      },
      { p: />\s+</g, r: "><" },
    ],
    l = rules.length,
    i;

  w[libName] = {
    addRule: function (ruleString, replacement) {
      rules.push({ p: RegExp(ruleString, "g"), r: replacement });
    },
    render: function (text) {
      if ((text = text || "")) {
        text = text.replace(/<br\s*\/?>/mg,"\n"); // Replace <br> with \n ! to fix compile markdown html mode.

        text = "\n" + text.trim() + "\n";
        for (let i = 0; i < l; i++) text = text.replace(rules[i].p, rules[i].r);
      }
      return text;
    },
  };
})(self, "Landmark");





export const FORM_BUILDER_TAGS=   [  "b", "p", "i", "a", "hr", "br", "span", "img", "h1", "h2", "h3", "h4", "h5", "pre", "code", "u", "em", "del", "q", "ul", "ol", "li", "blockquote", "hr", "bl"]