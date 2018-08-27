import { IDataService } from "./IDataService"
import { mockUser, mockBoxes, mockFolders } from "../../res"
import { IUser, IBox, IFolder } from "../../stores"

export class MockDataService implements IDataService {
    _user: IUser = mockUser
    _boxes: Array<IBox> = mockBoxes
    _folders: Array<IFolder> = mockFolders

    createFolder(_folder: IFolder): Promise<void> {
        this._folders.push({ ..._folder, FolderId: Math.random() })
        console.log(this._folders)

        return Promise.resolve()
    }
    fetchUser = (): Promise<IUser> => {
        return Promise.resolve(this._user)
    }

    fetchBoxesByDepId = (_depId: number): Promise<Array<IBox>> => {
        return Promise.resolve(this._boxes.filter(box => box.DeptId === _depId))
    }

    fetchFoldersByBoxId = (_boxId: number): Promise<Array<IFolder>> => {
        return Promise.resolve(
            this._folders.filter(folder => folder.BoxId === _boxId)
        )
    }
}
