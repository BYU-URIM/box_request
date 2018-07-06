import * as React from "react"
import {
    Dialog,
    DialogFooter,
    PrimaryButton,
    DefaultButton,
    DialogType,
} from "office-ui-fabric-react"
import { RequestState } from "../../stores/RequestStore/RequestState"
import { observer } from "mobx-react"

export interface IWarningDialog {
    requestState: RequestState
}

export const WarningDialog = observer((props: IWarningDialog) => {
    return (
        <Dialog
            hidden={props.requestState.hiddenDialog}
            onDismiss={() =>
                props.requestState.removeParentBox(props.requestState.box)
            }
            dialogContentProps={{
                type: DialogType.normal,
                title: "Box or Folders",
                subText: `${props.requestState.dialogMessage}`,
            }}
            modalProps={{
                titleAriaId: "myLabelId",
                subtitleAriaId: "mySubTextId",
                isBlocking: false,
                containerClassName: "ms-dialogMainOverride",
            }}
        >
            {
                null /** You can also include null values as the result of conditionals */
            }
            <DialogFooter>
                <PrimaryButton
                    onClick={() =>
                        props.requestState.removeChildFolders(
                            props.requestState.box
                        )
                    }
                    text="Yes"
                />
                <DefaultButton
                    onClick={() =>
                        props.requestState.removeParentBox(
                            props.requestState.box
                        )
                    }
                    text="No"
                />
            </DialogFooter>
        </Dialog>
    )
})
