import catalog from "./scope-icons.json";

/** The same checked-in catalog is rendered by Laravel authorization views. */
export const ScopeIconCatalog = catalog;

export function getScopeIcon(scope: string): string {
  return Object.prototype.hasOwnProperty.call(catalog.scopes, scope)
    ? `scope:${scope}`
    : "scope:key";
}
