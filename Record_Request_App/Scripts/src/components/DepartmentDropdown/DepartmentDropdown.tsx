import * as React from "react"
import { Dropdown, IDropdown } from "office-ui-fabric-react"
import "./styles.scss"
import { observer } from "mobx-react"
import {
    SessionStore,
    RequestState,
    IOption,
    IDropdownInfo,
} from "../../stores"

export interface IUserDepsProps {
    handleChanged(key: number): void
    options: Array<IOption>
    dropdownInfo: IDropdownInfo
}

export const DepartmentDropdown = observer((props: IUserDepsProps) => {
    return (
        <div>
            <h1 className="ms-font-xxl department-dropdown-center">
                {props.dropdownInfo.title}
            </h1>
            <Dropdown
                placeHolder={props.dropdownInfo.placeHolder}
                options={props.options}
                selectedKey={props.dropdownInfo.key}
                onChanged={item => props.handleChanged(Number(item.key))}
                id={"test"}
                disabled={props.options.length === 1}
            />
        </div>
    )
})

export default DepartmentDropdown
