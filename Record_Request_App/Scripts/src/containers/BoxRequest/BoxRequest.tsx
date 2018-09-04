import * as React from "react"
import {
    DepartmentDropdown,
    SubmitModal,
    CreateFolderModal,
    BoxList,
    FolderList,
    Checkout,
    MsgBar,
} from "../../components"
import { inject, observer } from "mobx-react"
import { ModalTypes } from "../../models"
import { Modal } from "office-ui-fabric-react/lib/Modal"
import { UIStore, CheckoutStore, DataStore } from "../../stores"
import "./styles.scss"

@inject("uiStore", "checkoutStore", "dataStore")
@observer
export class BoxRequest extends React.Component<{
    checkoutStore?: CheckoutStore
    dataStore?: DataStore
    uiStore?: UIStore
}> {
    render() {
        const { uiStore, dataStore, checkoutStore } = this.props
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
                            {uiStore.modal === ModalTypes.create && (
                                <CreateFolderModal
                                    modal={uiStore.modal}
                                    close={uiStore.clearModal}
                                    box={dataStore.selectedBox.BoxId}
                                    folderForm={uiStore.folderForm}
                                    createFolder={() => uiStore.createFolder()}
                                />
                            )}
                        </Modal>
                        <div>
                            <div className={"ms-Grid-col ms-sm1"} />
                            <BoxList
                                initializeFolderForm={
                                    uiStore.initializeFolderForm
                                }
                                ds={dataStore}
                            />

                            <FolderList
                                emptyMessage={
                                    dataStore.selectedDepartment &&
                                    "Click on a box to view its folders"
                                }
                                ds={dataStore}
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
