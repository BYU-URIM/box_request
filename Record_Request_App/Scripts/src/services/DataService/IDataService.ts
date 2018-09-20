import { IBox, IUser } from "../../stores"

export interface IDataService {
    fetchUser(): Promise<IUser>
    fetchDepartmentData(depId: number): Promise<DepartmentData>
    createFolder(_folder: IFolderResponse): Promise<void>
    createBox(_box: IBox): Promise<void>
    login(): Promise<string>
}

export interface IBoxResponse {
    BoxId: number
    BoxDescription: string
    BeginDate: string
    EndDate: string
    ReviewDate: string
    PCODate: string
    DateCreated: string
    ArchivedDate: string
    DestroyedDate: string
    RecordCategoryId: string
    DestructionBatch: string
    ToBeArchived: string
    CurrentLocation: string
    DepartmentName: string
    RetentionCategory: string
    RetentionPeriod: string
    Function: string
    DeptId: number
    PERM: string
    PERMReviewPeriod: string
    College: string
    LastCheckoutDate: string
}
export type DepartmentData = Array<IBoxResponse & IPortalData>
// export interface IBoxWithFolders extends IBoxResponse, IPortalData {}
export interface IFolderResponse {
    recordId?: string
    modId?: string
    FolderId: number
    FolderDescription: string
    DateCreated: string
    PCODate: string
    CurrentFolderLocation: string
}

export interface IPortalData {
    Folders: Array<IFolderResponse>
}

export interface IBoxesResponse {
    fieldData: IBoxResponse
    portalData: IPortalData
    recordId?: string
    modId?: string
}
