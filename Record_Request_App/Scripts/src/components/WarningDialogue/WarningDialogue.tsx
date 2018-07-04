import * as React from "react"
import {
    Dialog
} from "office-ui-fabric-react"
import { RequestState } from "../../stores/RequestStore/RequestState";
import { observer } from "mobx-react"

export interface IWarningDialog {
    requestState: RequestState
}


// ----------------------------------------------

export const MsgBar = observer((props: IWarningDialog) => {
    return (
        <Dialog>

        {props.requestState.msgBarMessage}
        </Dialog>
    )
})
