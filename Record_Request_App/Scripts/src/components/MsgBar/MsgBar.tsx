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
                    <MessageBarButton
                        onClick={() => (props.requestState.clearMessage())}
                    >
                        OK
                    </MessageBarButton>             
            }
        >
        {props.requestState.msgBarMessage}
        </MessageBar>
    )
})
