import * as React from "react"
import { Dropdown } from "office-ui-fabric-react"
import "./styles.scss"
import { observer } from "mobx-react"
import { SessionStore } from "../../stores"

export interface IUserDepsProps {
    changeSelectedDep(dep: number)
    title: string
    sessionStore: SessionStore
    disabled: boolean
    selectedKey: number
}

export const DepartmentDropdown = observer((props: IUserDepsProps) => {
    return (
        <div>
            <h1 className="ms-font-xxl department-dropdown-center">
                {props.title}
            </h1>
            <Dropdown
                placeHolder="Departments"
                options={props.sessionStore.userDepartments.map(department => {
                    return {
                        key: department.id,
                        text: `${department.id} - ${department.name}`,
                        value: "not a value",
                    }
                })}
                onChanged={department =>
                    props.changeSelectedDep(Number(department.key))
                }
                id={"test"}
                disabled={props.disabled}
                defaultSelectedKey={props.selectedKey}
            />
        </div>
    )
})
