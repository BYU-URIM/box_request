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

@inject("rootStore")
@observer
// tslint:disable-next-line:no-any
export class BoxRequest extends React.Component<any, any> {
    render() {
        const requestStore: RequestStore = this.props.rootStore.requestStore
        const requestState: RequestState = requestStore.requestState
        return (
            <>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm12"}>
                        {requestState.msgBarMessage.length > 0 && (
                            <MsgBar requestState={requestState} />
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
                                    requestState={requestState}
                                    requestForm={requestStore.requestForm}
                                />
                            )}
                            {requestState.modal === ModalTypes.create && (
                                <CreateFolderModal
                                    requestState={requestState}
                                    requestStore={requestStore}
                                />
                            )}
                        </Modal>
                        <div>
                            <div className={"ms-Grid-col ms-sm1"} />
                            <BoxList
                                initializeFolderForm={
                                    requestStore.initializeFolderForm
                                }
                                requestState={requestState}
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
                                requestState={requestState}
                                classNames={"ms-Grid-col ms-sm3"}
                                initializeRequestForm={
                                    requestStore.initializeRequestForm
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
