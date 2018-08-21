import { RootStore } from "../../stores"
// import { ENVIRONMENT, EnvType } from "../../env"
import { DataService } from "./DataService"
import { mockFolders, mockBoxes, mockUser, mockData } from "../../res"
import { ENVIRONMENT, EnvType } from "../../env"
import { MockDataService } from "./MockDataService"

export class DataServiceFactory {
    static getRootStore(): RootStore {
        const ds =
            ENVIRONMENT === EnvType.LOCAL
                ? new MockDataService()
                : new DataService()
        return new RootStore(mockUser, ds)
    }

    static getTestRootStore(): RootStore {
        return new RootStore(mockData.currentUser, new DataService())
    }
}
