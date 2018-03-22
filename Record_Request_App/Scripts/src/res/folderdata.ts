export interface iFolderDataObj {
    FolderIdBarCode: number,
    Location: string,
    DepartmentName: string,
    DepId: any
  }
  
  export interface iFolderDataArrObj extends Array<iFolderDataObj> { }
  
  export const folderData: iFolderDataArrObj =