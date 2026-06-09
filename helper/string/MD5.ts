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

/**
 * MD5 hash implementation.
 *
 * Provides a client-side MD5 hash function implementation in pure JavaScript.
 * This is useful for generating MD5 checksums or hashes of strings.
 *
 * Note: MD5 is cryptographically broken and should not be used for security purposes.
 * For security applications, use SHA-256 or other modern hash functions instead.
 */
export class MD5 {
  /**
   * Generates an MD5 hash of the input string.
   *
   * This method implements the complete MD5 algorithm as per RFC 1321.
   * It processes the input string through four rounds of the MD5 compression function,
   * ultimately producing a 32-character hexadecimal hash string.
   *
   * @param {string} value - The input string to be hashed.
   * @returns {string} A 32-character hexadecimal string representing the MD5 hash.
   *
   * @example
   * // Returns "5d41402abc4b2a76b9719d911017c592"
   * MD5.hash("hello");
   *
   * @example
   * // Returns "d41d8cd98f00b204e9800998ecf8427e"
   * MD5.hash("");
   */
  static hash(value: string) {
    // ━━━━━━━━━━━━━━━━━━ MD5 core cycle function ━━━━━━━━━━━━━━━━━━
    // Performs one cycle of the MD5 compression function
    // Applies the four main MD5 auxiliary functions (ff, gg, hh, ii)
    function md5cycle(x, k) {
      let a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];

      // Round 1 - FF function (using logical AND and NOT operations)
      a = ff(a, b, c, d, k[0], 7, -680876936);
      d = ff(d, a, b, c, k[1], 12, -389564586);
      c = ff(c, d, a, b, k[2], 17, 606105819);
      b = ff(b, c, d, a, k[3], 22, -1044525330);
      a = ff(a, b, c, d, k[4], 7, -176418897);
      d = ff(d, a, b, c, k[5], 12, 1200080426);
      c = ff(c, d, a, b, k[6], 17, -1473231341);
      b = ff(b, c, d, a, k[7], 22, -45705983);
      a = ff(a, b, c, d, k[8], 7, 1770035416);
      d = ff(d, a, b, c, k[9], 12, -1958414417);
      c = ff(c, d, a, b, k[10], 17, -42063);
      b = ff(b, c, d, a, k[11], 22, -1990404162);
      a = ff(a, b, c, d, k[12], 7, 1804603682);
      d = ff(d, a, b, c, k[13], 12, -40341101);
      c = ff(c, d, a, b, k[14], 17, -1502002290);
      b = ff(b, c, d, a, k[15], 22, 1236535329);

      // Round 2 - GG function (using logical AND and OR operations)
      a = gg(a, b, c, d, k[1], 5, -165796510);
      d = gg(d, a, b, c, k[6], 9, -1069501632);
      c = gg(c, d, a, b, k[11], 14, 643717713);
      b = gg(b, c, d, a, k[0], 20, -373897302);
      a = gg(a, b, c, d, k[5], 5, -701558691);
      d = gg(d, a, b, c, k[10], 9, 38016083);
      c = gg(c, d, a, b, k[15], 14, -660478335);
      b = gg(b, c, d, a, k[4], 20, -405537848);
      a = gg(a, b, c, d, k[9], 5, 568446438);
      d = gg(d, a, b, c, k[14], 9, -1019803690);
      c = gg(c, d, a, b, k[3], 14, -187363961);
      b = gg(b, c, d, a, k[8], 20, 1163531501);
      a = gg(a, b, c, d, k[13], 5, -1444681467);
      d = gg(d, a, b, c, k[2], 9, -51403784);
      c = gg(c, d, a, b, k[7], 14, 1735328473);
      b = gg(b, c, d, a, k[12], 20, -1926607734);

      // Round 3 - HH function (using XOR operation)
      a = hh(a, b, c, d, k[5], 4, -378558);
      d = hh(d, a, b, c, k[8], 11, -2022574463);
      c = hh(c, d, a, b, k[11], 16, 1839030562);
      b = hh(b, c, d, a, k[14], 23, -35309556);
      a = hh(a, b, c, d, k[1], 4, -1530992060);
      d = hh(d, a, b, c, k[4], 11, 1272893353);
      c = hh(c, d, a, b, k[7], 16, -155497632);
      b = hh(b, c, d, a, k[10], 23, -1094730640);
      a = hh(a, b, c, d, k[13], 4, 681279174);
      d = hh(d, a, b, c, k[0], 11, -358537222);
      c = hh(c, d, a, b, k[3], 16, -722521979);
      b = hh(b, c, d, a, k[6], 23, 76029189);
      a = hh(a, b, c, d, k[9], 4, -640364487);
      d = hh(d, a, b, c, k[12], 11, -421815835);
      c = hh(c, d, a, b, k[15], 16, 530742520);
      b = hh(b, c, d, a, k[2], 23, -995338651);

      // Round 4 - II function (using XOR and NOT operations)
      a = ii(a, b, c, d, k[0], 6, -198630844);
      d = ii(d, a, b, c, k[7], 10, 1126891415);
      c = ii(c, d, a, b, k[14], 15, -1416354905);
      b = ii(b, c, d, a, k[5], 21, -57434055);
      a = ii(a, b, c, d, k[12], 6, 1700485571);
      d = ii(d, a, b, c, k[3], 10, -1894986606);
      c = ii(c, d, a, b, k[10], 15, -1051523);
      b = ii(b, c, d, a, k[1], 21, -2054922799);
      a = ii(a, b, c, d, k[8], 6, 1873313359);
      d = ii(d, a, b, c, k[15], 10, -30611744);
      c = ii(c, d, a, b, k[6], 15, -1560198380);
      b = ii(b, c, d, a, k[13], 21, 1309151649);
      a = ii(a, b, c, d, k[4], 6, -145523070);
      d = ii(d, a, b, c, k[11], 10, -1120210379);
      c = ii(c, d, a, b, k[2], 15, 718787259);
      b = ii(b, c, d, a, k[9], 21, -343485551);

      // Update state with computed values
      x[0] = add32(a, x[0]);
      x[1] = add32(b, x[1]);
      x[2] = add32(c, x[2]);
      x[3] = add32(d, x[3]);
    }

