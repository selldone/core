/**
 * The AvocadoItemStatus provides the possible statuses an Avocado item can be in,
 * along with their associated codes, display names, and CSS classes for styling.
 *
 * - **PENDING**: Indicates the item is still under consideration and hasn't been processed.
 * - **ACCEPTED**: Indicates the item has been reviewed and accepted.
 * - **REJECTED**: Indicates the item has been reviewed and denied.
 */

/**
 * Describes the structure of each status item.
 */
interface StatusItem {
  /** The unique code representing the status. */
  code: string;

  /** The internationalization key for displaying the status' name in different languages. */
  name: string;

  /** The CSS class used for styling elements associated with this status. */
  class: string;
}

/**
 * Enumeration of Avocado item statuses.
 */
export const AvocadoItemStatus: Record<string, StatusItem> = {
  PENDING: {
    code: "PENDING",
    name: "global.status.pending",
    class: "blue-flat",
  },
  ACCEPTED: {
    code: "ACCEPTED",
    name: "global.status.accepted",
    class: "green-flat",
  },
  REJECTED: {
    code: "REJECTED",
    name: "global.status.rejected",
    class: "red-flat",
  },
};
