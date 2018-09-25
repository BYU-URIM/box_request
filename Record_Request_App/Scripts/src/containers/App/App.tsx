import * as React from "react"
import { initializeIcons } from "@uifabric/icons"
import { Fabric } from "office-ui-fabric-react"
import { RootStore, UIStore } from "../../stores"
import { inject, observer } from "mobx-react"
import { BoxRequest, FormModal, Message } from ".."
import { Greeting } from "../../components"
import DevTools from "mobx-react-devtools"
import "./styles.scss"
import { LoadingLockout } from "../LoadingLockout/LoadingLockout"

initializeIcons()
@inject("rootStore")
@observer
export class App extends React.Component<{ rootStore?: RootStore }> {
    render() {
        const { rootStore } = this.props
        return (
            <Fabric>
                <Message />
                {rootStore.userStore.loading === true ? (
                    <LoadingLockout />
                ) : (
                    <div className={"ms-Grid"}>
                        <Greeting user={rootStore.userStore} />
                        <BoxRequest />
                    </div>
                )}
                <DevTools />
                <FormModal />
            </Fabric>
        )
    }
}

export default App
