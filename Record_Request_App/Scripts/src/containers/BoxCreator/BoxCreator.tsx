import * as React from "react"
import "./styles.scss"
import { inject, observer } from "mobx-react"
import { RecordTransferRequest } from "../../components"
import { CreatorStore } from "../../stores"

@inject("creatorStore")
@observer
export class BoxCreator extends React.Component<{
    creatorStore?: CreatorStore
}> {
    render() {
        return (
            <div className={"boxcreator-wrapper"}>
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <RecordTransferRequest
                            creatorStore={this.props.creatorStore}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default BoxCreator
