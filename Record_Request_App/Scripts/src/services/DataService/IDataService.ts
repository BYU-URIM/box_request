import { IBox, IFolder, User } from "../../stores"

export interface IDataService {
    fetchUser(): Promise<User>
    fetchBoxesByDepId(depId: number): Promise<Array<IBox>>
    fetchFoldersByBoxId(boxId: number): Promise<Array<IFolder>>
    createFolder(_folder: IFolder): Promise<void>
}
