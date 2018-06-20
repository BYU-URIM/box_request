import * as React from "react"
import { initializeIcons } from "@uifabric/icons"
import "./styles.scss"
import { Fabric, PrimaryButton } from "office-ui-fabric-react"
import { BoxRequest } from "../BoxRequest/BoxRequest"
import { SessionStore } from "../../stores/SessionStore/SessionStore"
import { inject, observer } from "mobx-react"
import { BoxCreator } from "../BoxCreator/BoxCreator"
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
                        name={this.sessionStore.currentUser.name}
                        departmentid={this.sessionStore.currentUser.departments}
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
