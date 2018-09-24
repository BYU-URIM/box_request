import { DataServiceFactory } from "../services"
import { RootStore } from "../stores"
import { initializeIcons } from "@uifabric/icons"

initializeIcons()
export const rootStore: RootStore = DataServiceFactory.getRootStore()
const init = async () => {
    await rootStore.init()
    await rootStore.checkoutStore.initializeRequestForm()
}
init()

export const requestStore = rootStore.uiStore
export const requestForm = rootStore.uiStore.requestForm
