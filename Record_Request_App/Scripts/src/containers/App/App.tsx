import * as React from "react"
import { initializeIcons } from "@uifabric/icons"
import "./styles.scss"
import { Fabric } from "office-ui-fabric-react"
import { SessionStore } from "../../stores"
import { inject, observer } from "mobx-react"
import { BoxCreator, BoxRequest } from ".."
import { Greeting, AppSelector } from "../../components"

initializeIcons()
@inject("sessionStore")
@observer
export class App extends React.Component<{ sessionStore?: SessionStore }> {
    render() {
        const { sessionStore } = this.props
        return (
            <Fabric>
                <div className={"ms-Grid"}>
                    <Greeting
                        name={sessionStore.user.name}
                        switchApp={sessionStore.switchApp}
                    />
                    <AppSelector switchApp={sessionStore.switchApp} />
                    {sessionStore.appMode === "BoxRequest" && <BoxRequest />}
                    {sessionStore.appMode === "BoxCreate" && <BoxCreator />}
                </div>
            </Fabric>
        )
    }
}

export default App
