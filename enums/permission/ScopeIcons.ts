import catalog from "./scope-icons.json";

/** Shared glyphs for public permission scopes. */
export const ScopeIconCatalog = catalog;

export function getScopeIcon(scope: string): string {
  return Object.prototype.hasOwnProperty.call(catalog.scopes, scope)
    ? `scope:${scope}`
    : "scope:key";
}
