export class DataService {
  login = async () => {
    const req = await fetch("http://localhost:3000/login/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
    return await req.json()
  }

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
