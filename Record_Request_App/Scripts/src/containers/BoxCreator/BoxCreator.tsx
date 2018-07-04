import * as React from "react"
import "./styles.scss"
import { inject, observer } from "mobx-react"
import { RecordTransferRequest } from "../../components"

@inject("rootStore")
@observer
export class BoxCreator extends React.Component<any, any> {
    render() {
        return (
            <div className={"boxcreator-wrapper"}>
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <RecordTransferRequest
                            creatorStore={this.props.rootStore.creatorStore}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
