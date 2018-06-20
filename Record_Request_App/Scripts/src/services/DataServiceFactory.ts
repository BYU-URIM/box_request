import { RootStore } from "../stores/RootStore/RootStore"
import { ENVIRONMENT, EnvType } from "../env"
import { IDataService } from "./IDataService"
import { MockDataService } from "./MockDataService"
import { DataService } from "./DataService"
import { folderData, boxData, mockUser } from "../res"

export class DataServiceFactory {
    static getRootStore(): RootStore {
        // const ds =
        //     ENVIRONMENT === EnvType.LOCAL
        //         ? new MockDataService()
        //         : new DataService()
        return new RootStore(mockUser, folderData, boxData, new DataService())
    }
}
