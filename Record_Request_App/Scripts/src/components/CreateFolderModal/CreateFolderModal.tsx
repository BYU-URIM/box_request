import * as React from "react"
import { Modal } from "office-ui-fabric-react/lib/Modal"
import {
    TextField,
    Label,
    PrimaryButton,
    IconButton,
    IconType,
} from "office-ui-fabric-react"
import "./styles.scss"
import { observer } from "mobx-react"
import { FolderForm } from "../../stores/RequestStore/FolderForm"

export interface ICreateFolderModal {
    selectedBox?: number
    closeModal(): void
    submitFolder(): void
    folderForm: FolderForm
}

export const CreateFolderModal = observer((props: ICreateFolderModal) => {
    return (
        <Modal
            isOpen={true}
            onDismiss={props.closeModal}
            isBlocking={false}
            isDarkOverlay={false}
        >
            <div className={"create-modal-wrapper"}>
                <div className="create-modal-header">
                    <label className={"ms-font-xl"}>
                        {" "}
                        Create Folder - Box B{props.selectedBox}{" "}
                    </label>
                    <IconButton
                        text={"Cancel"}
                        onClick={props.closeModal}
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
                <div className={"create-modal-footer"}>
                    <PrimaryButton
                        text={"Create Folder"}
                        onClick={props.submitFolder}
                        disabled={!props.folderForm.inputIsValid}
                    />
                </div>
            </div>
        </Modal>
    )
})
