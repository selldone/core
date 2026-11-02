# Permission icons

`scope-icons.json` is the canonical rounded-outline glyph catalog and exact scope-code mapping. `getScopeIcon(code)` returns the native Vuetify `scope:` icon name; unknown codes use the key fallback. Read, write, propose, add and delete have small operation marks. This metadata never grants or changes access.

The shared components package registers the `scope:` icon set once in its Vuetify plugin. OAuth scopes, Connect permissions, personal-token controls and AI-agent pickers reuse it without replacing application navigation icons.

Laravel independently ships an exact copy at `Backend/resources/ui/scope-icons.json`, rendered by `partials.scope-icon`. When changing the canonical catalog, copy it to that path unchanged. The parity test prevents the two deployments from drifting; Laravel never depends on the frontend checkout at runtime.

From the main repository, run:

```sh
node --test src/Applications/Selldone/components/auth/tokens/scope-icons.test.mjs
```
