import {
    IDataService,
    IBoxResponse,
    DepartmentData,
    BoxData,
} from "./IDataService"
import { mockUser, mockData } from "../../res"
import { IUser, IBox, IFolder } from "../../stores"
import { sp } from "@pnp/sp-addinhelpers"
import { Web } from "@pnp/sp"
import { ConfigStrings } from "../../env"

export class SpDataService implements IDataService {
    _user: IUser = mockUser
    _data: Array<IBoxResponse> = mockData

    boxesResponseParser = (_boxes: Array<IBoxResponse>): DepartmentData => {
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

    boxResponseParser = (_box: IBoxResponse): BoxData => {
        const cleanedBoxes: IBoxResponse = JSON.parse(
            JSON.stringify(_box)
                .split("Folders::")
                .join("")
                .split("Departments::")
                .join("")
                .split("RetentionSchedule::")
                .join("")
        )

        return { ...cleanedBoxes.fieldData, ...cleanedBoxes.portalData }
    }

    fetchUser = (): Promise<IUser> => {
        return this.fetchSpUser()
    }

    fetchSpUser = async (): Promise<IUser> => {
        const u = await this.getAppWeb()
            .currentUser.expand("Groups")
            .select("Groups", "LoginName", "Title", "Email")
            .get()
        return {
            Id: u.LoginName.split("\\").reverse()[0],
            username: u.LoginName.split("\\").reverse()[0],
            email: u.Email,
            name: u.Title,
            departments: [
                { id: 154, name: "Graduate Studies" },
                { id: 110, name: "Statistical Research" },
            ],
        }
    }

    getAppWeb = (): Web => {
        sp.setup({
            sp: {
                headers: {
                    Accept: "application/json;odata=verbose",
                },
                baseUrl: ConfigStrings.APP_WEB_URL,
            },
        })
        return sp.web
    }

    async createFolder(_folder: IFolder): Promise<IFolder> {
        const token = await this.login()
        const response = await fetch(
            `${ConfigStrings.FM_PROXY_URL}${
                ConfigStrings.FM_DATABASE
            }/layouts/${ConfigStrings.FM_LAYOUTS.FOLDER_DETAILS}/records`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fieldData: _folder,
                }),
            }
        )
        const folderResponse = await response.json()
        const newFolderRes = await fetch(
            `${ConfigStrings.FM_PROXY_URL}${
                ConfigStrings.FM_DATABASE
            }/layouts/${ConfigStrings.FM_LAYOUTS.FOLDER_DETAILS}/records/${
                folderResponse.response.recordId
            }`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        )
        const newFolder = await newFolderRes.json()

        return newFolder.response.data[0].fieldData
    }

    createBox(_box: IBox): Promise<void> {
        this._data.push({
            fieldData: { ..._box, BoxId: Math.random() },
            portalData: { Folders: _box.Folders },
        })
        return Promise.resolve()
    }

    fetchDepartmentData = async (_deptId: number): Promise<DepartmentData> => {
        const token = await this.login()
        const response = await fetch(
            `${ConfigStrings.FM_PROXY_URL}${
                ConfigStrings.FM_DATABASE
            }/layouts/${ConfigStrings.FM_LAYOUTS.BOX_DETAILS}/_find`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: [
                        {
                            DeptId: `=${_deptId}`,
                        },
                    ],
                }),
            }
        )
        const data = await response.json()
        return this.boxesResponseParser(data.response.data)
    }

    fetchFoldersByBoxId = async (_boxId: number): Promise<Array<IFolder>> => {
        const token = await this.login()
        const response = await fetch(
            `${ConfigStrings.FM_PROXY_URL}${
                ConfigStrings.FM_DATABASE
            }/layouts/${ConfigStrings.FM_LAYOUTS.FOLDER_DETAILS}/records`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        )
        const data = await response.json()
        return data.response.data
            ? data.response.data.map(_box => ({ ..._box.fieldData }))
            : []
    }

    fetchFoldersByDeptId = async (_deptId: number): Promise<Array<IFolder>> => {
        const token = await this.login()

        const response = await fetch(
            `${ConfigStrings.FM_PROXY_URL}${
                ConfigStrings.FM_DATABASE
            }/layouts/${ConfigStrings.FM_LAYOUTS.FOLDER_DETAILS}/_find`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: [
                        {
                            DeptId: `=${_deptId}`,
                        },
                    ],
                }),
            }
        )
        const data = await response.json()
        return data.response.data.map(_box => ({ ..._box.fieldData }))
    }

    private login = async () => {
        const data = await fetch(
            `http://localhost:3000/fmi/data/v1/databases/${
                ConfigStrings.FM_DATABASE
            }/sessions/`,
            {
                method: "POST",
                headers: {
                    Authorization: "Basic Y291cmllcjpVUklNMjAxNw==",
                    "Content-Type": "application/json",
                },
            }
        )
        const resObject = await data.json()
        return String(resObject.response.token)
    }
}
