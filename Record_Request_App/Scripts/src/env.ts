export enum EnvType {
    LOCAL = "local",
    SHAREPOINT = "sharepoint",
    SHAREPOINT_PROXY = "sharepointProxy",
    OTHER = "other",
}

// gloabal variable set at build time through build script
// passed in through webpack plugin
// tslint:disable-next-line:prefer-const
declare const NODE_ENV: string

// associates NODE_ENV string to Environment enum and checks for any uncrecognized NODE_ENV string
// defaults to local if no NODE_ENV string is supplied by build script
function getEnvironment(nodeEnv: string): EnvType {
    switch (nodeEnv) {
        case "local":
            return EnvType.LOCAL
        case "sharepoint":
            return EnvType.SHAREPOINT
        case "sharepointProxy":
            return EnvType.SHAREPOINT_PROXY
        default:
            return EnvType.OTHER
    }
}

let _environment: EnvType
// if NODE_ENV is undefined (happens during test execution), an error will be thrown and _environment will get a default value
try {
    _environment = getEnvironment(NODE_ENV)
} catch (exeption) {
    _environment = EnvType.LOCAL
}

export const ENVIRONMENT = _environment

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