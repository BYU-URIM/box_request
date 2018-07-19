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
import { ModalTypes, IFolderOrBox } from "../../models"
import Modal from "office-ui-fabric-react/lib/Modal"
import { RequestState, RequestStore } from "../../stores"

@inject("requestStore", "requestState")
@observer
export class BoxRequest extends React.Component<{
    requestStore?: RequestStore
    requestState?: RequestState
}> {
    render() {
        const { requestStore, requestState } = this.props
        return (
            <>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm12"}>
                        {requestState.msgBarMessage.length > 0 && (
                            <MsgBar
                                messageBarType={requestState.mBarType}
                                clearMessage={() => requestState.clearMessage()}
                                message={requestState.msgBarMessage}
                            />
                        )}
                        {requestState.dialogMessage.length > 0 && (
                            <WarningDialog
                                removeChildFolders={
                                    requestState.removeChildFolders
                                }
                                removeParentBox={requestState.removeParentBox}
                                dialogMessage={requestState.dialogMessage}
                            />
                        )}
                    </div>
                </div>
                <div className={"ms-Grid-row"}>
                    <div className={requestState.dropdownInfo.style}>
                        <DepartmentDropdown
                            handleChanged={(department: number) =>
                                (requestStore.sessionStore.department.id = department)
                            }
                            options={
                                requestStore.sessionStore
                                    .userDepartmentsAsOptions
                            }
                            dropdownInfo={requestState.dropdownInfo}
                        />
                    </div>
                </div>
                <div className={"ms-Grid-row box-request-row"}>
                    <div>
                        <Modal
                            isOpen={requestState.modal !== ModalTypes.none}
                            onDismiss={() =>
                                (requestState.modal = ModalTypes.none)
                            }
                            isBlocking={false}
                            isDarkOverlay={false}
                        >
                            {requestState.modal === ModalTypes.submit && (
                                <SubmitModal
                                    submit={requestStore.submitRequest}
                                    modal={requestState.modal}
                                    requestForm={requestStore.requestForm}
                                />
                            )}
                            {requestState.modal === ModalTypes.create && (
                                <CreateFolderModal
                                    modal={requestState.modal}
                                    box={requestState.box.BoxIdBarCode}
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
                                checkoutStatus={item =>
                                    requestStore.determineItemStatus(item)
                                }
                                classNames={
                                    "ms-Grid-col ms-sm4 scroll-container"
                                }
                                selectedBoxId={
                                    requestState.box
                                        ? requestState.box.BoxIdBarCode
                                        : 0
                                }
                                requestState={requestState}
                                addToCart={item => requestState.addToCart(item)}
                                box={requestState.box}
                                dialogMessage={requestState.dialogMessage}
                                sortBoxes={requestState.sortBoxes}
                                cartContains={item =>
                                    requestState.cartContains(item)
                                }
                                canAddItemToCart={item =>
                                    requestStore.canAddItemToCart(item)
                                }
                            />

                            <FolderView
                                canAddItem={(item: IFolderOrBox) =>
                                    requestStore.canAddItemToCart(item)
                                }
                                cart={requestState.cart}
                                checkoutStatus={item =>
                                    requestStore.determineItemStatus(item)
                                }
                                emptyMessage={
                                    requestStore.sessionStore.department !==
                                        undefined &&
                                    "Click on a box to view its folders"
                                }
                                classNames={"ms-Grid-col ms-sm2"}
                                addToCart={requestState.addToCart}
                                box={requestState.box}
                                folders={requestState.folders}
                                modal={requestState.modal}
                            />
                            <div className={"ms-Grid-col ms-sm1"} />

                            <Checkout
                                classNames={"ms-Grid-col ms-sm3"}
                                initializeRequestForm={
                                    requestStore.initializeRequestForm
                                }
                                cart={requestState.cart}
                                dialogMessage={requestState.dialogMessage}
                                removeFromCart={item =>
                                    requestState.removeFromCart(item)
                                }
                            />
                            <div className={"ms-Grid-col ms-sm1"} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
