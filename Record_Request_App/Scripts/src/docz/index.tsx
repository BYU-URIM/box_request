import { DataServiceFactory } from "../services"
import { RootStore } from "../stores"
import { initializeIcons } from "@uifabric/icons"

initializeIcons()
export const rootStore: RootStore = DataServiceFactory.getRootStore()
const init = async () => {
    await rootStore.init()
    await rootStore.requestStore.initializeFolderForm()
    await rootStore.requestStore.initializeRequestForm()
}
init()

export const sessionStore = rootStore.sessionStore
export const creatorStore = rootStore.creatorStore
export const requestStore = rootStore.requestStore
export const requestForm = rootStore.requestStore.requestForm
