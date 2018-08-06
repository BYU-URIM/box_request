import * as React from "react"
import { initializeIcons } from "@uifabric/icons"
import "./styles.scss"
import { Fabric } from "office-ui-fabric-react"
import { SessionStore } from "../../stores"
import { inject, observer } from "mobx-react"
import { BoxRequest } from ".."
import { Greeting } from "../../components"

initializeIcons()
@inject("sessionStore")
@observer
export class App extends React.Component<{ sessionStore?: SessionStore }> {
    render() {
        const { sessionStore } = this.props
        return (
            <Fabric>
                <div className={"ms-Grid"}>
                    <Greeting name={sessionStore.user.name} />
                    <BoxRequest />
                </div>
            </Fabric>
        )
    }
}

export default App
