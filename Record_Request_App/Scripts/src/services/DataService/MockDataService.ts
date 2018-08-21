import { IDataService } from "./IDataService"
import { IUser, IBox, IFolder } from "../../models/StoreModels"
import { mockUser, mockBoxes, mockFolders } from "../../res"

export class MockDataService implements IDataService {
    createFolder(_folder: IFolder): Promise<{}> {
        throw new Error("Method not implemented.")
    }
    fetchUser = (): Promise<IUser> => {
        return Promise.resolve(mockUser)
    }

    fetchBoxesByDepId = (_depId: number): Promise<Array<IBox>> => {
        return Promise.resolve(mockBoxes.filter(box => box.DeptId === _depId))
    }

    fetchFoldersByBoxId = (_boxId: number): Promise<Array<IFolder>> => {
        return Promise.resolve(
            mockFolders.filter(folder => folder.BoxId === _boxId)
        )
    }
}
