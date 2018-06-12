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
    selectedItems: Map<number, IFolderAndBox>
    selectedDep: number
    isChecked: boolean
    request: Map<number, IRequestObject>
    deliveryInstructions: string
    requestTypeToggle: boolean
    deliveryPriorityToggle: boolean
    folderNameVal: string
    folderNameError: string
    fmsData
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
    boxData: Array<IBoxDataObj> = this.props.boxData
    folderData: Array<IFolderDataObj> = this.props.folderData
    //   fmsData = async () => await this.props.dataService.getAll()
    state = {
        selectedItems: new Map<number, IFolderAndBox>(),
        selectedDep: 0,
        isChecked: true,
        request: new Map<number, IRequestObject>(),
        requestTypeToggle: false,
        deliveryPriorityToggle: false,
        deliveryInstructions: "",
        folderNameVal: "",
        folderNameError: "",
        fmsData: undefined,
    }
    //   init = async () => {
    //     const data = await this.props.dataService.getAll()
    //     this.setState({ fmsData: data })
    //   }
    //   async componentWillMount() {
    //     await this.init()
    //   }
    // checks if this box has folders checkouted; if so, remove the folders and add the box
    itemInCheckout = (itemNum: number): boolean => {
        if (this.state.selectedItems.has(itemNum)) {
            const x = this.state.selectedItems.values()
            const selectedItems = Array.from(
                this.state.selectedItems.values()
            ).filter(item => {
                return item.BoxID !== itemNum
            })
            console.log(selectedItems)
            for (let i = 0; i < this.state.selectedItems.size; i++) {
                const y = x.next().value
                if (y.BoxID === itemNum) {
                    this.state.selectedItems.delete(y.FolderIdBarCode)
                }
            }
            return true
        } else {
            return false
        }
    }

    // function that removes all checkouted folders and adds their parent box if all folders were checkouted
    onAllFoldersAdded = (boxNum: number): boolean => {
        const folders = this.getFilteredFolders()
        let allFoldersAdded = false
        for (const i of folders) {
            if (!this.state.selectedItems.has(i.FolderIdBarCode)) {
                allFoldersAdded = false
                break
            }
            allFoldersAdded = this.state.selectedItems.has(i.FolderIdBarCode)
        }
        if (allFoldersAdded) {
            for (const i of folders) {
                this.state.selectedItems.delete(i.FolderIdBarCode)
                this.state.selectedItems.set(boxNum, this.rootStore
                    .selectedBox as IFolderAndBox)
            }
        }
        return allFoldersAdded
    }

    // function used to change the selected department via the dropdown menu
    changeSelectedDep = (val: number): void => {
        this.setState({
            selectedDep: val,
        })
        this.rootStore.setSelectedBox(undefined)
    }

    determineCheckoutType = (item: IFolderAndBox): string => {
        let checkoutStatus: CheckoutTypes = CheckoutTypes.none
        let status = ""

        if (
            item.Location.charAt(0) === "L" ||
            item.BoxID === Number(item.Location)
        ) {
            checkoutStatus = CheckoutTypes.none
            status = "+ Add Item to Checkout"
        } else if (Number(item.Location) === this.state.selectedDep) {
            checkoutStatus = CheckoutTypes.depPossession
            status = "- In Your Possession"
        } else {
            checkoutStatus = CheckoutTypes.notAvailable
            status = "- Item not available"
        }
        return status
    }

    onFolderCreateSubmit = (): void => {
        this.folderData.push({
            BoxID: this.rootStore.selectedBox.BoxIdBarCode,
            FolderName: this.state.folderNameVal,
            Folder_Description: "",
            FolderIdBarCode: this.folderData.length + 1,
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
            this.getFilteredFolders()
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

    addItemToCheckout = (e: IFolderAndBox): void => {
        this.setState({
            selectedItems: this.state.selectedItems.set(
                e.BoxIdBarCode | e.FolderIdBarCode,
                e
            ),
        })
        this.onAllFoldersAdded(this.rootStore.selectedBox.BoxIdBarCode)
    }

    removeItemFromCheckout = (r: number): void => {
        const newMap = this.state.selectedItems
        newMap.delete(r)
        this.setState({
            selectedItems: newMap,
        })
    }

    // filter boxData to get the boxes within in the currently selected department
    getFilteredData = (): Array<IBoxDataObj> =>
        this.boxData.filter((x, i) => x.DepId === this.state.selectedDep)

    getFilteredFolders = (): Array<IFolderDataObj> =>
        this.folderData.filter(
            (x, i) => x.BoxID === this.rootStore.selectedBox.BoxIdBarCode
        )

    getParentBoxInfo = (boxId: number): IBoxDataObj => {
        return this.boxData.filter(x => x.BoxIdBarCode === boxId)[0]
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

    submitRequest = (items: Map<number, IFolderAndBox>) => {
        console.log(Array.from(this.state.selectedItems.values()))
        this.setState({ selectedItems: new Map<number, IFolderAndBox>() })
        this.rootStore.setModalType(ModalTypes.none)
    }

    finalRequest = newRequest => {
        this.setState({
            request: newRequest,
        })
    }

    render() {
        window["appState"] = this.state
        window["boxes"] = this.getFilteredData()

        return (
            <div className={"ms-Grid"}>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm4 ms-smPush8"}>
                        <Greeting
                            name={this.props.user.name}
                            departmentid={this.props.user.departments}
                        />
                    </div>
                </div>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm4 ms-smPush4"}>
                        <DepartmentDropdown
                            mockUser={this.props.user}
                            mockData={this.boxData}
                            changeSelectedDep={this.changeSelectedDep}
                        />
                    </div>
                </div>

                <div className={"ms-Grid-row"}>
                    <RequestBuilder
                        selectedItems={this.state.selectedItems}
                        selectedDep={this.state.selectedDep}
                        selectedBox={this.rootStore.selectedBox}
                        isChecked={this.state.isChecked}
                        modal={this.rootStore.modal}
                        request={this.state.request}
                        deliveryInstructions={this.state.deliveryInstructions}
                        requestTypeToggle={this.state.requestTypeToggle}
                        deliveryPriorityToggle={
                            this.state.deliveryPriorityToggle
                        }
                        folderNameVal={this.state.folderNameVal}
                        folderNameError={this.state.folderNameError}
                        fmsData={this.state.fmsData}
                        toggleModal={this.rootStore.setModalType}
                        updateDeliveryInstructions={
                            this.updateDeliveryInstructions
                        }
                        updateDeliveryPriority={this.updateDeliveryPriority}
                        updateRequestType={this.updateRequestType}
                        submitRequest={this.submitRequest}
                        onNameChange={this.onNameChange}
                        onFolderCreateSubmit={this.onFolderCreateSubmit}
                        filteredBoxData={this.getFilteredData()}
                        addItemToCheckout={this.addItemToCheckout}
                        itemInCheckout={this.itemInCheckout}
                        filteredFolderData={
                            this.rootStore.selectedBox &&
                            this.getFilteredFolders()
                        }
                        removeItemFromCheckout={this.removeItemFromCheckout}
                        determineCheckoutType={this.determineCheckoutType}
                        addFolder={this.addItemToCheckout}
                        folderInCheckout={this.itemInCheckout}
                        selectBox={this.rootStore.setSelectedBox}
                    />
                </div>
            </div>
        )
    }
}
