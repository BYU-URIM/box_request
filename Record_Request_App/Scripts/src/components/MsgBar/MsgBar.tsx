import * as React from "react"
import {
    MessageBar, MessageBarType, MessageBarButton
} from "office-ui-fabric-react"
import { RequestState } from "../../stores/RequestStore/RequestState";
import { observer } from "mobx-react"
import { IBox } from "../../models/StoreModels";

export interface IWarningBar {
    requestState: RequestState
}


// ----------------------------------------------

export const MsgBar = observer((props: IWarningBar) => {
    return (
        <MessageBar
            messageBarType={props.requestState.mBarType}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
            actions={
                props.requestState.cart.length === 0 ?
                <div>
                    <MessageBarButton
                        onClick={() => (props.requestState.clearMessage())}
                    >
                        OK
                    </MessageBarButton>
                </div>
                :
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
        {props.requestState.msgBarMessage}
        </MessageBar>
    )
})
