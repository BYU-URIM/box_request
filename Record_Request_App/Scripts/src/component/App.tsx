import * as React from 'react'
import { Greeting } from './Greeting'
import { GetDepartment } from './getdepartment'
import { PrimaryButton } from 'office-ui-fabric-react/'
import { BoxList } from './BoxList'
import { FolderModal } from './FolderModal'
import { RequestCart } from './RequestCart'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'
import { BoxFolderToggle } from './BoxFolderToggle'

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
    isChecked: true
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

  //   if (
  //     this.state.selectedItems.map((x) => x.boxNumber).includes(e.boxNumber) &&
  //     this.state.selectedItems.length > 0
  //   ) {
  //     // don't allow a box to be listed twice
  //   } else {
  //     newList.push(e)
  //     this.setState({
  //       selectedItems: newList
  //     })
  //   }
  // }

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

  _showModal = (i) => {
    this.setState({
      selectedBox: this.getFilteredData()[i]
    })
  }

  _closeModal = (): void => {
    this.setState({ selectedBox: undefined })
  }

  // filter boxData to get the boxes within in the currently selected department
  getFilteredData = () =>
    this.boxData.filter((x, i) => x.DepId === this.state.selectedDep)

  getFilteredFolders = () =>
    this.folderData.filter(
      (x, i) => x.Parent_Box === this.state.selectedBox.BoxIdBarCode
    )

  // changes the state of the toggled button, there is probably a built in way to do with fabric ui toggle component
  // if toggled while items are in the cart, it empties the cart
  makeToggle = () => {
    if (this.state.selectedItems.length > 0) {
      console.log(this.state.selectedItems.length)
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
                openModal={(i) => this._showModal(i)}
              />
            </div>
            <div style={leftSection}>
              {this.state.selectedBox && (
                <FolderModal
                  showModal={true}
                  openModal={(i) => this._showModal(i)}
                  closeModal={this._closeModal}
                  filteredData={this.getFilteredFolders()}
                  selectedBox={this.state.selectedBox}
                  addFolder={(e) => this.addItemToCheckout(e)}
                />
              )}
            </div>
            {
              <div style={rightSection}>
                <RequestCart
                  selectedItems={
                    !!this.state.isChecked
                      ? this.state.selectedItems.map(
                          (item) => `${item.boxNumber}`
                        )
                      : this.state.selectedItems.map(
                          (item) => `${item.folderName}'s Folder`
                        )
                  }
                  //   this.state.selectedItems.map(
                  //   (item) => item.folderName || `B${item.boxNumber}`
                  // )}
                  items={this.getFilteredData()}
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
