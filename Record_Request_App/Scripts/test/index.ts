import { MockDataService } from "../src/services"
import { RootStore } from "../src/stores"

const getRootStore = (): RootStore => {
    const _rootStore = new RootStore(new MockDataService())
    _rootStore.init()
    return _rootStore
}
export const rootStore = getRootStore()
