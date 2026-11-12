import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(new URL("./CDN.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  reportDiagnostics: true,
});
assert.deepEqual(compiled.diagnostics.filter((item) => item.category === ts.DiagnosticCategory.Error), []);
const exports = {};
const imports = {
  "./SetupService": { SetupService: {} },
  "../helper/image/PlaceholderImages": { PlaceholderImages: {} },
  "../helper/image/assets/image-placeholder.svg": { default: "placeholder.svg" },
  "lodash-es": { isString: (value) => typeof value === "string" },
};
vm.runInNewContext(compiled.outputText, {
  exports,
  require: (name) => {
    assert.ok(Object.hasOwn(imports, name), `Unexpected dependency: ${name}`);
    return imports[name];
  },
});

function fixture(overrides = {}) {
  return Object.assign(Object.create(exports.CDN.prototype), {
    shop_cdn_images: "https://platform.example.test/cdn-shop-images-1",
    storage_direct: true,
    storage_direct_thumbnails: true,
    storage_direct_url: "https://cdn.selldone.com",
  }, overrides);
}

test("ordinary originals use the storage resolver without changing their stored reference", () => {
  const cdn = fixture();
  for (const extension of ["webp", "jpg", "png"]) {
    const path = `shops_88_products_photo.${extension}`;
    assert.equal(cdn.GET_SHOP_IMAGE_PATH(path), `${cdn.shop_cdn_images}/${path}`);
    assert.equal(cdn.GET_SHOP_IMAGE_PATH(path, null), `${cdn.shop_cdn_images}/${path}`);
  }
});

test("sized thumbnails retain their direct URL and respect the configured thumbnail mode", () => {
  const path = "shops_88_products_photo.webp";
  assert.equal(fixture().GET_SHOP_IMAGE_PATH(path, 128), "https://cdn.selldone.com/app/shops/88/products/photo.webp128.png");
  const cdn = fixture({ storage_direct_thumbnails: false });
  assert.equal(cdn.GET_SHOP_IMAGE_PATH(path, 128), `${cdn.shop_cdn_images}/${path}?size=128`);
  assert.equal(cdn.GET_SHOP_IMAGE_PATH(path), `${cdn.shop_cdn_images}/${path}`);
});

test("retired and unknown storage schemes do not produce image URLs", () => {
  const cdn = fixture();
  for (const scheme of ["repository:", "instagram:", "custom:"]) {
    assert.equal(cdn.GET_SHOP_IMAGE_PATH(`${scheme}shops_88_photo.webp`), null);
    assert.equal(cdn.GET_SHOP_IMAGE_PATH(`${scheme}shops_88_photo.webp`, 128), null);
  }
});

test("SVG references preserve direct delivery without a resize suffix", () => {
  const cdn = fixture();
  for (const size of [null, 128]) {
    assert.equal(cdn.GET_SHOP_IMAGE_PATH("shops_88_products_logo.svg", size), "https://cdn.selldone.com/app/shops/88/products/logo.svg");
  }
});

test("absolute and external paths retain their existing size behavior", () => {
  const cdn = fixture();
  for (const path of ["https://images.example.test/photo.webp", "http://images.example.test/photo.png", "/assets/photo.jpg"]) {
    assert.equal(cdn.GET_SHOP_IMAGE_PATH(path), path);
    assert.equal(cdn.GET_SHOP_IMAGE_PATH(path, 128), path);
  }
  const direct = "https://cdn.selldone.com/app/shops/88/products/photo.webp";
  assert.equal(cdn.GET_SHOP_IMAGE_PATH(direct), direct);
  assert.equal(cdn.GET_SHOP_IMAGE_PATH(direct, 128), `${direct}128.png`);
  assert.equal(cdn.GET_SHOP_IMAGE_PATH("https://cdn.selldone.com/app/logo.svg", 128), "https://cdn.selldone.com/app/logo.svg");
});

test("disabled direct storage keeps the existing resolver and its size query", () => {
  for (const overrides of [{ storage_direct: false }, { storage_direct_url: null }]) {
    const cdn = fixture(overrides);
    const path = "shops_88_products_photo.webp";
    assert.equal(cdn.GET_SHOP_IMAGE_PATH(path), `${cdn.shop_cdn_images}/${path}`);
    assert.equal(cdn.GET_SHOP_IMAGE_PATH(path, 64), `${cdn.shop_cdn_images}/${path}?size=64`);
  }
});
