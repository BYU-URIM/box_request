import * as React from "react"
import * as ReactDom from "react-dom"
import { App } from "./containers/"
import { Provider } from "mobx-react"
import { DataServiceFactory } from "./services/DataServiceFactory"

const root = document.getElementById("root")
const rootStore = DataServiceFactory.getRootStore()
window["rootStore"] = rootStore
const init = async () => {
    await rootStore.init()
    if (rootStore.initialized)
        ReactDom.render(
            <Provider rootStore={rootStore}>
                <App />
            </Provider>,
            root
        )
}
init()
