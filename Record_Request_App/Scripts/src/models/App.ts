export enum ModalTypes {
  warning = 'warning',
  submit = 'submit',
  create = 'create',
  none = 'none',
}

export enum CheckoutTypes {
  none = 'none',
  notAvailable = 'not available',
  depPossession = 'in requesting department\'s possession'
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
  boxNumber?: void[]
  requestingDepartment: void[]
  parentBox?: ''
  location: void[]
  requestType: string
  deliveryPriority: string
  requestStatus: string
  deliveryInstructions: string
  folderNumber?: string
}
