import {
    IDataService,
    IBoxResponse,
    DepartmentData,
    BoxData,
} from "./IDataService"
import { mockUser, mockData } from "../../res"
import { IUser, IBox, IFolder } from "../../stores"

export class MockDataService implements IDataService {
    _user: IUser = mockUser
    _data: Array<IBoxResponse> = mockData

    boxesResponseParse = (_boxes: Array<IBoxResponse>): DepartmentData => {
        const cleanedBoxes: Array<IBoxResponse> = JSON.parse(
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

    async createFolder(_folder: IFolder): Promise<IFolder> {
        return Promise.resolve(_folder)
    }

    createBox(_box: IBox): Promise<void> {
        return Promise.resolve()
    }

    fetchUser = (): Promise<IUser> => {
        return Promise.resolve(this._user)
    }

    fetchDepartmentData = async (_depId: number): Promise<DepartmentData> => {
        const res: Promise<DepartmentData> = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.boxesResponseParse(this._data))
            }, 1000)
        })
        return res
    }

    login = async () => {
        return Promise.resolve("")
    }
}
