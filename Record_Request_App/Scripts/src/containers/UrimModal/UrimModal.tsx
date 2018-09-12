import * as React from "react"
import Modal from "office-ui-fabric-react/lib/Modal"
import { inject, observer } from "mobx-react"
import { ModalTypes } from "../../models"
import { User, UIStore } from "../../stores"
import {
    SubmitModal,
    CreateFolderModal,
    CreateBoxModal,
} from "../../components"

@inject("uiStore", "userStore")
@observer
export class UrimModal extends React.Component<{
    userStore?: User
    uiStore?: UIStore
}> {
    render() {
        const { uiStore, userStore } = this.props

        return (
            <div className={"ms-Grid-row urimModal-wrapper"}>
                <Modal
                    isOpen={uiStore.modal !== ModalTypes.none}
                    onDismiss={uiStore.clearModal}
                    isBlocking={false}
                    isDarkOverlay={false}
                >
                    {uiStore.modal === ModalTypes.submit && (
                        <SubmitModal
                            submit={uiStore.submitRequest}
                            modal={uiStore.modal}
                            requestForm={uiStore.requestForm}
                            close={uiStore.clearModal}
                        />
                    )}
                    {uiStore.modal === ModalTypes.folder && (
                        <CreateFolderModal
                            modal={uiStore.modal}
                            close={uiStore.clearModal}
                            box={userStore.selectedBox.BoxId}
                            folderForm={uiStore.folderForm}
                            createFolder={() => uiStore.createFolder()}
                        />
                    )}
                    {uiStore.modal === ModalTypes.box && (
                        <CreateBoxModal name={"testing"} />
                    )}
                </Modal>
            </div>
        )
    }
}
