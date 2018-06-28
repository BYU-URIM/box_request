import * as React from "react"
import {
    Dropdown,

} from "office-ui-fabric-react/lib/"
import "./styles.scss"
import { observer } from "mobx-react"
import { RequestState } from "../../stores/RequestStore/RequestState";

export interface IUserDeps {
    changeSelectedDep(val: number)
    title: string
    requestState: RequestState
    disabled: boolean
    selectedKey: number
}

export const DepartmentDropdown = observer((props: IUserDeps) => {

    let userDeps = props.requestState.userDepartments
    return (
        <div>
            <h1 className="ms-font-xxl department-dropdown-center">
                {props.title}
            </h1>
            <Dropdown
                placeHolder="Departments"
                options={userDeps.map((department, i) => {
                    return { key: userDeps[i].id, text: `${userDeps[i].id} - ${userDeps[i].name}`, value: "not a value" }
                })}
                onChanged={department => props.changeSelectedDep(Number(department.key))}   
                id={"test"} 
                disabled={props.disabled}
                defaultSelectedKey={props.selectedKey}
            />

        </div>
    )
})
