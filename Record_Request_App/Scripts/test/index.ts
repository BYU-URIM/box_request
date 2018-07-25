import { DataServiceFactory } from "../src/services"
import { RootStore, SessionStore } from "../src/stores"

const rootStore = DataServiceFactory.getTestRootStore()
rootStore.init()
rootStore.sessionStore.department = { id: 101, name: "Department of Defense" }

export const sessionStore: SessionStore = rootStore.sessionStore
export const creatorStore = rootStore.creatorStore
export const requestStore = rootStore.requestStore
export const requestState = rootStore.requestStore.requestState
