export interface IUser {
    name: string
    username: string
    email: string
    Id: string
    departments: Array<number>
}

export interface IFolder {
    FolderIdBarCode: number
    FolderName: string
    BoxID: number
    Folder_Description: string
    Location: string
    inCart?: boolean
}
export interface IBox {
    BoxIdBarCode: number
    Location: string
    DepartmentName: string
    DepId: any
    inCart?: boolean
}

export interface IFolderOrBox {
    FolderIdBarCode?: number
    FolderName?: string
    BoxID?: number
    Folder_Description?: string
    Location?: string
    BoxIdBarCode?: number
    DepartmentName?: string
    DepId?: any
    inCart?: boolean
}
