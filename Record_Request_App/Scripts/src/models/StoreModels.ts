export interface IUser {
    name: string
    username: string
    email: string
    Id: string
    departments: IDepartmentArrList
}

export interface IFolder {
    FolderIdBarCode: number
    FolderName: string
    BoxIdBarCode: number
    Folder_Description: string
    Location: string
    inCart?: boolean
}

export interface IBox {
    BoxIdBarCode: number
    Location: string
    DepartmentName: string
    DepId: number
    inCart?: boolean
    BoxDescription: string
}

export interface IFolderOrBox {
    FolderIdBarCode?: number
    FolderName?: string
    Folder_Description?: string
    Location?: string
    BoxIdBarCode?: number
    DepartmentName?: string
    DepId?: number
    inCart?: boolean
}

export interface IDepartment {
    name: string
    id: number
}

export interface IDepartmentArrList extends Array<IDepartment> {}
