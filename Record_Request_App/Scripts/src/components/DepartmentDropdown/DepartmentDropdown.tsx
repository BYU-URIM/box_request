import * as React from "react"
import { Dropdown, Label } from "office-ui-fabric-react"
import { observer } from "mobx-react"
import { IOption, IDropdownInfo } from "../../stores"
import "./styles.scss"
export interface IDepartmentDropdownProps {
    handleChanged(key: number): void
    options: Array<IOption>
    dropdownInfo: IDropdownInfo
    initializeBoxForm(): void
}

export const DepartmentDropdown = observer(
    (props: IDepartmentDropdownProps) => {
        return (
            <div className={"ms-Grid-row"}>
                {props.options.length !== 1 ? (
                    <Dropdown
                        placeHolder={props.dropdownInfo.placeHolder}
                        options={props.options}
                        selectedKey={props.dropdownInfo.key}
                        onChange={(e, item: IOption) =>
                            props.handleChanged(item.key)
                        }
                        label={props.dropdownInfo.title}
                        styles={{
                            label: {
                                fontSize: "21px",
                                fontWeight: "100",
                            },
                        }}
                        id={"dep_dropdown"}
                        disabled={props.options.length === 1}
                    />
                ) : (
                    <div className={"ms-Grid-col ms-sm8"}>
                        <Label className={"ms-font-xl"}>
                            Your Department: {props.options[0].text}
                        </Label>
                    </div>
                )}
            </div>
        )
    }
)

export default DepartmentDropdown
