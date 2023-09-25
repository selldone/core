/**
 * 🎗️ Subscription Interface
 *
 * This interface represents a subscription model with various properties.
 * It includes relations, content information, email settings, statistics, and rating data.
 */
export interface ProductContent {
  /**
   * @property id - Unique identifier for the subscription
   */
  id: number;

  /**
   * @property shop_id - Identifier for the associated shop
   */
  shop_id: number;

  /**
   * @property product_id - Identifier for the associated product
   */
  product_id: number;

  /**
   * @property user_id - Identifier for the associated user
   */
  user_id: number;

  // Content info
  /**
   * @property available - Indicates whether the subscription is available or not
   */
  available: boolean;

  /**
   * @property title - Public title for the subscription
   */
  title: string;

  /**
   * @property description - Public short description (optional)
   */
  description?: string | null;

  // Email
  /**
   * @property mail - Should an email be sent?
   */
  mail: boolean;

  /**
   * @property subject - Subject of the email (optional)
   */
  subject?: string | null;

  /**
   * @property body - Body content of the email in HTML format (optional)
   */
  body?: string | null;

  /**
   * @property in_que - Is the email in the sending queue?
   */
  in_que: boolean;

  // Statistics
  /**
   * @property emails - Total number of sent emails
   */
  emails: number;

  /**
   * @property views - Total number of users who viewed the email
   */
  views: number;

  /**
   * @property clicks - Total number of users who opened the content list
   */
  clicks: number;

  /**
   * @property downloads - Total number of users who downloaded at least one file
   */
  downloads: number;

  // Rating
  /**
   * @property rate_count - Total number of ratings
   */
  rate_count: number;

  /**
   * @property rate - Rating value, ranging from 1 to 5
   */
  rate: number;

  created_at: string;
  updated_at: string;
}
