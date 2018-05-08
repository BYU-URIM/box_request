import * as React from 'react'
import { PrimaryButton, ThemeSettingName } from 'office-ui-fabric-react/'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'
import { IFolderAndBox, ModalTypes, IBoxData } from '../models/'
import {
  AppStyles,
  DepartmentDropdown,
  BoxFolderToggle,
  WarningModal,
  SubmitModal,
  CreateFolderModal,
  BoxList,
  FolderView,
  RequestCart,
  Greeting
} from '.'

interface IAppState {
  selectedItems: Map<number, IFolderAndBox>
  selectedDep: number
  selectedBox: IBoxData | undefined
  isChecked: boolean
  newFolderNameInput: string
  newFolderDescriptionInput: string
  modal: ModalTypes
}

// Enables microsoft ui icons to appear
initializeIcons()

export class App extends React.Component<
  { user; boxData; folderData },
  IAppState
> {
  boxData = this.props.boxData
  folderData = this.props.folderData
  state = {
    selectedItems: new Map(),
    selectedDep: 0,
    selectedBox: undefined,
    isChecked: true,
    newFolderNameInput: '',
    newFolderDescriptionInput: '',
    modal: undefined
  }

  // function used to change the selected department via the dropdown menu
  changeSelectedDep = (val: number) => {
    this.setState({
      selectedDep: val
    })
  }

  addItemToCheckout = (e: IFolderAndBox) =>
    this.setState({
      selectedItems: this.state.selectedItems.set(
        e.BoxIdBarCode | e.FolderIdBarCode,
        e
      )
    })

  removeItemFromCheckout = (r: number) => {
    const newMap = this.state.selectedItems
    newMap.delete(r)
    this.setState({
      selectedItems: newMap
    })
  }

  removeAllItemsFromCheckout = () => {
    this.setState({
      selectedItems: new Map()
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

  // These two functions work with the text fields in CreateFolderModal.  They let the user type in a folder name and description.
  updateFolderName = (value) => {
    this.setState({
      newFolderNameInput: value
    })
  }

  updateFolderDescription = (value) => {
    this.setState({
      newFolderDescriptionInput: value
    })
  }

  createNewFolder = (e) => {
    this.folderData.push({
      // create a folder with an id 1 greater than the largest folder id
      // parent box depends on which box they selected
      BoxID: this.state.selectedBox.BoxIdBarCode,
      // comes from the values entered by user from text fields
      FolderName: this.state.newFolderNameInput,
      Folder_Description: this.state.newFolderDescriptionInput
    })
    // closes the modal and resets the data so user cannot easily make the same folder twice
    this.setState({
      modal: ModalTypes.none,
      newFolderNameInput: '',
      newFolderDescriptionInput: ''
    })
  }

  // changes the state of the toggled button, there is probably a built in way to do with fabric ui toggle component
  // if toggled while items are in the cart, it empties the cart
  makeToggle = () => {
    this.setState({
      modal: ModalTypes.none,
      isChecked: !this.state.isChecked,
      selectedItems: new Map()
    })
  }

  submitRequest = (selectedItems: Array<IFolderAndBox>) => {
    // let request: Array<IRequestObject>
    // !!this.state.isChecked
    //   ? (request = request.push({
    //       type: 'Boxes',
    //       boxNumber: selectedItems.map((x) => {
    //         x.BoxIdBarCode
    //       }),
    //       requestingDepartment: selectedItems.map((x) => {
    //         x.DepId
    //       }),
    //       parentBox: '',
    //       location: selectedItems.map((x) => {
    //         x.Location
    //       }),
    //       requestType: '',
    //       deliveryPriority: '',
    //       requestStatus: 'New',
    //       deliveryInstructions: ''
    //     }))
    //   : (request = {
    //       type: 'Folders',
    //       folderNumber: selectedItems.map((x) => {
    //         x.FolderIdBarCode
    //       }),
    //       requestingDepartment: '', // coming soon
    //       parentBox: selectedItems.map((x) => {
    //         x.BoxID
    //       }),
    //       location: '', // coming soon
    //       requestType: '',
    //       deliveryPriority: '',
    //       requestStatus: 'New',
    //       deliveryInstructions: ''
    //     })
  }

  render() {
    window['appState'] = this.state
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

          <PrimaryButton
            disabled={!(this.state.selectedItems.size > 0)}
            text="Submit Request"
            onClick={() => this.toggleModal(ModalTypes.submit)}
          />
          {this.state.modal === ModalTypes.warning && (
            <WarningModal
              close={() => this.toggleModal(ModalTypes.none)}
              continue={this.makeToggle}
            />
          )}
          {this.state.modal === ModalTypes.submit && (
            <SubmitModal
              close={() => this.toggleModal(ModalTypes.none)}
              requestType={this.state.isChecked}
              submit={this.submitRequest}
              selectedItems={this.state.selectedItems}
            />
          )}
          {this.state.modal === ModalTypes.create && (
            <CreateFolderModal
              closeModal={() => this.toggleModal(ModalTypes.none)}
              selectedBox={this.state.selectedBox.BoxIdBarCode}
              createNewFolder={(x) => this.createNewFolder(x)}
              updateName={(e) => this.updateFolderName(e)}
              newNameInput={this.state.newFolderNameInput}
              updateDescription={(e) => this.updateFolderDescription(e)}
              newDescriptionInput={this.state.newFolderDescriptionInput}
            />
          )}
        </div>

        {/* Conditional Rendering.  BoxList and RequestCart won't render until selectedDep != 0 */}

        {!!this.state.selectedDep && (
          <div style={AppStyles.wrapper}>
            <div>
              <BoxList
                boxData={this.getFilteredData()}
                addBox={(e) => this.addItemToCheckout(e)}
                openModal={(i: IBoxData) => {
                  console.log(i)
                  this.setState({
                    selectedBox: i
                  })
                }}
              />
            </div>
            <div style={AppStyles.leftSection}>
              {this.state.selectedBox !== undefined && (
                <FolderView
                  openModal={(i) => this.toggleModal(ModalTypes.create)}
                  closeModal={() => this.toggleModal(ModalTypes.none)}
                  filteredData={this.getFilteredFolders()}
                  selectedBox={this.state.selectedBox}
                  addFolder={(e) => this.addItemToCheckout(e)}
                  createNewFolder={(x) => this.createNewFolder(x)}
                  updateFolderName={(e) => this.updateFolderName(e)}
                  updateFolderDescription={(e) =>
                    this.updateFolderDescription(e)
                  }
                  newDescriptionInput={this.state.newFolderDescriptionInput}
                  newNameInput={this.state.newFolderNameInput}
                  toggleCreateModal={() => this.toggleModal(ModalTypes.create)}
                />
              )}
            </div>
            {
              <div style={AppStyles.rightSection}>
                <RequestCart
                  selectedItems={this.state.selectedItems}
                  type={this.state.isChecked ? 'Box' : 'Folder'}
                  removeItemFromCheckout={(r) => this.removeItemFromCheckout(r)}
                />
              </div>
            }
          </div>
        )}
      </div>
    )
  }
}
