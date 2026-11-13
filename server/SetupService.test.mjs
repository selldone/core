import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("./SetupService.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  reportDiagnostics: true,
});
assert.deepEqual(compiled.diagnostics, []);

function fixture(head, config = {}) {
  const exports = {};
  vm.runInNewContext(compiled.outputText, {
    exports, document: { head }, window: { selldone_config: config },
  });
  return exports.SetupService;
}

test("meta configuration takes precedence over the embed configuration", () => {
  const setup = fixture({ querySelector: () => ({ content: "1227" }) }, { "pwa-version": "older" });
  assert.equal(setup.PWAVersion(), "1227");
});

test("a document whose head disappeared keeps the embed fallback and optional defaults", () => {
  const setup = fixture(null, { "service-url": "https://example.test" });
  assert.equal(setup.MainServiceUrl(), "https://example.test");
  assert.equal(setup.PWAVersion(), undefined);
  assert.equal(setup.GetMetaValue("missing", "fallback"), "fallback");
  assert.equal(setup.GetMetaValue("missing", null), null);
});
