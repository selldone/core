/*
 * Copyright (c) 2023-2024. Selldone® Business OS™
 *
 * Author: M.Pajuhaan
 * Web: https://selldone.com
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * All rights reserved. In the weave of time, where traditions and innovations intermingle, this content was crafted.
 * From the essence of thought, through the corridors of creativity, each word, and sentiment has been molded.
 * Not just to exist, but to inspire. Like an artist's stroke or a sculptor's chisel, every nuance is deliberate.
 * Our journey is not just about reaching a destination, but about creating a masterpiece.
 * Tread carefully, for you're treading on dreams.
 */

// Extending the global Window interface to include $AppsInterface.
declare global {
  interface Window {
    $AppsInterface: IAppsInterface;
  }
}

/**
 * Type definition for the listener's callback function.
 */
type IListenerCallback = (...args: any[]) => void;

/**
 * Type representing the structure of the Listeners object.
 * Maps ApplicationExecutorStorefront.EventsName enum values to an array of IListenerCallback functions.
 */
type IListener = {
  [event_name in ApplicationExecutorStorefront.EventsName]?: IListenerCallback[];
};

// Define the full $AppsInterface type.
export interface IAppsInterface {
  Listeners: IListener;
  addListener: (
    event_name: ApplicationExecutorStorefront.EventsName,
    callback: IListenerCallback,
  ) => void;
  removeListener: (
    event_name: ApplicationExecutorStorefront.EventsName,
    callback: IListenerCallback,
  ) => void;
}

/**
 * Provides an interface for shop applications to listen to and trigger events.
 */
export class ApplicationExecutorStorefront {
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
        addListener: function (
          event_name: ApplicationExecutorStorefront.EventsName,
          callback: IListenerCallback,
        ) {
          if (!window.$AppsInterface.Listeners[event_name])
            window.$AppsInterface.Listeners[event_name] = [];
          window.$AppsInterface.Listeners[event_name]!.push(callback);
        },

        /**
         * Removes a listener for a given event.
         *
         * @param {string} event_name - The name of the event.
         * @param {Function} callback - The callback function to be removed.
         */
        removeListener: function (
          event_name: ApplicationExecutorStorefront.EventsName,
          callback: IListenerCallback,
        ) {
          if (!window.$AppsInterface.Listeners[event_name]) return;

          const foundIndex = window.$AppsInterface.Listeners[
            event_name
          ]!.findIndex((element) => element === callback);
          if (foundIndex >= 0)
            window.$AppsInterface.Listeners[event_name]!.splice(foundIndex, 1);
        },
      };
    }

    if (!window.$AppsInterface.Listeners) window.$AppsInterface.Listeners = {};
  }

  /**
   * Triggers an event, executing all the attached listeners with the provided arguments.
   *
   * @param {ApplicationExecutorStorefront.EventsName} event_name - The name of the event to trigger.
   * @param {...any} args - The arguments to pass to the event listeners.
   */
  static TriggerEvent(
    event_name: ApplicationExecutorStorefront.EventsName,
    ...args: any[]
  ) {
    if (window.$AppsInterface.Listeners[event_name]) {
      window.$AppsInterface.Listeners[event_name]!.forEach(
        (callback: Function) => {
          if (callback) callback(...args);
        },
      );
    }
  }
}

export namespace ApplicationExecutorStorefront {
  /**
   * Enum representing the names of shop events that can be triggered in the application interface.
   */
  export enum EventsName {
    ChangePage = "change-page", // {to,from}
    ChangeUser = "change-user", // {user}
    ChangeShop = "change-shop", // {shop}
  }
}
