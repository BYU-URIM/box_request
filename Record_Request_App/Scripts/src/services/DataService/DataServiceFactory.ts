import { RootStore } from "../../stores"
import { DataService, MockDataService, SpDataService } from "."
import { ENVIRONMENT, EnvType } from "../../env"

export class DataServiceFactory {
    static getRootStore(): RootStore {
        const ds =
            ENVIRONMENT && ENVIRONMENT === EnvType.LOCAL
                ? new MockDataService()
                : ENVIRONMENT === EnvType.SHAREPOINT_PROXY
                ? new SpDataService()
                : new DataService()
        return new RootStore(ds)
    }
}
