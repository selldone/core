declare global {
  interface Window {
    $AppsInterface: AppsInterface;
  }
}

// Define a type for the listener's callback function.
type ListenerCallback = (...args: any[]) => void;

// Define the structure of the Listeners object.
interface Listeners {
  [event_name: string]: ListenerCallback[];
}

// Define the full $AppsInterface type.
export interface AppsInterface {
  Listeners: Listeners;
  addListener: (event_name: string, callback: ListenerCallback) => void;
  removeListener: (event_name: string, callback: ListenerCallback) => void;
}

/**
 * Provides an interface for shop applications to listen to and trigger events.
 */
export default class ShopApplicationInterface {
  /**
   * Initializes the $AppsInterface on the window object, if not already present.
   */
  constructor() {
    if (!window.$AppsInterface) {
      // Initialize $AppsInterface:
      window.$AppsInterface = {
        Listeners: {}, // Holds listeners for each event name.

        /**
         * Adds a listener for a given event.
         *
         * @param {string} event_name - The name of the event.
         * @param {Function} callback - The callback function to execute when the event is triggered.
         */
        addListener: function (event_name: string, callback: ListenerCallback) {
          if (!window.$AppsInterface.Listeners[event_name])
            window.$AppsInterface.Listeners[event_name] = [];
          window.$AppsInterface.Listeners[event_name].push(callback);
        },

        /**
         * Removes a listener for a given event.
         *
         * @param {string} event_name - The name of the event.
         * @param {Function} callback - The callback function to be removed.
         */
        removeListener: function (
          event_name: string,
          callback: ListenerCallback
        ) {
          if (!window.$AppsInterface.Listeners[event_name]) return;

          const foundIndex = window.$AppsInterface.Listeners[
            event_name
          ].findIndex((element) => element === callback);
          if (foundIndex >= 0)
            window.$AppsInterface.Listeners[event_name].splice(foundIndex, 1);
        },
      };
    }

    if (!window.$AppsInterface.Listeners) window.$AppsInterface.Listeners = {};
  }

  /**
   * Triggers an event, executing all the attached listeners with the provided arguments.
   *
   * @param {string} event_name - The name of the event to trigger.
   * @param {...any} args - The arguments to pass to the event listeners.
   */
  static TriggerEvent(event_name: string, ...args: any[]) {
    if (window.$AppsInterface.Listeners[event_name])
      window.$AppsInterface.Listeners[event_name].forEach(
        (callback: Function) => {
          if (callback) callback(...args);
        }
      );
  }
}
