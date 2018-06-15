import * as React from "react"
import { initializeIcons } from "@uifabric/icons"
import { DepartmentDropdown, Greeting, RequestBuilder } from "../"
import "./styles.scss"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../stores/RootStore/RootStore"
import { Fabric } from "office-ui-fabric-react"

initializeIcons()
@inject("rootStore")
@observer
export class App extends React.Component<any, any> {
    rootStore: RootStore

    render() {
        this.rootStore = this.props.rootStore
        window["boxes"] = this.rootStore.requestStore.filteredBoxes
        const { sessionStore, requestStore } = this.rootStore

        return (
            <Fabric>

            <div className={"ms-Grid"}>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm4 ms-smPush8"}>
                        <Greeting
                            name={sessionStore.currentUser.name}
                            departmentid={sessionStore.currentUser.departments}
                        />
                    </div>
                </div>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm4 ms-smPush4"}>
                        <DepartmentDropdown
                            mockUser={sessionStore.currentUser}
                            mockData={requestStore.boxes}
                            changeSelectedDep={requestStore.chooseDepartment}
                        />
                    </div>
                </div>

                <div className={"ms-Grid-row"}>
                    <RequestBuilder
                        folderForm={requestStore.folderForm}
                        selectedItems={requestStore.selectedItems}
                        selectedDep={requestStore.selectedDepartment}
                        selectedBox={requestStore.selectedBox}
                        modal={requestStore.modal}
                        checkoutCart={requestStore.checkoutCart}
                        deliveryInstructions={requestStore.deliveryInstructions}
                        requestIsUrgent={requestStore.requestIsUrgent}
                        setModalType={requestStore.setModalType}
                        updateDeliveryInstructions={
                            requestStore.updateDeliveryInstructions
                        }
                        updateIsUrgent={requestStore.updateIsUrgent}
                        updateIsPermament={requestStore.updateIsPermanent}
                        submitRequest={requestStore.submitRequest}
                        createFolder={requestStore.createFolder}
                        filteredBoxData={requestStore.filteredBoxes}
                        addItemToCheckout={requestStore.addItemToCheckout}
                        // Should only need one of these
                        itemInCheckout={requestStore.itemInCheckout}
                        boxInCheckout={requestStore.selectedBoxInCheckout}
                        filteredFolderData={
                            requestStore.selectedBox &&
                            requestStore.filteredFolders
                        }
                        removeItemFromCheckout={
                            requestStore.removeItemFromCheckout
                        }
                        determineCheckoutType={
                            requestStore.determineCheckoutType
                        }
                        addFolder={requestStore.addItemToCheckout}
                        selectBox={requestStore.setSelectedBox}
                    />
                </div>
            </div>
            </Fabric>
        )
    }
}
