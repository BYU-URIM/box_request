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
    BoxIdBarCode: number
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
    BoxDescription: string
}

export interface IFolderOrBox {
    FolderIdBarCode?: number
    FolderName?: string
    Folder_Description?: string
    Location?: string
    BoxIdBarCode?: number
    DepartmentName?: string
    DepId?: any
    inCart?: boolean
}

export interface IMockDataObj {
    BoxIdBarCode: number,
    DepId: number,
    DepartmentName: string,
    DateSubmitted: string,
    FolderId?: any
  }
  
  export interface IMockDataArrObj extends Array<IMockDataObj> { }

export interface IDepartmentList {
    name: string,
    id: number,
}

  export interface IDepartmentArrList extends Array<IDepartmentList> { }