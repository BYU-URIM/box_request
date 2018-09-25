import { IBox, IUser, IFolder } from "../../stores"

export interface IDataService {
    fetchUser(): Promise<IUser>
    fetchDepartmentData(depId: number): Promise<DepartmentData>
    createFolder(_folder: IFolder): Promise<IFolder>
    createBox(_box: IBox): Promise<void>
    login(): Promise<string>
}

export type DepartmentData = Array<IBox & IPortalData>

export type BoxData = IBox & IPortalData

export interface IFolderResponse {
    fieldData: IFolder
    recordId?: string
    modId?: string
}

export interface IPortalData {
    Folders: Array<IFolder>
}

export interface IBoxResponse {
    fieldData: IBox
    portalData?: IPortalData
    recordId?: string
    modId?: string
}
