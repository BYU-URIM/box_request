import * as React from "react"
// tslint:disable-next-line:no-implicit-dependencies
import { initializeIcons } from "@uifabric/icons"
import "./styles.scss"
import { Fabric } from "office-ui-fabric-react"
import { SessionStore } from "../../stores"
import { inject, observer } from "mobx-react"
import { BoxCreator, BoxRequest } from ".."
import { Greeting, AppSelector } from "../../components"

initializeIcons()
@inject("rootStore")
@observer
export class App extends React.Component<any, any> {
    sessionStore: SessionStore
    componentWillMount() {
        this.sessionStore = this.props.rootStore.sessionStore
    }
    render() {
        return (
            <Fabric>
                <div className={"ms-Grid"}>
                    <Greeting
                        name={this.sessionStore.user.name}
                        switchApp={this.sessionStore.switchApp}
                    />
                    <AppSelector switchApp={this.sessionStore.switchApp} />
                    {this.sessionStore.appMode === "BoxRequest" && (
                        <BoxRequest />
                    )}
                    {this.sessionStore.appMode === "BoxCreate" && (
                        <BoxCreator />
                    )}
                </div>
            </Fabric>
        )
    }
}
