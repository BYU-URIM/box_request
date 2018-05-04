export enum ModalTypes {
  warning = 'warning',
  submit = 'submit',
  create = 'create',
  none = 'none'
}

export interface IFolderAndBox {
  key: number
  BoxIdBarCode?: number
  Location?: string
  DepId?: number
  DepartmentName?: string
  FolderIdBarCode?: number
  FolderName?: string
  BoxID?: number
  Folder_Description?: string
}

export interface IRequestObject {
  type: string
  boxNumber?: number
  requestingDepartment: number
  parentBox?: number
  location: string
  requestType: string
  deliveryPriority: string
  requestStatus: string
  deliveryInstructions: string
  folderNumber?: string
}
