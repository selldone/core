export enum DeliveryStateCode {
  CheckQueue = "CheckQueue",
  OrderConfirm = "OrderConfirm",
  PreparingOrder = "PreparingOrder",
  SentOrder = "SentOrder",
  ToCustomer = "ToCustomer",
}

export interface IOrderState {
  /**
   * The unique code for the order state.
   *
   * This code serves as a unique identifier for each order state
   * and can be used for logic differentiation or data persistence.
   */
  code: string;

  /**
   * The localization key for the name of the order state.
   *
   * This key should correspond to an entry in the localization file or system,
   * ensuring that the displayed name can be translated into multiple languages.
   */
  name: string;

  /**
   * Font Awesome class for the order state's icon.
   *
   * This represents the visual representation of the order state.
   * It utilizes the Font Awesome library for iconography.
   */
  icon: string;
}
