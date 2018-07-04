import { IUser } from "../../models/StoreModels"
import { IBoxArr, IFolderArr } from "../../res"

export interface IDataService {
    fetchUser(): Promise<IUser>
    fetchBoxesByDepId(depId: number): Promise<IBoxArr>
    fetchFoldersByBoxId(boxId: number): Promise<IFolderArr>
}
