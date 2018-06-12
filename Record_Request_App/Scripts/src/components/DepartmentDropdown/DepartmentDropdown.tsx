import * as React from "react"
import {
  Dropdown,
  IDropdown,
  DropdownMenuItemType,
  IDropdownOption,
} from "office-ui-fabric-react"
import "./styles.scss"

export interface IUserDeps {
  mockUser
  mockData
  changeSelectedDep(val: number)
}

export function DepartmentDropdown(props: IUserDeps) {
  const deps = [] 
  const depsid = [] 
  const departmentObj = [] 
  const userDepartments = props.mockUser.departments 
  const departmentInfo = props.mockData 

  // iterate through json department object and pull out unique departments
  departmentInfo.forEach(outer => {
    if (!departmentObj.find(inner => inner.id === outer.DepId)) {
      departmentObj.push({ name: outer.DepartmentName, id: outer.DepId })
    }
  })

  // iterates through each object of name and id, compares the id with the user departments, applies a department name with the users dep ID
  departmentObj.forEach(outer => {
    if (userDepartments.find(inner => inner === outer.id)) {
      deps.push(outer.name)
      depsid.push(outer.id)
    }
  })

  // return the HTML dropdown menu of the department names associated with the user
  return (
    <form action="">
      <h1 className="ms-font-xxl center">Select one of your available departments:</h1>

      <Dropdown
        placeHolder="Departments"
        options={deps.map((x, i) => {
          return { key: depsid[i], text: x, value: "not a value" }
        })}
        onChanged={x => props.changeSelectedDep(Number(x.key))}
      />
    </form>
  )
}
