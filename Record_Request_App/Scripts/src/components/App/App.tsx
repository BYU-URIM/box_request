import * as React from "react"
import { PrimaryButton, ThemeSettingName } from "office-ui-fabric-react"
import { initializeIcons } from "@uifabric/icons"
import {
    IFolderAndBox,
    ModalTypes,
    IRequestObject,
    CheckoutTypes,
} from "../../models/"
import {
    DepartmentDropdown,
    SubmitModal,
    CreateFolderModal,
    BoxList,
    FolderView,
    Checkout,
    Greeting,
    RequestBuilder,
} from "../"
import { DataService } from "../../services/DataService"
import { IFolderDataObj, IBoxDataObj } from "../../models/MockData"

interface IAppState {
    isChecked: boolean
    request: Map<number, IRequestObject>
    deliveryInstructions: string
    requestTypeToggle: boolean
    deliveryPriorityToggle: boolean
    folderNameVal: string
    folderNameError: string
}
import "./styles.scss"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../stores/RootStore"

// Enables microsoft ui icons to appear
initializeIcons()
@inject("rootStore")
@observer
export class App extends React.Component<any, any> {
    componentWillMount() {
        this.rootStore = this.props.rootStore
    }
    rootStore: RootStore
    // checks if box is in the checkout.  if adding parent box of selected folders, remove folders and add parent box

    //   fmsData = async () => await this.props.dataService.getAll()
    state = {
        isChecked: true,
        request: new Map<number, IRequestObject>(),
        requestTypeToggle: false,
        deliveryPriorityToggle: false,
        deliveryInstructions: "",
        folderNameVal: "",
        folderNameError: "",
    }
    //   init = async () => {
    //     const data = await this.props.dataService.getAll()
    //     this.setState({ fmsData: data })
    //   }
    //   async componentWillMount() {
    //     await this.init()
    //   }
    // checks if this box has folders checkouted; if so, remove the folders and add the box
    // itemInCheckout = (itemNum: number): boolean => {
    //     if (this.rootStore.selectedItems.has(itemNum)) {
    //         const x = this.rootStore.selectedItems.values()
    //         const selectedItems = Array.from(
    //             this.rootStore.selectedItems.values()
    //         ).filter(item => {
    //             return item.BoxID !== itemNum
    //         })

    //         for (let i = 0; i < this.rootStore.selectedItems.size; i++) {
    //             const y = x.next().value
    //             if (y.BoxID === itemNum) {
    //                 this.rootStore.selectedItems.delete(y.FolderIdBarCode)
    //             }
    //         }
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    // function that removes all checkouted folders and adds their parent box if all folders were checkouted
    onAllFoldersAdded = (boxNum: number): boolean => {
        const folders = this.rootStore.filteredFolders
        let allFoldersAdded = false
        for (const i of folders) {
            if (!this.rootStore._selectedItems.has(i.FolderIdBarCode)) {
                allFoldersAdded = false
                break
            }
            allFoldersAdded = this.rootStore._selectedItems.has(
                i.FolderIdBarCode
            )
        }
        if (allFoldersAdded) {
            for (const i of folders) {
                this.rootStore._selectedItems.delete(i.FolderIdBarCode)
                this.rootStore._selectedItems.set(boxNum, this.rootStore
                    .selectedBox as IFolderAndBox)
            }
        }
        return allFoldersAdded
    }

    // function used to change the selected department via the dropdown menu

    determineCheckoutType = (item: IFolderAndBox): string => {
        let checkoutStatus: CheckoutTypes = CheckoutTypes.none
        let status = ""

        if (
            item.Location.charAt(0) === "L" ||
            item.BoxID === Number(item.Location)
        ) {
            checkoutStatus = CheckoutTypes.none
            status = "+ Add Item to Checkout"
        } else if (
            Number(item.Location) === this.rootStore.selectedDepartment
        ) {
            checkoutStatus = CheckoutTypes.depPossession
            status = "- In Your Possession"
        } else {
            checkoutStatus = CheckoutTypes.notAvailable
            status = "- Item not available"
        }
        return status
    }

