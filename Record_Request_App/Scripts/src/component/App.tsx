import * as React from "react";
import { mockdata } from "../res/mockdata";
import { mockuser } from "../res/mockuser";
import { Greeting } from "./Greeting";
import { DepList } from "./UserDep";
import { GetDepartment } from "./getdepartment";

// app content refers to everything in the app below the header
export class App extends React.Component {

  state = {
    uName: mockuser.name,
    departmentid: mockuser.departments,
    user: mockuser,
    data: mockdata,
  };

  render() {
    return (
      <div>

        <Greeting 
          name={this.state.uName}
          departmentid={this.state.departmentid}
        />

        <h1>Select one of your available deparments:</h1>

        <DepList
          items={this.state.departmentid}
        />

        <GetDepartment
          mockuser={this.state.user}
          mockdata={this.state.data}
        />

        
      </div>
    );
    
  }
}
