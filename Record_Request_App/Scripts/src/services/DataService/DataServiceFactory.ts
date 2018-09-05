import { RootStore } from "../../stores"
import { DataService } from "./DataService"
import { mockUser } from "../../res"
import { ENVIRONMENT, EnvType } from "../../env"
import { MockDataService } from "./MockDataService"

export class DataServiceFactory {
    static getRootStore(): RootStore {
        const ds =
            ENVIRONMENT && ENVIRONMENT === EnvType.LOCAL
                ? new MockDataService()
                : new DataService()
        return new RootStore(mockUser, ds)
    }
}
