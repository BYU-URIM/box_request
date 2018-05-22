export interface IBoxData {
  BoxIdBarCode: number
  DepId: number
  DepartmentName: string
  Location: string
}

export interface IFolderData {
  FolderIdBarCode: number
  FolderName: string
  BoxID: number
  Folder_Description: string
}
