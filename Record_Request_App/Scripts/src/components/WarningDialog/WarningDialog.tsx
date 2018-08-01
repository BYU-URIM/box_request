import * as React from "react"
import {
    Dialog,
    DialogFooter,
    PrimaryButton,
    DefaultButton,
    DialogType,
} from "office-ui-fabric-react"
import { observer } from "mobx-react"

export interface IWarningDialog {
    dialogMessage: string
    removeParentBox(): void
    removeChildFolders(): void
}

export const WarningDialog = observer((props: IWarningDialog) => {
    return (
        <Dialog
            hidden={false}
            onDismiss={() => props.removeParentBox()}
            dialogContentProps={{
                type: DialogType.normal,
                title: "Box or Folders",
                subText: `${props.dialogMessage}`,
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
                <PrimaryButton onClick={props.removeChildFolders} text="Yes" />
                <DefaultButton onClick={props.removeParentBox} text="No" />
            </DialogFooter>
        </Dialog>
    )
})

export default WarningDialog
