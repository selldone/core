import { StringToColour } from "../helper/color/ColorGenerator";

declare global {
  interface String {
    isNumber(): boolean;
    limitWords(numWords: number): string;
    wordsCount(numWords: number): number;
    starMiddle(visible?: number, max_stars?: number): string;
    ellipsis(length: number): string;
    toColor(dark?: boolean): string;
    removeVariantAsset(): string;
    hasVariantAsset(): number | undefined;
    applyAugment(
      augment: { key: string; value: string }[],
      bypass?: boolean
    ): string;
    findAllDynamicAugmentKeys(): string[];
  }
}

// This is required because we modified global
export {};

String.prototype.isNumber = function (this: string): boolean {
  return !isNaN(Number(this)) && !isNaN(parseFloat(this));
};

String.prototype.limitWords = function (
  this: string,
  numWords: number
): string {
  const arr = this.split(/\s+/, numWords);
  let new_string = arr.join(" ");
  if (new_string.length > numWords * 8) {
    new_string = new_string.substring(0, numWords * 8);
  }
  return new_string + (this.length > new_string.length ? "…" : "");
};

String.prototype.wordsCount = function (
  this: string,
  numWords: number
): number {
  const arr = this.split(/\s+/, numWords);
  return arr.length;
};

String.prototype.starMiddle = function (
  this: string,
  visible = 6,
  max_stars = 10
): string {
  if (this.length < 2 * visible) return this;
  const count = Math.min(this.length - 2 * visible, max_stars);
  return this.replace(
    this.substring(visible, this.length - visible),
    "*".repeat(count)
  );
};

String.prototype.ellipsis = function (this: string, length: number): string {
  if (this.length <= length) return this;
  return this.slice(0, length - 3) + "...";
};

String.prototype.toColor = function (this: string, dark = false): string {
  return StringToColour(this, dark ? -30 : 10); // Assuming StringToColour is defined elsewhere
};

String.prototype.removeVariantAsset = function (this: string): string {
  const regex = /\{.*?\}/;
  return this.replace(regex, "");
};

String.prototype.hasVariantAsset = function (this: string): number | undefined {
  const regex = /\{(.+?)\}/;
  const match = this.match(regex);
  return match?.length;
};

String.prototype.applyAugment = function (
  this: string,
  augment: { key: string; value: string }[],
  bypass = false
): string {
  if (bypass || !augment || !Array.isArray(augment)) return this;
  let str = this;

  augment.forEach((item) => {
    const regEx = new RegExp("\\{\\{" + item.key + "\\}\\}", "g");
    str = str.replace(regEx, item.value ? item.value : "");
  });

  return str;
};

String.prototype.findAllDynamicAugmentKeys = function (this: string): string[] {
  const regEx = /\{\{([^}]+)\}\}/g;
  let match;
  const keys: string[] = [];
  while ((match = regEx.exec(this)) !== null) {
    keys.push(match[1]);
  }
  return keys;
};
