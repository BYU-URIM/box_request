import { IDataService } from "."
import { IFolder, IUser, IBox } from "../../stores"
import { DepartmentData } from "./IDataService"

export class DataService implements IDataService {
    createFolder(_folder: IFolder): Promise<void> {
        throw new Error("Method not implemented.")
    }

    createBox(_box: IBox): Promise<void> {
        throw new Error("Method not implemented.")
    }
    /** USER/AUTH */

    fetchUser(): Promise<IUser> {
        throw new Error("Method not implemented.")
    }

    login = () => {
        const data = fetch(
            "http://localhost:3000/fmi/data/v1/databases/Records%20Operation%20Center/sessions/",
            {
                method: "POST",
                headers: {
                    Authorization: "Basic U3R1ZGVudEFkbWluOlVSSU0yMDE5",
                    "Content-Type": "application/json",
                },
            }
        ).then(res => res.json())
        return data
    }

    /** BOX/FOLDER DATA FROM FILEMAKER */
    fetchDepartmentData = async (_depId: number): Promise<DepartmentData> => {
        const data = await fetch(
            "http://localhost:3000/fmi/data/v1/databases/Records%20Operation%20Center/layouts/BoxList/records/",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.login()}`,
                    "Content-Type": "application/json",
                },
            }
        ).then(res => res.json())
        return data
    }
}
