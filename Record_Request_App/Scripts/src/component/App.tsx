import * as React from 'react'
import { mockUser } from '../res/mockuser'
import { boxData } from '../res/boxdata'
import { Greeting } from './Greeting'
import { GetDepartment } from './getdepartment'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { BoxList } from './BoxList'
import { FolderModal } from './FolderModal'
import { RequestCart } from './RequestCart'

const bodyStyle = {
  display: 'block',
  justifyContent: 'flex-start'
} as React.CSSProperties

const center = {
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '25%',
  marginRight: '25%'
} as React.CSSProperties

const _items: any[] = []

export class App extends React.Component {
  state = {
    uName: mockUser.name,
    departmentid: mockUser.departments,
    user: mockUser,
    data: boxData,
    selectedDep: 0,
    boxData: boxData,
    filteredData: [],
    _items: '',

  }

  // function used to change the selected department via the dropdown menu
  changeSelectedDep = (val: number) => {
    this.setState({
      selectedDep: val,
      filteredData: this.state.boxData.filter((x, i) => x.DepId === val),
    })
  }

  // filter boxData to get the boxes within in the currently selected department
  getFilteredData = this.state.boxData.filter(
    (x, i) => x.DepId === this.state.selectedDep
  )

  render() {
    window['appState'] = this.state
    return (
      <div style={bodyStyle}>
        <Greeting
          name={this.state.uName}
          departmentid={this.state.departmentid}
        />

        <GetDepartment
          mockUser={this.state.user}
          mockData={this.state.boxData}
          changeSelectedDep={this.changeSelectedDep}
        />

        <span style={center}>
          <PrimaryButton>Request</PrimaryButton>
        </span>



        {/* Conditional Rendering.  BoxList won't render until selectedDep != 0 */}

        {!!this.state.selectedDep && (
          <div style={center}>
            <BoxList
              boxData={(this.state.filteredData)}
            />
          </div>
        )}
      </div>
    )
  }
}
