# Permission icons

`scope-icons.json` contains the rounded-outline glyphs and mappings for public permission scopes. `getScopeIcon(code)` returns the native Vuetify `scope:` icon name. Unknown codes use the key fallback. Operations have small visual marks. This metadata never grants or changes access.

The shared components package registers the `scope:` icon set once in its Vuetify plugin. OAuth scopes, Connect permissions, personal-token controls and AI-agent pickers reuse it without replacing application navigation icons.
