import * as React from "react"
import { observer } from "mobx-react"
import { PrimaryButton, Label, TextField } from "office-ui-fabric-react"
import { UIStore, FormStore, User } from "../../stores"
import Form, {
    FieldTemplateProps,
    ObjectFieldTemplateProps,
    WidgetProps,
    Widget,
} from "react-jsonschema-form"
import "./styles.scss"

export interface IFormControlGroupProps {
    uiStore: UIStore
    userStore: User
}

@observer
export class FormControlGroup extends React.Component<IFormControlGroupProps> {
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
            {props.description}
            {props.children}
            {props.help}
        </div>
    )
}

const CustomObjectFieldTemplate = (props: ObjectFieldTemplateProps) => {
    return (
        <div>
            <div className={"ms-Grid-row"}>
                {props.properties.map(prop => (
                    <div
                        className="col-lg-2 col-md-4 col-sm-6 col-xs-12"
                        key={prop.content.key}
                    >
                        {prop.content}
                    </div>
                ))}
            </div>
            {props.description}
        </div>
    )
}

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
            multiline={true}
            errorMessage={(props.rawErrors && props.rawErrors[0]) || ""}
        />
    ),
    button: (props: WidgetProps & FieldTemplateProps) => (
        <PrimaryButton label={props.label} />
    ),
}
