import * as React from "react"
import { UIStore, User } from "../../stores"
import { inject, observer } from "mobx-react"
import "./styles.scss"
import { Spinner, SpinnerSize } from "office-ui-fabric-react"

@observer
export class LoadingLockout extends React.Component {
    render() {
        return (
            <div className={"loadingLockout-wrapper"}>
                <Spinner size={SpinnerSize.large} />
            </div>
        )
    }
}
