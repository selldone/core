/**
 * A simple implementation of Least Recently Used (LRU) cache.
 */
export class LRUCache<K, V extends ICacheable | null> {
  private cache: Map<K, V>;
  private readonly maxSize: number;

  /**
   * Creates a new instance of LRUCache.
   *
   * @param maxSize - The maximum number of items the cache can hold. Defaults to 100.
   */
  constructor(maxSize: number = 100) {
    this.cache = new Map<K, V>();
    this.maxSize = maxSize;
  }

  /**
   * Retrieve a value from the cache.
   *
   * @param key - The key associated with the value to retrieve.
   * @returns The value associated with the key, or `undefined` if the key doesn't exist.
   */
  get(key: K): V | undefined {
    if (!this.cache.has(key)) return undefined;

    // Refresh the accessed key by deleting and setting it again
    const tempValue = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, tempValue!);
    return tempValue;
  }

  /**
   * Add a new key-value pair to the cache. If the cache exceeds its `maxSize`,
   * it will remove the least recently used item.
   *
   * @param key - The key of the item to add or update.
   * @param value - The value of the item to add or update.
   */
  set(key: K, value: V): void {
    // If key is already present, delete it so it moves to the end
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    if (value) value.__date = new Date();
    this.cache.set(key, value);

    // Check size constraint and remove the oldest (least recently used) item if needed
    if (this.cache.size > this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
  }

  /**
   * Clears all items from the cache.
   */
  clear(): void {
    this.cache.clear();
  }

  entries() {
    return this.cache.entries();
  }
  length() {
    return this.cache.size;
  }
}

interface ICacheable {
  __date?: Date;
}
