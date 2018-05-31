import * as React from 'react'
import { PrimaryButton, ThemeSettingName } from 'office-ui-fabric-react'
import { initializeIcons } from '@uifabric/icons'
import {
  IFolderAndBox,
  ModalTypes,
  IBoxData,
  IRequestObject,
  CheckoutTypes,
} from '../models/'
import {
  AppStyles,
  DepartmentDropdown,
  WarningModal,
  SubmitModal,
  CreateFolderModal,
  BoxList,
  FolderView,
  RequestCart,
  Greeting,
} from '.'
import { ISubmitModal } from './SubmitModal'
import { DataService } from '../services/DataService'

interface IAppState {
  selectedItems: Map<number, IFolderAndBox>
  selectedDep: number
  selectedBox: IBoxData | undefined
  isChecked: boolean
  modal: ModalTypes
  request: Map<number, IRequestObject>
  deliveryInstructions: string
  requestTypeToggle: boolean
  deliveryPriorityToggle: boolean
  folderNameVal: string
  folderNameError: string
  fmsData
}

// Enables microsoft ui icons to appear
initializeIcons()

export class App extends React.Component<
  { user; boxData; folderData; dataService: DataService },
  IAppState
> {
  // checks if box is in the cart.  if adding parent box of selected folders, remove folders and add parent box
  boxData = this.props.boxData
  fmsData = async () => await this.props.dataService.getAll()
  folderData = this.props.folderData
  state = {
    selectedItems: new Map(),
    selectedDep: 0,
    selectedBox: undefined,
    isChecked: true,
    modal: undefined,
    request: new Map(),
    requestTypeToggle: false,
    deliveryPriorityToggle: false,
    deliveryInstructions: '',
    folderNameVal: '',
    folderNameError: '',
    fmsData: undefined,
  }
  init = async () => {
    const data = await this.props.dataService.getAll()
    this.setState({ fmsData: data })
  }
  async componentWillMount() {
    await this.init()
  }
  // checks if this box has folders carted; if so, remove the folders and add the box
  boxInCart(boxNum: number): boolean {
    if (this.state.selectedItems.has(boxNum)) {
      const x = this.state.selectedItems.values()
      for (let i = 0; i < this.state.selectedItems.size; i++) {
        const y = x.next().value
        if (y.BoxID === boxNum) {
          this.state.selectedItems.delete(y.FolderIdBarCode)
        }
      }
      return true
    } else {
      return false
    }
  }

  // function that removes all carted folders and adds their parent box if all folders were carted
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
        this.state.selectedItems.set(boxNum, this.state.selectedBox)
      }
    }

    return allFoldersAdded
  }

  // function used to change the selected department via the dropdown menu
  changeSelectedDep = (val: number) => {
    this.setState({
      selectedDep: val,
    })
  }

  // determineCheckoutType =() => {
  //   const depBoxList = this.getFilteredData()
  //   let checkoutStatus: CheckoutTypes = CheckoutTypes.none
  //   // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  //   checkoutStatus === CheckoutTypes.none ? console.log('+ Add Box to Checkout') : checkoutStatus === CheckoutTypes.depPossession ? console.log('Box In Your Possession') : checkoutStatus === CheckoutTypes.notAvailable ? console.log('Item Currently Unavailable') : console.log('brilliant, you broke it...')

  //   depBoxList.map(box => box.Location.forEach(location => (location.charAt(0) === 'L' ? console.log(true) : console.log(false))))

  // }

  onFolderCreateSubmit = ({ box }) => {
    this.folderData.push({
      BoxID: this.state.selectedBox.BoxIdBarCode,
      FolderName: this.state.folderNameVal,
      Folder_Description: '',
      FolderIdBarCode: this.folderData.length + 1,
    })
    this.setState({
      modal: ModalTypes.none,
      folderNameVal: '',
    })
  }

  onNameChange = value => {
    this.onNameError(value)
    this.setState({
      folderNameVal: value,
    })
  }

  onNameError = value => {
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
        folderNameError: 'A folder already exists with that name in this box.',
      })
    } else {
      this.setState({
        folderNameError: '',
      })
    }
  }

  addItemToCheckout = (e: IFolderAndBox) => {
    this.setState({
      selectedItems: this.state.selectedItems.set(
        e.BoxIdBarCode | e.FolderIdBarCode,
        e
      ),
    })
    this.onAllFoldersAdded(this.state.selectedBox.BoxIdBarCode)
  }

  removeItemFromCheckout = (r: number) => {
    const newMap = this.state.selectedItems
    newMap.delete(r)
    this.setState({
      selectedItems: newMap,
    })
  }

  removeAllItemsFromCheckout = () => {
    this.setState({
      selectedItems: new Map(),
    })
  }

  toggleModal = (modalName: ModalTypes) => this.setState({ modal: modalName })

  // filter boxData to get the boxes within in the currently selected department
  getFilteredData = () =>
    this.boxData.filter((x, i) => x.DepId === this.state.selectedDep)

  getFilteredFolders = () =>
    this.folderData.filter(
      (x, i) => x.BoxID === this.state.selectedBox.BoxIdBarCode
    )

  getParentBoxInfo = (boxId: number) => {
    return this.boxData.filter(x => x.BoxIdBarCode === boxId)[0]
  }

  updateDeliveryInstructions = value => {
    this.setState({
      deliveryInstructions: value,
    })
  }

  updateRequestType = () => {
    this.setState({
      requestTypeToggle: !this.state.requestTypeToggle,
    })
  }

  updateDeliveryPriority = () => {
    this.setState({
      deliveryPriorityToggle: !this.state.deliveryPriorityToggle,
    })
  }

  // This function creates the final request objects with the data necessary to communicate with the rock.
  addValues = (key: number, setVals: Map<number, IFolderAndBox>) => {
    const additionalVals = setVals.get(key)
    if (additionalVals.BoxIdBarCode === undefined) {
      additionalVals['type'] = 'Folder'
      additionalVals['folderNumber'] = additionalVals.FolderIdBarCode
      additionalVals['parentBox'] = additionalVals.BoxID
      additionalVals['requestingDepartment'] = this.getParentBoxInfo(
        additionalVals.BoxID
      ).DepId
      additionalVals['location'] = this.getParentBoxInfo(
        additionalVals.BoxID
      ).Location
    } else {
      additionalVals['type'] = 'Box'
      additionalVals['boxNumber'] = additionalVals.BoxIdBarCode
      additionalVals['requestingDepartment'] = additionalVals.DepId
      additionalVals['location'] = additionalVals.Location
    }
    delete additionalVals.key
    additionalVals['requestType'] = this.state.requestTypeToggle
      ? 'Permament'
      : 'Temporary'
    additionalVals['deliveryPriority'] = this.state.deliveryPriorityToggle
      ? 'Urgent'
      : 'Standard'
    additionalVals['requestStatus'] = 'New'
    additionalVals['deliveryInstructions'] = this.state.deliveryInstructions

    return additionalVals
  }

  submitRequest = (items: Map<number, IFolderAndBox>) => {
    const newRequest = new Map() // make a new map
    const iterator1 = items.keys() // create a list of all the different keys in selectedItems map
    for (let i = 0; i < items.size; i++) {
      // loop through as many times as there are items in selectedItems map
      const mrKey = iterator1.next().value // start with the first key and move on to the next key when loop iterates next
      newRequest.set(i, this.addValues(mrKey, items)) // set the values of new map to the modified values from addVal function
    }
    this.setState({
      request: newRequest,
    })
    this.state.selectedItems.clear()
    this.toggleModal(ModalTypes.none)
  }

  finalRequest = newRequest => {
    this.setState({
      request: newRequest,
    })
  }

  render() {
    // this.fmsData().then(console.log)
    // console.log(this.fmsData())

    window['appState'] = this.state
    window['boxes'] = this.getFilteredData()
    return (
      <div>
        <Greeting
          name={this.props.user.name}
          departmentid={this.props.user.departments}
        />

        <div style={AppStyles.department}>
          <DepartmentDropdown
            mockUser={this.props.user}
            mockData={this.boxData}
            changeSelectedDep={this.changeSelectedDep}
          />

          {this.state.modal === ModalTypes.submit && (
            <SubmitModal
              close={() => this.toggleModal(ModalTypes.none)}
              updateInstructions={e => this.updateDeliveryInstructions(e)}
              priority={this.updateDeliveryPriority}
              requestType={this.updateRequestType}
              submit={e => this.submitRequest(e)}
              selectedItems={this.state.selectedItems}
              deliveryInstructions={this.state.deliveryInstructions}
            />
          )}
          {this.state.modal === ModalTypes.create && (
            <CreateFolderModal
              closeModal={() => this.toggleModal(ModalTypes.none)}
              selectedBox={this.state.selectedBox.BoxIdBarCode}
              folderNameError={this.state.folderNameError}
              folderNameVal={this.state.folderNameVal}
              onNameChange={value => this.onNameChange(value)}
              submitFolder={box => this.onFolderCreateSubmit(box)}
            />
          )}
        </div>

        {/* Conditional Rendering.  BoxList and RequestCart won't render until selectedDep != 0 */}

        {!!this.state.selectedDep && (
          <div style={AppStyles.wrapper}>
            <div style={AppStyles.leftSection}>
              <BoxList
                boxData={this.getFilteredData()}
                addBox={e => this.addItemToCheckout(e)}
                openModal={(i: IBoxData) => {
                  this.setState({
                    selectedBox: i,
                  })
                }}
                boxInCart={(boxNum: number) => this.boxInCart(boxNum)}
              />
            </div>
            <div style={AppStyles.centerSection}>
              {this.state.selectedBox === undefined && (
                <div style={AppStyles.selectBoxStyle} className={'ms-font-xl'}>
                  <p>Click on a box to view its folders</p>
                </div>
              )}
              {this.state.selectedBox !== undefined && (
                <FolderView
                  openModal={i => this.toggleModal(ModalTypes.create)}
                  closeModal={() => this.toggleModal(ModalTypes.none)}
                  filteredData={this.getFilteredFolders()}
                  selectedBox={this.state.selectedBox}
                  addFolder={e => this.addItemToCheckout(e)}
                  toggleCreateModal={() => this.toggleModal(ModalTypes.create)}
                  boxInCart={(boxNum: number) => this.boxInCart(boxNum)}
                />
              )}
            </div>
            {this.state.selectedItems.size > 0 && (
              <div style={AppStyles.rightSection}>
                <RequestCart
                  selectedItems={this.state.selectedItems}
                  type={this.state.isChecked ? 'Box' : 'Folder'}
                  removeItemFromCheckout={r => this.removeItemFromCheckout(r)}
                  toggleModal={this.toggleModal}
                />
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}
