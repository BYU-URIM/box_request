import { IUser, IBox, IFolder } from "../../models/StoreModels"

export interface IDataService {
    fetchUser(): Promise<IUser>
    fetchBoxesByDepId(depId: number): Promise<Array<IBox>>
    fetchFoldersByBoxId(boxId: number): Promise<Array<IFolder>>
}
