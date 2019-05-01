import * as React from "react"
import { RootStore } from "../../stores"
import { inject, observer } from "mobx-react"
import { RecordsRequest, FormModal, Message } from ".."
import { Greeting } from "../../components"
import "./styles.scss"

@inject("rootStore")
@observer
export class App extends React.Component<{ rootStore?: RootStore }> {
    render() {
        return (
            <div className={"ms-Grid"}>
                <Greeting />
                <RecordsRequest />
                <Message />
                <FormModal />
            </div>
        )
    }
}
