import * as React from "react"
import {
    Dropdown,

} from "office-ui-fabric-react/lib/"
import "./styles.scss"
import { observer } from "mobx-react"

export interface IUserDeps {
    mockUser
    mockData
    changeSelectedDep(val: number)
    title: string
}

export const DepartmentDropdown = observer((props: IUserDeps) => {
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
        <div>
            <h1 className="ms-font-xxl department-dropdown-center">
                {props.title}
            </h1>

            <Dropdown
                placeHolder="Departments"
                options={deps.map((x, i) => {
                    return { key: depsid[i], text: x, value: "not a value" }
                })}
                onChanged={x => props.changeSelectedDep(Number(x.key))}                
            />
        </div>
    )
})
