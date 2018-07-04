import * as React from "react"
import {
    MessageBar,
    MessageBarType,
    MessageBarButton,
} from "office-ui-fabric-react"
import { RequestState } from "../../stores"
import { observer } from "mobx-react"

export interface IWarningBarProps {
    type: MessageBarType
    requestState: RequestState
}

export const WarningBar = observer((props: IWarningBarProps) => {
    return (
        <MessageBar
            messageBarType={props.type}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
            actions={
                <div>
                    <MessageBarButton
                        onClick={() => (props.requestState.message = "")}
                    >
                        OK
                    </MessageBarButton>
                </div>
            }
        >
            {props.requestState.message}
        </MessageBar>
    )
})
