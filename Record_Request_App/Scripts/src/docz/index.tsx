import { DataServiceFactory } from "../services"
import { RootStore } from "../stores"
import { initializeIcons } from "@uifabric/icons"

initializeIcons()
export const rootStore: RootStore = DataServiceFactory.getRootStore()
const init = async () => {
    await rootStore.init()
}
init()

export const requestStore = rootStore.uiStore
