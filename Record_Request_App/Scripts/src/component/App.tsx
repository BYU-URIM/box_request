import * as React from "react";
import { mockData } from "../res/mockdata";
import { mockUser } from "../res/mockuser";
import { Greeting } from "./Greeting";
import { GetDepartment } from "./getdepartment";

// app content refers to everything in the app below the header
export class App extends React.Component {

  state = {
    uName: mockUser.name,
    departmentid: mockUser.departments,
    user: mockUser,
    data: mockData,
    selectedDep: 0,
  };

  changeSelectedDep = e => {
    this.setState({
      selectedDep: e.target.value
    });
  };

  render() {
    return (
      <div>

        <Greeting 
          name={this.state.uName}
          departmentid={this.state.departmentid}
        />

        <GetDepartment
          mockUser={this.state.user}
          mockData={this.state.data}
          changeSelectedDep={this.changeSelectedDep}
        />

        {JSON.stringify(this.state.selectedDep)}

        
      </div>
    );
    
  }
}
