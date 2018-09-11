import * as React from "react"
import {
    DepartmentDropdown,
    SubmitModal,
    CreateFolderModal,
    BoxList,
    FolderList,
    Checkout,
    MsgBar,
    CreateBoxModal,
} from "../../components"
import { inject, observer } from "mobx-react"
import { ModalTypes } from "../../models"
import { Modal } from "office-ui-fabric-react/lib/Modal"
import { UIStore, CheckoutStore, User } from "../../stores"
import "./styles.scss"

@inject("uiStore", "checkoutStore", "userStore")
@observer
export class BoxRequest extends React.Component<{
    checkoutStore?: CheckoutStore
    userStore?: User
    uiStore?: UIStore
}> {
    render() {
        const { uiStore, userStore, checkoutStore } = this.props
        return (
            <>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm12"}>
                        {uiStore.message && (
                            <MsgBar
                                clearMessage={uiStore.clearMessage}
                                message={uiStore.messageInfo}
                            />
                        )}
                    </div>
                </div>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm4 ms-smPush4"}>
                        <DepartmentDropdown
                            handleChanged={(id: number) =>
                                (userStore.selectedDepartment = userStore.departments.find(
                                    _dep => _dep.id === id
                                ))
                            }
                            options={userStore.userDepartmentsAsOptions}
                            dropdownInfo={uiStore.dropdownInfo}
                            initializeBoxForm={uiStore.initializeBoxForm}
                        />
                    </div>
                </div>
                <div className={"ms-Grid-row box-request-row"}>
                    <div>
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
                        <div>
                            <div className={"ms-Grid-col ms-sm1"} />
                            <BoxList
                                initializeFolderForm={
                                    uiStore.initializeFolderForm
                                }
                                dept={userStore.selectedDepartment}
                            />

                            <FolderList
                                emptyMessage={
                                    userStore.selectedDepartment &&
                                    "Click on a box to view its folders"
                                }
                                box={userStore.selectedBox}
                            />
                            <Checkout
                                dialogMessage={uiStore.dialogMessage}
                                checkoutStore={checkoutStore}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
