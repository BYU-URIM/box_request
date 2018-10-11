import * as React from "react"
import { observer, inject } from "mobx-react"
import "./styles.scss"
import { Spinner, SpinnerSize } from "office-ui-fabric-react"
import { User } from "../../stores"

@inject("userStore")
@observer
export class Loading extends React.Component<{ userStore?: User }> {
    render() {
        return this.props.userStore.loading ? (
            <div className={"loading-wrapper"}>
                <Spinner size={SpinnerSize.large} />
            </div>
        ) : null
    }
}
