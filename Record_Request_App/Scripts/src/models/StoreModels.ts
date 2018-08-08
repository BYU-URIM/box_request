export interface IUser {
    name: string
    username: string
    email: string
    Id: string
    departments: IDepartmentArrList
}

export interface IFolder {
    FolderId: number
    FolderName: string
    BoxId: number
    FolderDescription: string
    CurrentFolderLocation: string
    inCart?: boolean
    PCODate?: string
    DateCreated?: string
}

export interface IBox {
    BoxId: number
    BoxDescription: string
    CurrentLocation: string
    DepartmentName: string
    DeptId: number
    inCart?: boolean
    BeginDate?: string
    EndDate?: string
    ReviewDate?: string
    PERM?: string
    College?: string
    RetentionPeriod?: string
    ToBeArchived?: string
}

export interface IFolderOrBox {
    FolderId?: number
    FolderName?: string
    FolderDescription?: string
    CurrentLocation?: string
    BoxId?: number
    DepartmentName?: string
    DeptId?: number
    inCart?: boolean
}

export interface IDepartment {
    name: string
    id: number
}

export interface IDepartmentArrList extends Array<IDepartment> {}
