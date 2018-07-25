import { RootStore } from "../../stores/RootStore/RootStore"
import { ENVIRONMENT, EnvType } from "../../env"
import { DataService } from "./DataService"
import { mockFolders, mockBoxes, mockUser, mockData } from "../../res"

export class DataServiceFactory {
    static getRootStore(): RootStore {
        // const ds =
        //     ENVIRONMENT === EnvType.LOCAL
        //         ? new MockDataService()
        //         : new DataService()
        return new RootStore(
            mockUser,
            mockFolders,
            mockBoxes,
            new DataService()
        )
    }

    static getTestRootStore(): RootStore {
        return new RootStore(
            mockData.currentUser,
            mockData.folders,
            mockData.boxes,
            new DataService()
        )
    }
}
