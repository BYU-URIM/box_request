export interface IOption {
    key: number
    text: string
}

export interface IDropdownInfo {
    title: string
    key: number
    style: string
    placeHolder: string
}

export interface IFolderOrBox {
    FolderId?: number
    FolderName?: string
    FolderDescription?: string
    CurrentLocation?: string
    BoxId?: number
    DepartmentName?: string
    DeptId?: number
    addable?: boolean
}
