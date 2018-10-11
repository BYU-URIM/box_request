import * as React from "react"
import { observer } from "mobx-react"
import {
    PrimaryButton,
    Label,
    TextField,
    Toggle,
    Checkbox,
} from "office-ui-fabric-react"
import { UIStore, FormStore, UserStore } from "../../stores"
import Form, {
    FieldTemplateProps,
    ObjectFieldTemplateProps,
    WidgetProps,
    Widget,
} from "react-jsonschema-form"
import "./styles.scss"

export interface IFormControlGroupProps {
    uiStore: UIStore
    userStore: UserStore
}

@observer
export class UrimForm extends React.Component<IFormControlGroupProps> {
    constructor(props: IFormControlGroupProps) {
        super(props)
    }

    render() {
        const { uiStore, userStore } = this.props
        const formStore = new FormStore(uiStore.form, userStore)
        return (
            <div className="form-content ms-font-m">
                <div className={"form-header"}>
                    <Label className={"ms-font-xl form-title"}>
                        {formStore.schema.title}
                    </Label>
                </div>
                <div className={"form-body"}>
                    <Form
                        {...formStore}
                        widgets={Widgets}
                        FieldTemplate={CustomFieldTemplate}
                        ObjectFieldTemplate={CustomObjectFieldTemplate}
                        showErrorList={false}
                        liveValidate={true}
                    >
                        <PrimaryButton
                            className={"form-submit-button"}
                            text={"Submit"}
                            type={"submit"}
                        />
                    </Form>
                </div>
            </div>
        )
    }
}

const CustomFieldTemplate = (props: FieldTemplateProps) => {
    return (
        <div className={props.classNames}>
            {props.children}
            {props.help}
        </div>
    )
}

const CustomObjectFieldTemplate = (props: ObjectFieldTemplateProps) => {
    return (
        <div className={"ms-Grid-row"}>
            {props.properties.map(prop => (
                <div key={prop.content.key}>{prop.content}</div>
            ))}
        </div>
    )
}

const CustomToggle = (props: WidgetProps) => <Toggle {...props.options} />

interface IWidgets {
    [name: string]: Widget
}

const Widgets: IWidgets = {
    text: (props: WidgetProps & FieldTemplateProps) => (
        <TextField
            label={props.label}
            onChange={(e, v) => {
                props.onChange(v)
            }}
            autoFocus={props.autofocus}
            underlined={true}
            errorMessage={(props.rawErrors && props.rawErrors[0]) || ""}
        />
    ),
    textarea: (props: WidgetProps & FieldTemplateProps) => (
        <TextField
            label={props.label}
            onChange={(e, v) => {
                props.onChange(v)
            }}
            autoFocus={props.autofocus}
            multiline={true}
            errorMessage={(props.rawErrors && props.rawErrors[0]) || ""}
        />
    ),
    button: (props: WidgetProps & FieldTemplateProps) => (
        <PrimaryButton label={props.label} />
    ),
    checkbox: (props: WidgetProps & FieldTemplateProps) => (
        <Checkbox
            className={"form-checkbox"}
            label={props.label}
            onChange={(e, v) => props.onChange(v)}
        />
    ),
    customToggle: CustomToggle,
}
