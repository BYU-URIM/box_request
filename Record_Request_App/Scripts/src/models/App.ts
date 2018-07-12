import { IBox, IFolder } from "./StoreModels"

export enum ModalTypes {
    warning = "warning",
    submit = "submit",
    create = "create",
    none = "none",
}

export enum ItemStatusTypes {
    none = "none",
    notAvailable = "not available",
    depPossession = "in requesting department's possession",
}

export enum ItemStatusTypes {
    available = "+ Request",
    unavailable = "- Item Unavailable",
    checkedOutByClient = "- In Your Possession"
}

export interface IRequestObject {
    type: string
    boxNumber?: void[]
    requestingDepartment: void[]
    parentBox?: ""
    location: void[]
    requestType: string
    deliveryPriority: string
    requestStatus: string
    deliveryInstructions: string
    folderNumber?: string
}

export type IFolderAndBox = IFolder | IBox
