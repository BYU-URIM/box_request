import * as React from "react"
import * as ReactDom from "react-dom"
import { App } from "./containers"
import { Provider } from "mobx-react"
import { DataServiceFactory } from "./services"
import { Fabric, initializeIcons } from "office-ui-fabric-react"

const root = document.getElementById("root")
const rootStore = DataServiceFactory.getRootStore()
// tslint:disable-next-line:no-string-literal
window["rootStore"] = rootStore

initializeIcons()

const init = async () => {
    await rootStore.init()
    if (rootStore.initialized) {
        ReactDom.render(
            <Fabric>
                <Provider
                    rootStore={rootStore}
                    uiStore={rootStore.uiStore}
                    checkoutStore={rootStore.checkoutStore}
                    userStore={rootStore.userStore}
                >
                    <App />
                </Provider>
            </Fabric>,
            root
        )
    }
}
init()