    onFolderCreateSubmit = (): void => {
        this.rootStore.folders.push({
            BoxID: this.rootStore.selectedBox.BoxIdBarCode,
            FolderName: this.state.folderNameVal,
            Folder_Description: "",
            FolderIdBarCode: this.rootStore.folders.length + 1,
            Location: this.rootStore.selectedBox.Location,
        })
        this.setState({
            folderNameVal: "",
        })
        this.rootStore.setModalType(ModalTypes.none)
    }

    onNameChange = (folderNameInput: string): void => {
        this.onNameError(folderNameInput)
        this.setState({
            folderNameVal: folderNameInput,
        })
    }

    onNameError = (value: string): void => {
        if (value.length > 50) {
            this.setState({
                folderNameError: `Length should be less than 50, actual is ${
                    value.length
                }.`,
            })
        } else if (
            this.rootStore.filteredFolders
                .map(x => x.FolderName)
                .find(element => element === value)
        ) {
            this.setState({
                folderNameError:
                    "A folder already exists with that name in this box.",
            })
        } else {
            this.setState({
                folderNameError: "",
            })
        }
    }

    updateDeliveryInstructions = (value: string): void => {
        this.setState({
            deliveryInstructions: value,
        })
    }

    updateRequestType = (): void => {
        this.setState({
            requestTypeToggle: !this.state.requestTypeToggle,
        })
    }

    updateDeliveryPriority = (): void => {
        this.setState({
            deliveryPriorityToggle: !this.state.deliveryPriorityToggle,
        })
    }

    // This function creates the final request objects with the data necessary to communicate with the rock.

    // submitRequest = (items: Map<number, IFolderAndBox>) => {
    //     console.log(Array.from(this.rootStore.selectedItems.values()))
    //     this.setState({ selectedItems: new Map<number, IFolderAndBox>() })
    //     this.rootStore.setModalType(ModalTypes.none)
    // }

    finalRequest = newRequest => {
        this.setState({
            request: newRequest,
        })
    }

    render() {
        window["appState"] = this.state
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
                            mockUser={currentUser}
                            mockData={this.rootStore.boxes}
                            changeSelectedDep={this.rootStore.selectDepartment}
                        />
                    </div>
                </div>

                <div className={"ms-Grid-row"}>
                    <RequestBuilder
                        selectedItems={this.rootStore.selectedItems}
                        selectedDep={this.rootStore.selectedDepartment}
                        selectedBox={this.rootStore.selectedBox}
                        isChecked={this.state.isChecked}
                        modal={this.rootStore.modal}
                        request={this.state.request}
                        deliveryInstructions={this.state.deliveryInstructions}
                        deliveryPriorityToggle={
                            this.state.deliveryPriorityToggle
                        }
                        folderNameVal={this.state.folderNameVal}
                        folderNameError={this.state.folderNameError}
                        toggleModal={this.rootStore.setModalType}
                        updateDeliveryInstructions={
                            this.updateDeliveryInstructions
                        }
                        updateDeliveryPriority={this.updateDeliveryPriority}
                        updateRequestType={this.updateRequestType}
                        submitRequest={this.rootStore.submitRequest}
                        onNameChange={this.onNameChange}
                        onFolderCreateSubmit={this.onFolderCreateSubmit}
                        filteredBoxData={this.rootStore.filteredBoxes}
                        addItemToCheckout={this.rootStore.addItemToCheckout}
                        itemInCheckout={this.rootStore.itemInCheckout}
                        filteredFolderData={
                            this.rootStore.selectedBox &&
                            this.rootStore.filteredFolders
                        }
                        removeItemFromCheckout={
                            this.rootStore.removeItemFromCheckout
                        }
                        determineCheckoutType={this.determineCheckoutType}
                        addFolder={this.rootStore.addItemToCheckout}
                        selectBox={this.rootStore.setSelectedBox}
                        boxInCheckout={this.rootStore.selectedBoxInCheckout}
                    />
                </div>
            </div>
        )
    }
}
