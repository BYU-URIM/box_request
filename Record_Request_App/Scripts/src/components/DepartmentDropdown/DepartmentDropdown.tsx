import * as React from "react"
import { Dropdown } from "office-ui-fabric-react"
import "./styles.scss"
import { observer } from "mobx-react"
import { SessionStore, RequestState } from "../../stores"

export interface IUserDepsProps {
    changeSelectedDep(dep: number)
    sessionStore: SessionStore
    requestState: RequestState
}

export const DepartmentDropdown = observer((props: IUserDepsProps) => {
    return (
        <div>
            <h1 className="ms-font-xxl department-dropdown-center">
                {props.requestState.dropdownInfo.title}
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
                disabled={props.requestState.dropdownInfo.disabled}
                defaultSelectedKey={props.requestState.dropdownInfo.selectedKey}
            />
        </div>
    )
})
