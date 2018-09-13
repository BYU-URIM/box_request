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
            <div className="form-wrapper">
                <Label className={"ms-font-xl form-title"}>
                    {props.formStore.options.title}
                </Label>

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
                                    onChanged={(newVal: string) =>
                                        props.formStore.updateFormField(
                                            formControl.fieldName,
                                            newVal
                                        )
                                    }
                                    underlined={true}
                                    errorMessage={
                                        props.formStore.validation[
                                            formControl.fieldName
                                        ]
                                    }
                                    {...formControl}
                                />
                            )
                        } else if (formControl.type === "datetime") {
                            return (
                                <DatePicker
                                    className={"formControl-styles"}
                                    key={index}
                                    value={new Date(formControl.value)}
                                    highlightSelectedMonth={true}
                                    onSelectDate={newVal =>
                                        props.formStore.updateFormField(
                                            formControl.fieldName,
                                            newVal.toLocaleDateString()
                                        )
                                    }
                                    {...formControl}
                                />
                            )
                        } else if (formControl.type === "toggle") {
                            return (
                                <Toggle
                                    className={"formControl-styles"}
                                    key={index}
                                    onChanged={(checked: boolean) =>
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
                                    onChanged={(option: IDropdownOption) =>
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
                                    selectedKey={formControl.value}
                                />
                            )
                        } else if (formControl.type === "textarea") {
                            return (
                                <TextField
                                    className={"formControl-styles"}
                                    key={index}
                                    onChanged={(newVal: string) =>
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
                                    {...formControl}
                                />
                            )
                        } else if (formControl.type === "checkbox") {
                            return (
                                <Checkbox
                                    className={"formControl-styles"}
                                    key={index}
                                    checked={formControl.value}
                                    onChange={(
                                        e: React.FormEvent<HTMLElement>,
                                        isChecked: boolean
                                    ) =>
                                        props.formStore.updateFormField(
                                            formControl.fieldName,
                                            String(isChecked)
                                        )
                                    }
                                    {...formControl}
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

                {props.formStore && (
                    <PrimaryButton
                        className={"form-submit"}
                        text={props.formStore.options.submitLabel}
                        onClick={props.formStore.submit}
                    />
                )}
            </div>
        )
    }
}
