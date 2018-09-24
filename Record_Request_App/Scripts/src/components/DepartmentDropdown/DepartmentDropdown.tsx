import * as React from "react"
import {
    Dropdown,
    DocumentCardTitle,
    PrimaryButton,
} from "office-ui-fabric-react"
import "./styles.scss"
import { observer } from "mobx-react"
import { IOption, IDropdownInfo } from "../../models"
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
                    <>
                        <h1
                            className={
                                "ms-Grid-col ms-sm8 ms-smPush4 ms-font-xxl department-dropdown-center"
                            }
                        >
                            {props.dropdownInfo.title}
                        </h1>
                        <Dropdown
                            placeHolder={props.dropdownInfo.placeHolder}
                            options={props.options}
                            selectedKey={props.dropdownInfo.key}
                            onChanged={(item: IOption) =>
                                props.handleChanged(item.key)
                            }
                            className={"ms-Grid-col ms-sm8"}
                            id={"dep_dropdown"}
                            disabled={props.options.length === 1}
                        />
                    </>
                ) : (
                    <div className={"ms-Grid-col ms-sm8"}>
                        <DocumentCardTitle
                            title={`Department: ${props.options[0].text}`}
                        />
                    </div>
                )}
                {!!props.dropdownInfo.key && (
                    <PrimaryButton
                        text={"Create New Box"}
                        onClick={props.initializeBoxForm}
                        className={"ms-Grid-col ms-sm4"}
                        style={{ color: "white" }}
                    />
                )}
            </div>
        )
    }
)

export default DepartmentDropdown
