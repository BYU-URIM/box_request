import { DataServiceFactory } from "../src/services"
import { SessionStore } from "../src/stores"

const rootStore = DataServiceFactory.getTestRootStore()
rootStore.init()
rootStore.sessionStore.department = { id: 2, name: "Department 2" }

export const sessionStore: SessionStore = rootStore.sessionStore
export const requestStore = rootStore.requestStore
