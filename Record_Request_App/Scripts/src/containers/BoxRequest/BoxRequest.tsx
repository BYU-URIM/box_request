import * as React from "react"
import {
    DepartmentDropdown,
    SubmitModal,
    CreateFolderModal,
    BoxList,
    FolderView,
    Checkout,
} from "../../components"
import { WarningBar } from "../../components/WarningBar/WarningBar"
import "./styles.scss"
import { inject, observer } from "mobx-react"
import { IFolderOrBox } from "../../models/StoreModels"
import { ModalTypes } from "../../models"
import Modal from "office-ui-fabric-react/lib/Modal"
import { RequestStore } from "../../stores/RequestStore/RequestStore"
import { MessageBarType } from "office-ui-fabric-react"

@inject("rootStore")
@observer
export class BoxRequest extends React.Component<any, any> {
    render() {
        const requestStore: RequestStore = this.props.rootStore.requestStore
        const { currentUser } = this.props.rootStore.sessionStore

        return (
            <>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm12"}>
                        {requestStore.requestState.message.length > 0 && (
                            <WarningBar
                                type={MessageBarType.warning}
                                requestState={requestStore.requestState}
                            />
                        )}
                    </div>
                </div>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm4 ms-smPush4"}>
                        <DepartmentDropdown
                            mockUser={currentUser}
                            mockData={requestStore.boxes}
                            changeSelectedDep={(department: number) =>
                                (requestStore.requestState.department = department)
                            }
                            title={"Select one of your available departments:"}
                        />
                    </div>
                </div>

                <div className={"ms-Grid-row box-request-row"}>
                    <div>
                        <Modal
                            isOpen={
                                requestStore.requestState.modal !==
                                ModalTypes.none
                            }
                            onDismiss={() =>
                                (requestStore.requestState.modal =
                                    ModalTypes.none)
                            }
                            isBlocking={false}
                            isDarkOverlay={false}
                        >
                            {requestStore.requestState.modal ===
                                ModalTypes.submit && (
                                <SubmitModal
                                    submit={requestStore.submitRequest}
                                    requestState={requestStore.requestState}
                                    requestForm={requestStore.requestForm}
                                />
                            )}
                            {requestStore.requestState.modal ===
                                ModalTypes.create && (
                                <CreateFolderModal
                                    requestState={requestStore.requestState}
                                    folderForm={requestStore.folderForm}
                                    createFolder={requestStore.createFolder}
                                />
                            )}
                        </Modal>
                        <div>
                            <div className={"ms-Grid-col ms-sm1"} />
                            <BoxList
                                cartContains={(item: IFolderOrBox) =>
                                    requestStore.requestState.cartContains(item)
                                }
                                initializeFolderForm={
                                    requestStore.initializeFolderForm
                                }
                                requestState={requestStore.requestState}
                                checkoutStatus={item =>
                                    requestStore.determineCheckoutType(item)
                                }
                                classNames={"ms-Grid-col ms-sm3"}
                                boxes={requestStore.requestState.boxes}
                                selectedBoxId={
                                    requestStore.requestState.box
                                        ? requestStore.requestState.box
                                              .BoxIdBarCode
                                        : 0
                                }
                            />
                            <div className={"ms-Grid-col ms-sm1"} />

                            <FolderView
                                cartContains={(item: IFolderOrBox) =>
                                    requestStore.requestState.cartContains(item)
                                }
                                cart={requestStore.requestState.cart}
                                checkoutStatus={item =>
                                    requestStore.determineCheckoutType(item)
                                }
                                emptyMessage={
                                    requestStore.requestState.department !==
                                        undefined &&
                                    "Click on a box to view its folders"
                                }
                                classNames={"ms-Grid-col ms-sm2"}
                                requestState={requestStore.requestState}
                            />
                            <div className={"ms-Grid-col ms-sm1"} />

                            <Checkout
                                requestState={requestStore.requestState}
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
