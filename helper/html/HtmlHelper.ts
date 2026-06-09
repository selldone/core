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
 * Intelligently converts plain text to HTML with automatic link and line break handling.
 *
 * This function processes plain text and converts it into HTML while:
 * - Optionally compiling markdown syntax
 * - Converting line breaks to <br> tags
 * - Automatically converting URLs to clickable links
 * - Converting email addresses to mailto links
 * - Stripping unnecessary HTML tags for security
 *
 * @param {string} message - The text message to convert.
 * @param {boolean} [remove_links=false] - If true, removes detected links instead of converting them to <a> tags.
 * @param {boolean} [compile_markdown=false] - If true, compiles markdown syntax to HTML.
 * @param {string[]|null} [ALLOW_TAGS=null] - Whitelist of HTML tags to preserve. If null, defaults vary based on markdown setting.
 * @returns {string} The converted HTML string, or empty string if message is null/undefined.
 *
 * @example
 * SmartConvertTextToHtml("Check out https://example.com");
 * // Returns: 'Check out <a href="https://example.com" target="_blank" rel="nofollow">https://example.com</a>'
 */
export function SmartConvertTextToHtml(
  message,
  remove_links = false,
  compile_markdown = false,
  ALLOW_TAGS=null // Auto
) {
  if (!message) return "";

  // Compile markdown if requested
  if (compile_markdown) {
    message = CompileMarkdown(message);
  }

  // Replace non-breaking space entities with regular spaces
  message = message.replace(/&nbsp;/g, " ").trim();

  /**
   * Converts URLs and email addresses into clickable links.
   * Detects HTTP, HTTPS, FTP URLs and email addresses.
   */
  function linkify(inputText, remove_links) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    // Pattern 1: URLs starting with whitespace/newline and http://, https://, or ftp://
    replacePattern1 =
      /((?:^|\s|\b(<br>))(\b(https?|ftp)):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(
      replacePattern1,
      remove_links ? "" : '<a href="$1" target="_blank" rel="nofollow">$1</a>'
    );

    // Pattern 3: Email addresses (test@example.com)
    replacePattern3 =
      /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(
      replacePattern3,
      remove_links ? "" : '<a href="mailto:$1" rel="nofollow">$1</a>'
    );

    return replacedText;
  }

  // Strip unwanted tags for security
  if(ALLOW_TAGS && Array.isArray(ALLOW_TAGS)){
    // Use custom whitelist if provided
    message = StripTags(message, ...ALLOW_TAGS);
  }
  else if (compile_markdown) {
    // Allow markdown-related tags
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
    // Standard allowed tags
    message = StripTags(message, "b", "p", "i", "a", "hr", "br", "span", "img");
  }

  // Convert newlines to <br> tags
  message = message.replace(/(?:\r\n|\r|\n)/g, "<br>");

  return linkify(message, remove_links);
}

/**
 * Converts text to HTML with hashtag support.
 *
 * Extends SmartConvertTextToHtml by detecting and linking hashtags.
 * Hashtags are detected as #-prefixed words and converted to searchable links.
 *
 * @param {string} message - The text message to convert.
 * @param {boolean} [remove_links=false] - If true, removes detected links.
 * @param {boolean} [compile_markdown=false] - If true, compiles markdown syntax.
 * @param {string} [hashtag_base_url=""] - Base URL for hashtag links.
 * @returns {string} The converted HTML string with hashtag links.
 *
 * @example
 * SmartConvertTextToHtmlHashtags("Check #awesome content", false, false, "/search");
 * // Returns: 'Check <a class="hash-tag" href="/search?hashtag=awesome">#awesome</a> content'
 */
export function SmartConvertTextToHtmlHashtags(
  message,
  remove_links = false,
  compile_markdown = false,
  hashtag_base_url = ""
) {
  // First apply standard HTML conversion
  let out = SmartConvertTextToHtml(message, remove_links, compile_markdown);

  // Convert hashtags to links: match # followed by word characters
  out = out.replace(/#[^\s!@#$%^&*()=+.\/,\[{\]};:'"?><]+/g, (hash) => {
    return `<a class="hash-tag" href="${hashtag_base_url}?hashtag=${hash
      .replace("#", "")
      .trim()}">${hash}</a>`;
  });
  return out;
}

