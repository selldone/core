import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(new URL("./ProductEmbedHelper.ts", import.meta.url), "utf8");
function fixture(configuredUrl, origin = "https://dashboard.example") {
  const calls = [], exports = {};
  vm.runInNewContext(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText, {
    exports, URL,
    window: { location: { origin }, URLS: { ProductIframeUrl: (...args) => { calls.push(args); return configuredUrl; } } },
  });
  return { helper: exports.ProductEmbedHelper, calls };
}

test("relative configured routes become absolute URLs that work on another website", () => {
  const { helper, calls } = fixture("/iframe/embed/@demo/product/31", "http://localhost:9000");
  const shop = { name: "demo" }, product = { id: 31, title: "A planter" };
  assert.equal(helper.ProductIframeUrl(shop, product), "http://localhost:9000/iframe/embed/@demo/product/31");
  assert.equal(calls[0][0], shop);
  assert.equal(calls[0][1], product);
  const code = helper.ProductIframe(shop, product);
  assert.ok(code.includes('src="http://localhost:9000/iframe/embed/@demo/product/31"'));
  assert.ok(code.includes('title="A planter"'));
  assert.ok(code.includes("height: 640px"));
  assert.ok(code.includes('allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'));
  assert.ok(!code.includes("theme=") && !code.includes("lang="), "export defaults remain independent of dashboard preview preferences");
});

test("absolute configured hosts and query values are preserved while HTML attributes are escaped", () => {
  const { helper } = fixture("https://iframe.example/embed/@demo/product/31?source=article&section=hero");
  const product = { id: 31, title: 'Pot "><img src=x onerror=alert(1)> & \'series\'' };
  const code = helper.ProductIframe({ name: "demo" }, product);
  assert.ok(code.includes('src="https://iframe.example/embed/@demo/product/31?source=article&amp;section=hero"'));
  assert.ok(code.includes('title="Pot &quot;&gt;&lt;img src=x onerror=alert(1)&gt; &amp; &#39;series&#39;"'));
  assert.ok(!code.includes("<img"));
  assert.equal((code.match(/<iframe\b/g) || []).length, 1);
  assert.ok(code.endsWith("></iframe>"));
});

test("protocol-relative hosts use the app protocol and non-HTTP embed sources fail closed", () => {
  assert.equal(fixture("//iframe.example/embed/product/31").helper.ProductIframeUrl({}, {}), "https://iframe.example/embed/product/31");
  for (const url of ["javascript:alert(1)", "data:text/html,test", "file:///tmp/embed.html"]) {
    assert.throws(() => fixture(url).helper.ProductIframe({}, { title: "Product" }), /HTTP\(S\)/);
  }
});

test("a missing product title remains a safe empty iframe label", () => {
  const { helper } = fixture("/iframe/embed/@demo/product/31");
  assert.ok(helper.ProductIframe({}, {}).includes('title=""'));
});
