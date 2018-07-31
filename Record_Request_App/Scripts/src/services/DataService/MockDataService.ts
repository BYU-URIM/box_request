import { IDataService } from "./IDataService"
import { IUser, IBox, IFolder } from "../../models/StoreModels"
import { mockUser, mockBoxes, mockFolders } from "../../res"

export class MockDataService implements IDataService {
    fetchUser = (): Promise<IUser> => {
        return new Promise(() => mockUser)
    }

    fetchBoxesByDepId = (_depId: number): Promise<Array<IBox>> => {
        return new Promise(() => mockBoxes.filter(box => box.DepId === _depId))
    }

    fetchFoldersByBoxId = (_boxId: number): Promise<Array<IFolder>> => {
        return new Promise(() =>
            mockFolders.filter(folder => folder.BoxIdBarCode === _boxId)
        )
    }
}
