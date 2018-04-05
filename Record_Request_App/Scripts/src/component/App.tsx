import * as React from 'react'
import { Greeting } from './Greeting'
import { GetDepartment } from './getdepartment'
import { PrimaryButton } from 'office-ui-fabric-react/'
import { BoxList } from './BoxList'
import { FolderModal } from './FolderModal'
import { RequestCart } from './RequestCart'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'

export interface IBoxData {
  BoxIdBarCode: number
  DepId: number
  DepartmentName: string
  Location: string
}

export interface ISelectedItems {
  key: number
  boxNumber: number
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

export class App extends React.Component<{user, boxData}>{
  boxData = this.props.boxData
  state = {
    // uName: mockUser.name,
    // departmentid: mockUser.departments,
    // user: mockUser,
    // boxData: boxData,
    // filteredData: [],
    selectedItems: [],
    selectedFolders: [],
    selectedDep: 0,
    selectedBox: undefined,
  }

  // function used to change the selected department via the dropdown menu
  changeSelectedDep = (val: number) => {
    this.setState({
      selectedDep: val,
      // filteredData: this.boxData.filter((x, i) => x.DepId === val)
    })
  }
  getSelectedBox = () => this.boxData[1]

  // Only allow one of one box to move onto the RequestCart
  addItemToCheckout = (e) => {
    let newList = this.state.selectedItems

    if (
      this.state.selectedItems.map((x) => x.boxNumber).includes(e.boxNumber) &&
      this.state.selectedItems.length > 0
    ) {
      // don't allow a box to be listed twice
    } else {
      newList.push(e)
      this.setState({
        selectedItems: newList
      })
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

  // THIS FUNCTION STILL NEEDS WORK
  _showModal = (i) => {
    this.setState({ 
      selectedBox: this.getFilteredData()[i]
    })
    console.log(this.state.selectedBox)
  }
  // ------------------------------

  _closeModal = (): void => {
    this.setState({ selectedBox: undefined })
  }

  // filter boxData to get the boxes within in the currently selected department
  getFilteredData =()=> this.boxData.filter(
    (x, i) => x.DepId === this.state.selectedDep
  )

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
            {
              this.state.selectedBox &&
              <FolderModal
              showModal={true}
              openModal={(i) => this._showModal(i)}
              closeModal={this._closeModal}
              filteredData={this.getFilteredData()()}
              selectedBox={this.state.selectedBox}
              />
            }
            </div>
            {
              <div style={rightSection}>
                <RequestCart
                  selectedItems={this.state.selectedItems}
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
