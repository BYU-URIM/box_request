import * as React from "react"
import {
    TextField,
    PrimaryButton,
    IconButton,
    IconType,
} from "office-ui-fabric-react"
import "./styles.scss"
import { observer } from "mobx-react"
import { RequestState, RequestStore } from "../../stores"
import { ModalTypes } from "../../models"

export interface ICreateFolderModalProps {
    requestState: RequestState
    requestStore: RequestStore
}

export const CreateFolderModal = observer((props: ICreateFolderModalProps) => {
    return (
        <div className={"create-modal-wrapper"}>
            <div className="create-modal-header">
                <label className={"ms-font-xl"}>
                    {" "}
                    Create Folder - Box B{
                        props.requestState.box.BoxIdBarCode
                    }{" "}
                </label>
                <IconButton
                    text={"Cancel"}
                    onClick={() => (props.requestState.modal = ModalTypes.none)}
                    iconProps={{
                        iconName: "cancel",
                        iconType: IconType.default,
                    }}
                />
            </div>
            <div className="create-modal-body">
                <TextField
                    type={"text"}
                    description={"Warning: You cannot change this later."}
                    value={props.requestStore.folderForm.folderName}
                    onChanged={val =>
                        (props.requestStore.folderForm.folderName = val)
                    }
                    required={true}
                    autoFocus={true}
                    label={"Folder Name"}
                    underlined={true}
                    placeholder={"i.e. Jared"}
                    errorMessage={props.requestStore.folderForm.errorMessage}
                />
            </div>
            <div className={"create-modal-footer"}>
                <PrimaryButton
                    text={"Create and Request Folder"}
                    onClick={props.requestStore.createFolder}
                    disabled={
                        !props.requestStore.folderForm.folderName ||
                        !props.requestStore.folderForm.inputIsValid
                    }
                />
            </div>
        </div>
    )
})
