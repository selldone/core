export interface ProductFile {
  /**
   * Unique identifier of the product file.
   */
  id: number;

  /**
   * ID representing the associated product.
   */
  product_id: number;

  /**
   * ID representing the associated content. Nullable.
   */
  content_id?: number | null;

  /**
   * Indicates if the file is a sample and can be downloaded for free.
   */
  sample: boolean;

  /**
   * Order or sequence number of the file in listings.
   */
  order: number;

  /**
   * Name of the file.
   */
  name: string;

  /**
   * Path to the file's location.
   */
  path: string;

  /**
   * Size of the file in kilobytes.
   */
  size: number;

  /**
   * Indicates if the file is currently being uploaded.
   */
  uploading: boolean;

  /**
   * Number of times the file has been downloaded.
   */
  downloads: number;

  /**
   * Date and time of the last download.
   */
  download_at: Date;

  created_at: string | null;
  updated_at: string | null;
}
