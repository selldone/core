/**
 * Represents the structure of a dropship request status.
 *
 * @property {string} code - The unique identifier for the status.
 * @property {string} name - The localization key or label for the status.
 * @property {string} icon - The icon associated with the status.
 */
interface DropshipRequestStatusDetail {
  code: string;
  name: string;
  icon: string;
}

/**
 * Enumerates the possible statuses for dropship requests, providing associated metadata.
 *
 * Each status has:
 * - A unique code to represent the status.
 * - A name (typically a localization key) for displaying to users.
 * - An icon to visually represent the status in UIs.
 */
export const DropshipRequestStatus: Record<string, DropshipRequestStatusDetail> = {
  PENDING: {
    code: "PENDING",
    name: "dropship_request_status.PENDING",
    icon: 'pending_actions'
  },
  ACCEPT: {
    code: "ACCEPT",
    name: "dropship_request_status.ACCEPT",
    icon: 'task_alt'
  },
  REJECT: {
    code: "REJECT",
    name: "dropship_request_status.REJECT",
    icon: 'highlight_off'
  }
};
