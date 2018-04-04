import * as React from 'react'
import { mockUser } from '../res/mockuser'
import { boxData } from '../res/boxdata'
import { Greeting } from './Greeting'
import { GetDepartment } from './getdepartment'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
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

export class App extends React.Component {
  state = {
    uName: mockUser.name,
    departmentid: mockUser.departments,
    user: mockUser,
    selectedDep: 0,
    boxData: boxData,
    filteredData: [],
    selectedItems: [],
    disabledStatus: true
  }

  // function used to change the selected department via the dropdown menu
  changeSelectedDep = (val: number) => {
    this.setState({
      selectedDep: val,
      filteredData: this.state.boxData.filter((x, i) => x.DepId === val)
    })
  }

  // Only allow one of one box to move onto the RequestCart
  addItemToCheckout = (e) => {
    let newList = this.state.selectedItems

    if(this.state.selectedItems.map(x=>x.boxNumber).includes(e.boxNumber) && this.state.selectedItems.length > 0)
    {
      // don't allow a box to be listed twice
    }
    else {
      newList.push(e)
    this.setState({
      selectedItems: newList
    })}
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

  // filter boxData to get the boxes within in the currently selected department
  getFilteredData = this.state.boxData.filter(
    (x, i) => x.DepId === this.state.selectedDep
  )

  render() {
    window['appState'] = this.state
    return (
      <div>
        <Greeting
          name={this.state.uName}
          departmentid={this.state.departmentid}
        />

        <div style={getDepStyle}>
          <GetDepartment
            mockUser={this.state.user}
            mockData={this.state.boxData}
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
            <div style={leftSection}>
              <BoxList
                boxData={this.state.filteredData}
                addBox={(a) => this.addItemToCheckout(a)}
              />
            </div>
            {
              <div style={rightSection}>
                <RequestCart
                  selectedItems={this.state.selectedItems}
                  items={this.state.filteredData}
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
