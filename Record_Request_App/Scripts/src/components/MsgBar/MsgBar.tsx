import * as React from "react"
import {
    MessageBar,
    MessageBarType,
    MessageBarButton,
} from "office-ui-fabric-react"
import { RequestState } from "../../stores"
import { observer } from "mobx-react"

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
                    onClick={() => props.requestState.clearMessage()}
                >
                    OK
                </MessageBarButton>
            }
        >
            {props.requestState.msgBarMessage}
        </MessageBar>
    )
})
