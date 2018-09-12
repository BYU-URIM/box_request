import * as React from "react"
import { initializeIcons } from "@uifabric/icons"
import { Fabric } from "office-ui-fabric-react"
import { RootStore } from "../../stores"
import { inject, observer } from "mobx-react"
import { BoxRequest, UrimModal, Message } from ".."
import { Greeting } from "../../components"
import DevTools from "mobx-react-devtools"
import "./styles.scss"

initializeIcons()
@inject("rootStore")
@observer
export class App extends React.Component<{ rootStore?: RootStore }> {
    render() {
        const { rootStore } = this.props
        return (
            <Fabric>
                <Message />
                <div className={"ms-Grid"}>
                    <Greeting user={rootStore.userStore} />
                    <BoxRequest />
                    <DevTools />
                </div>
                <UrimModal />
            </Fabric>
        )
    }
}

export default App
