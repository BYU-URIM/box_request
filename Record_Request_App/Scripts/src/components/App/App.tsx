import * as React from "react"
import { initializeIcons } from "@uifabric/icons"
import {
    DepartmentDropdown,
    Greeting,
    RequestBuilder,
} from "../"
import "./styles.scss"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../stores/RootStore"

initializeIcons()
@inject("rootStore")
@observer
export class App extends React.Component<any, any> {
    componentWillMount() {
        this.rootStore = this.props.rootStore
    }
    rootStore: RootStore

    render() {
        window["boxes"] = this.rootStore.filteredBoxes
        const { currentUser } = this.rootStore

        return (
            <div className={"ms-Grid"}>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm4 ms-smPush8"}>
                        <Greeting
                            name={currentUser.name}
                            departmentid={currentUser.departments}
                        />
                    </div>
                </div>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm4 ms-smPush4"}>
                        <DepartmentDropdown
                            mockUser={this.rootStore.currentUser}
                            mockData={this.rootStore.boxes}
                            changeSelectedDep={this.rootStore.chooseDepartment}
                        />
                    </div>
                </div>

                <div className={"ms-Grid-row"}>
                    <RequestBuilder
                        selectedItems={this.rootStore.selectedItems}
                        selectedDep={this.rootStore.selectedDepartment}
                        selectedBox={this.rootStore.selectedBox}
                        modal={this.rootStore.modal}
                        checkoutCart={this.rootStore.checkoutCart}
                        deliveryInstructions={
                            this.rootStore.deliveryInstructions
                        }
                        requestIsUrgent={this.rootStore.requestIsUrgent}
                        folderNameVal={this.rootStore.folderNameVal}
                        folderNameError={this.rootStore.folderNameError}
                        setModalType={this.rootStore.setModalType}
                        updateDeliveryInstructions={
                            this.rootStore.updateDeliveryInstructions
                        }
                        updateIsUrgent={this.rootStore.updateIsUrgent}
                        updateIsPermament={this.rootStore.updateIsPermanent}
                        submitRequest={this.rootStore.submitRequest}
                        onNameChange={this.rootStore.onNameChange}
                        createFolder={this.rootStore.createFolder}
                        filteredBoxData={this.rootStore.filteredBoxes}
                        addItemToCheckout={this.rootStore.addItemToCheckout}
                        // Should only need one of these
                        itemInCheckout={this.rootStore.itemInCheckout}
                        boxInCheckout={this.rootStore.selectedBoxInCheckout}
                        filteredFolderData={
                            this.rootStore.selectedBox &&
                            this.rootStore.filteredFolders
                        }
                        removeItemFromCheckout={
                            this.rootStore.removeItemFromCheckout
                        }
                        determineCheckoutType={
                            this.rootStore.determineCheckoutType
                        }
                        addFolder={this.rootStore.addItemToCheckout}
                        selectBox={this.rootStore.setSelectedBox}
                    />
                </div>
            </div>
        )
    }
}