    // ━━━━━━━━━━━━━━━━━━ Auxiliary functions ━━━━━━━━━━━━━━━━━━
    // Common function used by auxiliary functions: adds values and performs left rotation
    function cmn(q, a, b, x, s, t) {
      a = add32(add32(a, q), add32(x, t));
      return add32((a << s) | (a >>> (32 - s)), b);
    }

    // FF function: (B & C) | (~B & D)
    function ff(a, b, c, d, x, s, t) {
      return cmn((b & c) | (~b & d), a, b, x, s, t);
    }

    // GG function: (B & D) | (C & ~D)
    function gg(a, b, c, d, x, s, t) {
      return cmn((b & d) | (c & ~d), a, b, x, s, t);
    }

    // HH function: B ^ C ^ D
    function hh(a, b, c, d, x, s, t) {
      return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    // II function: C ^ (B | ~D)
    function ii(a, b, c, d, x, s, t) {
      return cmn(c ^ (b | ~d), a, b, x, s, t);
    }

    // ━━━━━━━━━━━━━━━━━━ Main processing function ━━━━━━━━━━━━━━━━━━
    // Processes input string and computes state through 64-byte blocks
    function md51(s) {
      const txt = "";
      const n = s.length;
      // MD5 initial state (magic constants)
      const state = [1732584193, -271733879, -1732584194, 271733878];
      let i;

      // Process each 64-byte block
      for (i = 64; i <= s.length; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
      }

      // Process remaining bytes with padding
      s = s.substring(i - 64);
      const tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (i = 0; i < s.length; i++)
        tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);

      // Append 0x80 bit and original message length
      tail[i >> 2] |= 0x80 << (i % 4 << 3);
      if (i > 55) {
        md5cycle(state, tail);
        for (i = 0; i < 16; i++) tail[i] = 0;
      }
      tail[14] = n * 8;
      md5cycle(state, tail);
      return state;
    }

    // Converts a 64-byte string into 16-element array of 32-bit words
    function md5blk(s) {
      const md5blks = [];
      let i;
      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] =
          s.charCodeAt(i) +
          (s.charCodeAt(i + 1) << 8) +
          (s.charCodeAt(i + 2) << 16) +
          (s.charCodeAt(i + 3) << 24);
      }
      return md5blks;
    }

    // Converts a 32-bit word to a 8-character hex string
    function rhex(n) {
      let s = "",
        j = 0;
      for (; j < 4; j++)
        s +=
          hex_chr[(n >> (j * 8 + 4)) & 0x0f] + hex_chr[(n >> (j * 8)) & 0x0f];
      return s;
    }

    // Converts array of 32-bit words to hex string
    function hex(x) {
      for (let i = 0; i < x.length; i++) x[i] = rhex(x[i]);
      return x.join("");
    }

    // ━━━━━━━━━━━━━━━━━━ Helper functions ━━━━━━━━━━━━━━━━━━
    // Adds two 32-bit values with wraparound
    const add32 = function (a, b) {
      return (a + b) & 0xffffffff;
    };

    // Hex characters lookup table
    const hex_chr = "0123456789abcdef".split("");

    // Process input and return hash
    return hex(md51(value));
  }
}
