import * as React from "react"
import {
    MessageBar,
    MessageBarType,
    MessageBarButton,
} from "office-ui-fabric-react"
import { observer } from "mobx-react"

export interface IWarningBar {
    messageBarType: MessageBarType
    clearMessage(): void
    message: string
}

// ----------------------------------------------

export const MsgBar = observer((props: IWarningBar) => {
    return (
        <MessageBar
            messageBarType={props.messageBarType}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
            actions={
                    <MessageBarButton
                        onClick={() => (props.clearMessage())}
                    >
                        OK
                    </MessageBarButton>             
            }
        >
        {props.message}
        </MessageBar>
    )
})
