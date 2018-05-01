import * as React from 'react'
import { Greeting } from './Greeting'
import { GetDepartment } from './getdepartment'
import { PrimaryButton, ThemeSettingName } from 'office-ui-fabric-react/'
import { BoxList } from './BoxList'
import { FolderModal } from './FolderModal'
import { RequestCart } from './RequestCart'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'
import { BoxFolderToggle } from './BoxFolderToggle'
import { CreateFolderModal } from './CreateFolderModal'

export interface IBoxData {
  BoxIdBarCode: number
  DepId: number
  DepartmentName: string
  Location: string
}

export interface IFolderData {
  FolderIdBarCode: number
  FolderName: string
  Parent_Box: number
  Folder_Description: string
}

export interface ISelectedItems {
  key: number
  boxNumber?: number
  folderName?: string
}
// Enables microsoft ui icons to appear
initializeIcons()

const getDepStyle = {
  marginLeft: '30%',
  marginRight: '30%',
  textAlign: 'center'
} as React.CSSProperties

const wrapper = {
  display: 'inline-flex',
  width: '100%',
  height: 'auto'
} as React.CSSProperties

const rightSection = {
  margin: '0',
  padding: '10px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '50%'
} as React.CSSProperties

const leftSection = {
  margin: '0',
  padding: '10px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '50%'
} as React.CSSProperties

export class App extends React.Component<{ user; boxData; folderData }> {
  boxData = this.props.boxData
  folderData = this.props.folderData
  state = {
    selectedItems: [],
    selectedDep: 0,
    selectedBox: undefined,
    isChecked: true,
    createFolderModalShown: false,
    newFolderNameInput: '',
    newFolderDescriptionInput: ''
  }

  // function used to change the selected department via the dropdown menu
  changeSelectedDep = (val: number) => {
    this.setState({
      selectedDep: val
    })
  }

  addItemToCheckout = (e) => {
    let newList = this.state.selectedItems

    // check to see if the clicked-on item is a box or folder
    switch (e.hasOwnProperty('boxNumber')) {
      case true:
        // check status of box/folder toggle
        if (this.state.isChecked) {
          if (newList.map((x) => x.boxNumber).includes(e.boxNumber)) {
            // checks for and doesn't allow duplicate items
          } else {
            newList.push(e)
          }
          this.setState({
            selectedItems: newList
          })
        }
        break

      case false:
        // check if folders are checked
        if (!this.state.isChecked) {
          if (newList.map((x) => x.folderName).includes(e.folderName)) {
            // checks for and doesn't allow duplicate items
          } else {
            newList.push(e)
          }
          this.setState({
            selectedItems: newList
          })
        }
        break
    }
  }

  removeItemFromCheckout = (r) => {
    let newList = this.state.selectedItems
    newList.splice(r, 1)
    this.setState({
      selectedItems: newList
    })
  }

  removeAllItemsFromCheckout = () => {
    let newList = []
    this.setState({
      selectedItems: newList
    })
  }

  _showFolderModal = (i) => {
    this.setState({
      selectedBox: this.getFilteredData()[i]
    })
  }

  _closeFolderModal = (): void => {
    this.setState({ selectedBox: undefined })
  }

  _toggleCreateModal = () => {
    if (this.state.createFolderModalShown) {
      this.setState({
        createFolderModalShown: false
      })
    } else {
      this.setState({
        createFolderModalShown: true
      })
    }
  }

  // filter boxData to get the boxes within in the currently selected department
  getFilteredData = () =>
    this.boxData.filter((x, i) => x.DepId === this.state.selectedDep)

  getFilteredFolders = () =>
    this.folderData.filter(
      (x, i) => x.Parent_Box === this.state.selectedBox.BoxIdBarCode
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
      FolderIdBarCode:
        this.folderData
          .map((subArray) => subArray.FolderIdBarCode)
          .reduce((previousLargestNumber, currentLargestNumber) => {
            return currentLargestNumber > previousLargestNumber
              ? currentLargestNumber
              : previousLargestNumber
          }, 0) + 1,
      // parent box depends on which box they selected
      Parent_Box: this.state.selectedBox.BoxIdBarCode,
      // comes from the values entered by user from text fields
      FolderName: this.state.newFolderNameInput,
      Folder_Description: this.state.newFolderDescriptionInput
    })
    // closes the modal and resets the data so user cannot easily make the same folder twice
    this.setState({
      createFolderModalShown: false,
      newFolderNameInput: '',
      newFolderDescriptionInput: ''
    })
  }

  // changes the state of the toggled button, there is probably a built in way to do with fabric ui toggle component
  // if toggled while items are in the cart, it empties the cart
  makeToggle = () => {
    if (this.state.selectedItems.length > 0) {
      this.removeAllItemsFromCheckout()
    }
    if (this.state.isChecked) {
      this.setState({
        isChecked: false
      })
    } else {
      this.setState({
        isChecked: true
      })
    }
  }

  render() {
    window['appState'] = this.state
    return (
      <div>
        <Greeting
          name={this.props.user.name}
          departmentid={this.props.user.departments}
        />

        <div style={getDepStyle}>
          <GetDepartment
            mockUser={this.props.user}
            mockData={this.boxData}
            changeSelectedDep={this.changeSelectedDep}
          />
          <BoxFolderToggle
            isChecked={this.state.isChecked}
            makeToggle={this.makeToggle}
          />
          <PrimaryButton
            disabled={!(this.state.selectedItems.length > 0)}
            text="Submit Request"
          />
        </div>

        {/* Conditional Rendering.  BoxList and RequestCart won't render until selectedDep != 0 */}

        {!!this.state.selectedDep && (
          <div style={wrapper}>
            <div>
              <BoxList
                boxData={this.getFilteredData()}
                addBox={(e) => this.addItemToCheckout(e)}
                openModal={(i) => this._showFolderModal(i)}
              />
            </div>
            <div style={leftSection}>
              {this.state.selectedBox && (
                <FolderModal
                  showModal={true}
                  openModal={(i) => this._showFolderModal(i)}
                  closeModal={this._closeFolderModal}
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
                  toggleCreateModal={this._toggleCreateModal}
                  showCreateModal={this.state.createFolderModalShown}
                />
              )}
            </div>
            {
              <div style={rightSection}>
                <RequestCart
                  selectedItems={
                    !!this.state.isChecked
                      ? this.state.selectedItems.map(
                          (item) => `B${item.boxNumber}`
                        )
                      : this.state.selectedItems.map(
                          (item) => `${item.folderName}'s Folder`
                        )
                  }
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
