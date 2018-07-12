import { IDataService } from "./"
import { IUser, IBox, IFolder } from "../../models"
import { boxData, folderData } from "../../res"

export class DataService implements IDataService {
    /** USER/AUTH */

    fetchUser(): Promise<IUser> {
        throw new Error("Method not implemented.")
    }
    login = async () => {
        const req = await fetch("http://localhost:3000/login/", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        })
        return req.json()
    }

    /** BOX/FOLDER DATA FROM FILEMAKER */

    getAll = async (): Promise<Array<IFMSResponse>> => {
        const all = await fetch("http://localhost:3000/all/", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        })
        const data = await all.json()
        return data
    }
    fetchBoxesByDepId = (_depId: number): Promise<Array<IBox>> => {
        return new Promise(() => boxData.filter(box => box.DepId === _depId))
    }

    fetchFoldersByBoxId = (_boxId: number): Promise<Array<IFolder>> => {
        return new Promise(() =>
            folderData.filter(folder => folder.BoxIdBarCode === _boxId)
        )
    }
}

export interface IFMSData {
    DeliveredBy: string
    DeliveryDate: string
    DeliveryPriority: string
    DeliveryRequestInstructions: string
    FolderDescription: string
    ParentBox: string
    ParentBoxLocation: string
    ReceivedBy: string
    RequestDateTime: string
    RequestId: string
    RequestStatus: string
    RequestType: string
    RequestedItem: string
    RequestedItemBarcode: string
    RequestedTable: string
    RequestingDepartment: string
}

export interface IFMSResponse {
    fieldData: IFMSData
}
