import * as React from "react"
import { Dropdown, DocumentCardTitle } from "office-ui-fabric-react"
import "./styles.scss"
import { observer } from "mobx-react"
import { IOption, IDropdownInfo } from "../../models"
export interface IDepartmentDropdownProps {
    handleChanged(key: number): void
    options: Array<IOption>
    dropdownInfo: IDropdownInfo
}

export const DepartmentDropdown = observer(
    (props: IDepartmentDropdownProps) => {
        return (
            <div>
                {props.options.length !== 1 ? (
                    <>
                        <h1 className="ms-font-xxl department-dropdown-center">
                            {props.dropdownInfo.title}
                        </h1>
                        <Dropdown
                            placeHolder={props.dropdownInfo.placeHolder}
                            options={props.options}
                            selectedKey={props.dropdownInfo.key}
                            onChanged={(item: IOption) =>
                                props.handleChanged(item.key)
                            }
                            id={"dep_dropdown"}
                            disabled={props.options.length === 1}
                        />
                    </>
                ) : (
                    <DocumentCardTitle
                        title={`Department: ${props.options[0].text}`}
                    />
                )}
            </div>
        )
    }
)

export default DepartmentDropdown
