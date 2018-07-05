import { IDataService } from "./IDataService"
import { IUser } from "../../models/StoreModels"
import { mockUser, IBoxArr, IFolderArr, boxData, folderData } from "../../res"

export class MockDataService implements IDataService {
    fetchUser = (): Promise<IUser> => {
        return new Promise(() => mockUser)
    }

    fetchBoxesByDepId = (_depId: number): Promise<IBoxArr> => {
        return new Promise(() => boxData.filter(box => box.DepId === _depId))
    }

    fetchFoldersByBoxId = (_boxId: number): Promise<IFolderArr> => {
        return new Promise(() =>
            folderData.filter(folder => folder.BoxIdBarCode === _boxId)
        )
    }
}
