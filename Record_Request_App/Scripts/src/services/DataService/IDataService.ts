import { IBox, IFolder, IUser } from "../../stores"

export interface IDataService {
    fetchUser(): Promise<IUser>
    fetchBoxesByDepId(depId: number): Promise<Array<IBox>>
    fetchFoldersByBoxId(boxId: number): Promise<Array<IFolder>>
    createFolder(_folder: IFolder): Promise<void>
}
