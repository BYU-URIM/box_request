import * as React from "react"
import {
    TextField,
    PrimaryButton,
    IconButton,
    IconType,
} from "office-ui-fabric-react"
import "./styles.scss"
import { observer } from "mobx-react"
import { FolderForm } from "../../stores"
import { ModalTypes } from "../../models"

export interface ICreateFolderModalProps {
    modal: ModalTypes
    box: number
    createFolder(): void
    folderForm: FolderForm
    close(): void
}

export const CreateFolderModal = observer((props: ICreateFolderModalProps) => {
    return (
        <div className={"createFolder-wrapper"}>
            <div className="createFolder-header">
                <label className={"ms-font-xl"}>
                    Create Folder - Box B{props.box}
                </label>
                <IconButton
                    text={"Cancel"}
                    onClick={props.close}
                    iconProps={{
                        iconName: "cancel",
                        iconType: IconType.default,
                    }}
                />
            </div>
            <div className="createFolder-body">
                <TextField
                    type={"text"}
                    description={"Warning: You cannot change this later."}
                    value={props.folderForm.folderName}
                    onChanged={val => (props.folderForm.folderName = val)}
                    required={true}
                    autoFocus={true}
                    label={"Folder Name"}
                    underlined={true}
                    placeholder={"i.e. Jared"}
                    errorMessage={props.folderForm.errorMessage}
                />
            </div>
            <div className={"createFolder-footer"}>
                <PrimaryButton
                    text={"Create and Request Folder"}
                    onClick={props.createFolder}
                    disabled={
                        !props.folderForm.folderName ||
                        !props.folderForm.inputIsValid
                    }
                />
            </div>
        </div>
    )
})

export default CreateFolderModal
