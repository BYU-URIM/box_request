import * as React from "react";
import { mockData } from "../res/mockdata";
import { mockUser } from "../res/mockuser";
import { Greeting } from "./Greeting";
import { GetDepartment } from "./getdepartment";
import { GetBoxes } from "./getBoxes";
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Multilist } from './test'

const bodyStyle = {
  display: "block",
  justifyContent: "flex-start"
} as React.CSSProperties

const center = {
  display: "flex",
  justifyContent: "center",
  marginLeft: "25%",
  marginRight: "25%",
} as React.CSSProperties

export class App extends React.Component {

  state = {
    uName: mockUser.name,
    departmentid: mockUser.departments,
    user: mockUser,
    data: mockData,
    selectedDep: 0,
  };

  changeSelectedDep = (val:number) => {
    this.setState({
      selectedDep: val
    });
  };

  render() {
    return (
      <div style={bodyStyle}>

        <Greeting 
          name={this.state.uName}
          departmentid={this.state.departmentid}
        />

        <GetDepartment
          mockUser={this.state.user}
          mockData={this.state.data}
          changeSelectedDep={this.changeSelectedDep}
        />

        <span style={center}><PrimaryButton>Request</PrimaryButton></span>

        <Multilist
          mockData={this.state.data}
          Dep={this.state.selectedDep}
        />

        {JSON.stringify(this.state.selectedDep)}
      
      </div>
    );
    
  }
}
