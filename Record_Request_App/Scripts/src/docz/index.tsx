import { DataServiceFactory } from "../services"
import { RootStore } from "../stores"
export const rootStore: RootStore = DataServiceFactory.getRootStore()
const init = async () => {
    await rootStore.init()
}
init()

export const sessionStore = rootStore.sessionStore
export const creatorStore = rootStore.creatorStore
export const requestStore = rootStore.requestStore
