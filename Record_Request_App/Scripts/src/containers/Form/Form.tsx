import * as React from "react"
import { observer } from "mobx-react"
import {
    TextField,
    IDropdownOption,
    DatePicker,
    Dropdown,
    Checkbox,
    PrimaryButton,
    Toggle,
    Label,
} from "office-ui-fabric-react"
import { FormStore } from "../../stores"
import "./styles.scss"

export interface IFormControlGroupProps {
    formStore: FormStore
}

@observer
export class FormControlGroup extends React.Component<IFormControlGroupProps> {
    constructor(props: IFormControlGroupProps) {
        super(props)
    }

    render() {
        const props = this.props
        return (
            <div className="form-content">
                <div className={"form-header"}>
                    <Label className={"ms-font-xl form-title"}>
                        {props.formStore.options.title}
                    </Label>
                </div>
                <div className={"form-body"}>
                    {props.formStore &&
                        props.formStore.fields.map((formControl, index) => {
                            if (
                                formControl.type === "text" ||
                                formControl.type === "number"
                            ) {
                                return (
                                    <TextField
                                        className={"formControl-styles"}
                                        key={index}
                                        {...{
                                            ...formControl,
                                            value: formControl.value.toString(),
                                        }}
                                        onChange={(e, val) =>
                                            props.formStore.updateFormField(
                                                formControl.fieldName,
                                                val
                                            )
                                        }
                                        validateOnLoad={false}
                                        validateOnFocusOut={true}
                                        underlined={true}
                                        onGetErrorMessage={() =>
                                            formControl.errorMessage
                                        }
                                    />
                                )
                            } else if (formControl.type === "datetime") {
                                return (
                                    <DatePicker
                                        className={"formControl-styles"}
                                        {...formControl}
                                        value={
                                            new Date(
                                                formControl.value.toString()
                                            )
                                        }
                                        key={index}
                                        highlightSelectedMonth={true}
                                        onSelectDate={newVal =>
                                            props.formStore.updateFormField(
                                                formControl.fieldName,
                                                newVal.toLocaleDateString()
                                            )
                                        }
                                    />
                                )
                            } else if (formControl.type === "toggle") {
                                return (
                                    <Toggle
                                        className={"formControl-styles"}
                                        key={index}
                                        onChange={(e, checked: boolean) =>
                                            props.formStore.updateFormField(
                                                formControl.fieldName,
                                                checked
                                            )
                                        }
                                        {...formControl}
                                    />
                                )
                            } else if (formControl.type === "choice") {
                                return (
                                    <Dropdown
                                        className={"formControl-styles"}
                                        key={index}
                                        onChange={(
                                            e,
                                            option: IDropdownOption
                                        ) =>
                                            props.formStore.updateFormField(
                                                formControl.fieldName,
                                                option.text
                                            )
                                        }
                                        errorMessage={
                                            props.formStore.validation[
                                                formControl.fieldName
                                            ]
                                        }
                                        options={formControl.choices.map(
                                            choice => ({
                                                key: choice,
                                                text: choice,
                                            })
                                        )}
                                        selectedKey={Number(formControl.value)}
                                    />
                                )
                            } else if (formControl.type === "textarea") {
                                return (
                                    <TextField
                                        className={"formControl-styles"}
                                        key={index}
                                        onChange={(e, newVal: string) =>
                                            props.formStore.updateFormField(
                                                formControl.fieldName,
                                                newVal
                                            )
                                        }
                                        errorMessage={
                                            props.formStore.validation[
                                                formControl.fieldName
                                            ]
                                        }
                                        multiline={true}
                                        {...{
                                            ...formControl,
                                            value: formControl.value.toString(),
                                        }}
                                    />
                                )
                            } else {
                                return (
                                    <div key={index}>
                                        unrecognized form control type
                                    </div>
                                )
                            }
                        })}
                </div>

                {props.formStore && (
                    <div className={"form-footer"}>
                        <PrimaryButton
                            text={props.formStore.options.submitLabel}
                            onClick={props.formStore.submit}
                            disabled={!!props.formStore.validation}
                        />
                    </div>
                )}
            </div>
        )
    }
}