/**
 * Removes specified HTML tags from a string while preserving tag content.
 *
 * Whitelist-based HTML tag filter that removes all tags except those specified.
 * Useful for sanitizing user input while preserving safe formatting.
 *
 * @param {string} _html - The HTML string to process.
 * @param {...string} [arguments] - Tag names to preserve (e.g., "b", "i", "a").
 *                                   Opening and closing tags are handled automatically.
 * @returns {string} The HTML string with non-whitelisted tags removed.
 *
 * @example
 * StripTags("<b>Hello</b> <script>alert('xss')</script>", "b");
 * // Returns: '<b>Hello</b> alert('xss')'
 */
export function StripTags(_html /*you can put each single tag per argument*/) {
  if (!_html) return _html;

  // Build list of allowed tags (both opening and closing variants)
  let _tags = [],
    _tag = "";
  for (let _a = 1; _a < arguments.length; _a++) {
    _tag = arguments[_a].replace(/<|>/g, "").trim();
    if (arguments[_a].length > 0) _tags.push(_tag, "/" + _tag);
  }

  // Validate input is a string
  if (!(typeof _html == "string") && !(_html instanceof String)) return "";
  // If no tags specified, remove all tags
  else if (_tags.length == 0) return _html.replace(/<(\s*\/?)[^>]+>/g, "");
  // Remove all tags not in whitelist
  else {
    let _re = new RegExp("<(?!(" + _tags.join("|") + ")s*/?)[^>]+>", "g");
    return _html.replace(_re, "");
  }
}

/**
 * Compiles markdown syntax to HTML using the Landmark markdown parser.
 *
 * Converts markdown formatted text to HTML. Supports headers, bold, italic,
 * code, code blocks, links, images, lists, and blockquotes.
 *
 * @param {string} message - The markdown text to compile.
 * @returns {string} The compiled HTML string.
 *
 * @example
 * CompileMarkdown("**Bold** and __italic__");
 * // Returns: "<p><b>Bold</b> and <i>italic</i></p>"
 */
export function CompileMarkdown(message) {
  if (!message) return message;
  return Landmark.render(message);
}

/**
 * Landmark Markdown Parser Implementation
 *
 * Simple, lightweight markdown to HTML converter supporting:
 * - Headers (# ## ###)
 * - Bold (**text**)
 * - Italic (__text__)
 * - Code blocks (```code```)
 * - Inline code (`code`)
 * - Links ([text](url))
 * - Images (![alt](url))
 * - Lists (- item or 1. item)
 * - Blockquotes (> text)
 * - Strikethrough (~~text~~)
 */
