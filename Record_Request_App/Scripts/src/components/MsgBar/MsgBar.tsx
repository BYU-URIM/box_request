import * as React from "react"
import { MessageBar, MessageBarButton } from "office-ui-fabric-react"
import { observer } from "mobx-react"
import { Message } from "../../stores"

export interface IWarningBar {
    clearMessage(): void
    message: Message
}

export const MsgBar = observer((props: IWarningBar) => {
    return (
        <MessageBar
            messageBarType={props.message.type}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
            onDismiss={props.clearMessage}
            actions={
                <>
                    {props.message.buttons.map(_button => (
                        <MessageBarButton key={_button}>
                            {_button}
                        </MessageBarButton>
                    ))}
                </>
            }
        >
            {props.message.text}
        </MessageBar>
    )
})

export default MsgBar
