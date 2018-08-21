import * as React from "react"
import {
    DepartmentDropdown,
    SubmitModal,
    CreateFolderModal,
    BoxList,
    FolderView,
    Checkout,
    MsgBar,
    WarningDialog,
} from "../../components"

import "./styles.scss"
import { inject, observer } from "mobx-react"
import { ModalTypes } from "../../models"
import { Modal } from "office-ui-fabric-react/lib/Modal"
import { UIStore, CheckoutStore } from "../../stores"
import { DataStore } from "../../stores/DataStore"

@inject("requestStore", "checkoutStore", "dataStore")
@observer
export class BoxRequest extends React.Component<{
    checkoutStore?: CheckoutStore
    dataStore?: DataStore
    requestStore?: UIStore
}> {
    render() {
        const { requestStore, dataStore, checkoutStore } = this.props
        return (
            <>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm12"}>
                        {requestStore.msgBarMessage.length > 0 && (
                            <MsgBar
                                messageBarType={requestStore.mBarType}
                                clearMessage={() => requestStore.clearMessage()}
                                message={requestStore.msgBarMessage}
                            />
                        )}
                        {requestStore.dialogMessage.length > 0 && (
                            <WarningDialog
                                removeChildFolders={
                                    requestStore.removeChildFolders
                                }
                                removeParentBox={requestStore.removeParentBox}
                                dialogMessage={requestStore.dialogMessage}
                            />
                        )}
                    </div>
                </div>
                <div className={"ms-Grid-row"}>
                    <div className={dataStore.dropdownInfo.style}>
                        <DepartmentDropdown
                            handleChanged={(id: number) =>
                                (dataStore.selectedDepartment = dataStore.departments.find(
                                    _dep => _dep.id === id
                                ))
                            }
                            options={dataStore.userDepartmentsAsOptions}
                            dropdownInfo={dataStore.dropdownInfo}
                        />
                    </div>
                </div>
                <div className={"ms-Grid-row box-request-row"}>
                    <div>
                        <Modal
                            isOpen={requestStore.modal !== ModalTypes.none}
                            onDismiss={requestStore.clearModal}
                            isBlocking={false}
                            isDarkOverlay={false}
                        >
                            {requestStore.modal === ModalTypes.submit && (
                                <SubmitModal
                                    submit={requestStore.submitRequest}
                                    modal={requestStore.modal}
                                    requestForm={requestStore.requestForm}
                                    close={requestStore.clearModal}
                                />
                            )}
                            {requestStore.modal === ModalTypes.create && (
                                <CreateFolderModal
                                    modal={requestStore.modal}
                                    close={requestStore.clearModal}
                                    box={dataStore.selectedBox.BoxId}
                                    folderForm={requestStore.folderForm}
                                    createFolder={() =>
                                        requestStore.createFolder()
                                    }
                                />
                            )}
                        </Modal>
                        <div>
                            <div className={"ms-Grid-col ms-sm1"} />
                            <BoxList
                                initializeFolderForm={
                                    requestStore.initializeFolderForm
                                }
                                ds={dataStore}
                            />

                            <FolderView
                                emptyMessage={
                                    dataStore.selectedDepartment &&
                                    "Click on a box to view its folders"
                                }
                                ds={dataStore}
                            />
                            <Checkout
                                dialogMessage={requestStore.dialogMessage}
                                checkoutStore={checkoutStore}
                            />
                            <div className={"ms-Grid-col ms-sm1"} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
