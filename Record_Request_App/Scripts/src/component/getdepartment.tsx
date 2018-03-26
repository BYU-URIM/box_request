import * as React from 'react';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

const bodyStyle = {
    display: "flex",
    justifyContent: "center",
    marginLeft: "25%",
    marginRight: "25%"
  } as React.CSSProperties

export interface iUserDeps {
    mockUser
    mockData
    changeSelectedDep(val:number)
}


  export function GetDepartment (props:iUserDeps) {
    const deps = []                                                         // Department name that shows up on the dropdown list
    const depsid = []                                                       // department id, part of the object that links the user departments with list of available departments
    const departmentObj = []                                                // Object that gives a name to the departments of the user
    const userDepartments = props.mockUser.departments                      // props, gives department permissions of user
    const departmentInfo = props.mockData                                   // props, all of the data about departments and boxes


    // iterate through json department object and pull out unique departments
    departmentInfo.forEach(outer => {
        if(!departmentObj.find(inner => inner.id === outer.DepId)) {
            departmentObj.push({name: outer.DepartmentName, id: outer.DepId})
        }
    })

    // iterates through each object of name and id, compares the id with the user departments, applies a department name with the users dep ID
    departmentObj.forEach(outer => {
        if(userDepartments.find(inner => inner === outer.id)) {
            deps.push(outer.name);
            depsid.push(outer.id);
        }
    })
    
    // return the HTML dropdown menu of the department names associated with the user
    return(
        <div style={bodyStyle}>

            <form action = ''>
        
                <h1 className="ms-font-xxl">Select one of your available departments:</h1>

                <Dropdown
                    placeHolder='Departments'
                    options={
                        deps.map((x, i) => { return ( 
                            {key: depsid[i], text: x, value:"not a value"}
                    )})
                    }
                    onChanged={(x)=> props.changeSelectedDep(Number(x.key))
                    }
                />
            
            </form>
        
        </div>
    )
}

