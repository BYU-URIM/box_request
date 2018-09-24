export enum FormTypes {
    SUBMIT_CART = "SUBMIT_CART",
    NEW_FOLDER = "NEW_FOLDER",
    NEW_BOX = "NEW_BOX",
    none = "none",
}

export enum ItemStatusTypes {
    available = "Available",
    unavailable = "Unavailable",
    checkedOutByClient = "In Your Possession",
    inCheckout = "In Checkout",
}

export const ConfigStrings = {
    HOST_WEB_URL: "https://urimdev2.byu.edu/jj33/Record_Request_App",
    APP_WEB_URL: document.URL,
    FM_PROXY_URL: "http://localhost:3000/fmi/data/v1/databases/",
    FM_DATABASE: "Records Operation Center Test",
    FM_LAYOUTS: {
        BOX_DETAILS: "Box Details",
        FOLDER_DETAILS: "Folder Details",
    },
}
