import { DataServiceFactory, MockDataService } from "../src/services"
import { RootStore } from "../src/stores"
import { mockUser } from "../src/res"

const getRootStore = (): RootStore => {
    const _rootStore = new RootStore(mockUser, new MockDataService())
    _rootStore.init()
    return _rootStore
}
export const rootStore = getRootStore()
