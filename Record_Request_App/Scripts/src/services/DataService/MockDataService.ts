import {
    IDataService,
    IBoxesResponse,
    IFolderResponse,
    DepartmentData,
} from "./IDataService"
import { mockUser, mockData } from "../../res"
import { IUser, IBox, IFolder } from "../../stores"

export class MockDataService implements IDataService {
    _user: IUser = mockUser
    _data: Array<IBoxesResponse> = mockData

    boxesResponseParse = (_boxes: Array<IBoxesResponse>): DepartmentData => {
        const cleanedBoxes: Array<IBoxesResponse> = JSON.parse(
            JSON.stringify(_boxes)
                .split("Folders::")
                .join("")
                .split("Departments::")
                .join("")
                .split("RetentionSchedule::")
                .join("")
        )
        return cleanedBoxes.map(_box => ({
            ..._box.fieldData,
            ..._box.portalData,
        }))
    }

    createFolder(_folder: IFolder): Promise<void> {
        this._data
            .find(e => e.fieldData.BoxId === _folder.BoxId)
            .portalData.Folders.push(_folder as IFolderResponse)
        return Promise.resolve()
    }

    createBox(_box: IBox): Promise<void> {
        // this._data.push({
        //     fieldData: _box,
        //     portalData: { Folders: [] },
        // })
        return Promise.resolve()
    }

    fetchUser = (): Promise<IUser> => {
        return Promise.resolve(this._user)
    }

    fetchDepartmentData = (_depId: number): Promise<DepartmentData> => {
        return Promise.resolve(this.boxesResponseParse(this._data))
    }

    login = async () => {
        return Promise.resolve("")
    }
}
