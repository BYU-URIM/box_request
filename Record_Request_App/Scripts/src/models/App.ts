export enum ModalTypes {
    warning = "warning",
    SUBMIT_CART = "SUBMIT_CART",
    NEW_FOLDER = "NEW_FOLDER",
    NEW_BOX = "NEW_BOX",
    none = "none",
}

// export type URIM_MODALS = "WARNING" | "SUBMIT" | "NEW_FOLDER" | "NEW_BOX" | "NONE"

// export enum ItemStatusTypes {
//     none = "none",
//     notAvailable = "not available",
//     depPossession = "in requesting department's possession",
// }

export enum ItemStatusTypes {
    available = "Available",
    unavailable = "Unavailable",
    checkedOutByClient = "In Your Possession",
    inCheckout = "In Checkout",
}
