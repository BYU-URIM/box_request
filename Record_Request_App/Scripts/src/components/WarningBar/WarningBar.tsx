import * as React from "react"
import {
    MessageBar, MessageBarType, MessageBarButton
} from "office-ui-fabric-react"
import { RequestState } from "../../stores/RequestStore/RequestState";
import { observer } from "mobx-react"
import { IBox } from "../../models/StoreModels";

export interface IWarningBar {
    type: MessageBarType
    requestState: RequestState
}


// ----------------------------------------------

export const WarningBar = observer((props: IWarningBar) => {
    return (
        <MessageBar
            messageBarType={props.type}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
            actions={
                <div>
                    <MessageBarButton
                        onClick={() => (props.requestState.removeChildFolders(props.requestState.box))}
                    >Yes</MessageBarButton>
                    <MessageBarButton
                        onClick={() => (props.requestState.removeParentBox(props.requestState.box))}
                    >No</MessageBarButton>
                </div>
            }
        >
        {props.requestState.message}
        </MessageBar>
    )
})