(function (w, libName) {
  /**
   * Escapes special characters to prevent markdown parsing.
   */
  let esc = function (s) {
       s = s.replace(/\&/g, "&amp;");

       // Escape special markdown characters
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
     // Markdown processing rules: { pattern, replacement }
     rules = [
       // Normalize line endings
       { p: /\r\n/g, r: "\n" },
       // Code blocks: ```code```
       {
         p: /\n\s*```\n([^]*?)\n\s*```\s*\n/g,
         r: function (m, grp) {
           return "<pre>" + esc(grp) + "</pre>";
         },
       },
       // Inline code: `code`
       {
         p: /`(.*?)`/g,
         r: function (m, grp) {
           return "<code>" + esc(grp) + "</code>";
         },
       },
       // Headers: # Header, ## Header 2, etc.
       {
         p: /\n\s*(#+)(.*)/g,
         r: function (m, hset, hval) {
           m = hset.length;
           return "<h" + m + ">" + hval.trim() + "</h" + m + ">";
         },
       },
       // Underline style header: text\n===
       { p: /\n\s*(.*?)\n={3,}\n/g, r: "\n<h1>$1</h1>\n" },
       // Dashed style header: text\n---
       { p: /\n\s*(.*?)\n-{3,}\n/g, r: "\n<h2>$1</h2>\n" },
       // Underline: ___text___
       { p: /___(.*?)___/g, r: "<u>$1</u>" },
       // Bold: **text**
       { p: /(\*\*)(.*?)\1/g, r: "<b>$2</b>" },
       // Bold italic: __text__
       { p: /(__)(.*?)\1/g, r: "<i>$2</i>" },
       // Emphasis: *text* or _text_
       { p: /(\*|_)(.*?)\1/g, r: "<em>$2</em>" },
       // Strikethrough: ~~text~~
       { p: /~~(.*?)~~/g, r: "<del>$1</del>" },
       // Quote: :"text":
       { p: /:"(.*?)":/g, r: "<q>$1</q>" },
       // Image: ![alt](url)
       { p: /\!\[([^\[]+?)\]\s*\(([^\)]+?)\)/g, r: '<img src="$2" alt="$1">' },
       // Link: [text](url)
       { p: /\[([^\[]+?)\]\s*\(([^\)]+?)\)/g, r: '<a href="$2">$1</a>' },
       // Unordered list: - item
       { p: /\n\s*(\*|\-)\s*([^\n]*)/g, r: "\n<ul><li>$2</li></ul>" },
       // Ordered list: 1. item
       { p: /\n\s*\d+\.\s*([^\n]*)/g, r: "\n<ol><li>$1</li></ol>" },
       // Blockquote: > text
       { p: /\n\s*(\>|&gt;)\s*([^\n]*)/g, r: "\n<blockquote>$2</blockquote>" },
       // Collapse adjacent lists
       { p: /<\/(ul|ol|blockquote)>\s*<\1>/g, r: " " },
       // Horizontal rule: **** or -----
       { p: /\n\s*\*{5,}\s*\n/g, r: "\n<hr>" },
       // Collapse multiple newlines
       { p: /\n{3,}/g, r: "\n\n" },
       // Wrap paragraphs
       {
         p: /\n([^\n]+)\n/g,
         r: function (m, grp) {
           grp = grp.trim();
           return /^\<\/?(ul|ol|bl|h\d|p).*/.test(grp.slice(0, 9))
             ? grp
             : "<p>" + grp + "</p>";
         },
       },
       // Remove extra whitespace between tags
       { p: />\s+</g, r: "><" },
     ],
     l = rules.length,
     i;

   // Export Landmark library with public API
   w[libName] = {
     /**
      * Adds a custom markdown rule.
      * @param {string} ruleString - Regex pattern string
      * @param {string|function} replacement - Replacement value or function
      */
     addRule: function (ruleString, replacement) {
       rules.push({ p: RegExp(ruleString, "g"), r: replacement });
     },
     /**
      * Renders markdown text to HTML.
      * @param {string} text - Markdown text to render
      * @returns {string} HTML output
      */
     render: function (text) {
       if ((text = text || "")) {
         // Replace <br> with \n to fix markdown compilation in HTML mode
         text = text.replace(/<br\s*\/?>/mg,"\n");

         // Wrap with newlines for processing
         text = "\n" + text.trim() + "\n";
         // Apply all markdown rules in sequence
         for (let i = 0; i < l; i++) text = text.replace(rules[i].p, rules[i].r);
       }
       return text;
     },
   };
})(self, "Landmark");

/**
 * List of HTML tags allowed in form builders and user-generated content.
 * This whitelist ensures that only safe formatting tags are permitted.
 *
 * @type {string[]}
 */
export const FORM_BUILDER_TAGS=   [  "b", "p", "i", "a", "hr", "br", "span", "img", "h1", "h2", "h3", "h4", "h5", "pre", "code", "u", "em", "del", "q", "ul", "ol", "li", "blockquote", "hr", "bl"]