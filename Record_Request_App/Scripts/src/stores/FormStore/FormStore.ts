import { UiSchema, Widget, IChangeEvent } from "react-jsonschema-form"
import { JSONSchema6 } from "json-schema"
import { UserStore, IFormConfig, IFields, FORMS } from ".."

export enum FormTypes {
    SUBMIT_CART = "SUBMIT_CART",
    NEW_FOLDER = "NEW_FOLDER",
    NEW_BOX = "NEW_BOX",
    none = "none",
}

export class FormStore implements IFormConfig {
    schema: JSONSchema6
    uiSchema?: UiSchema
    fields?: IFields
    submit: (e: IChangeEvent<{}>, user: UserStore) => void
    onSubmit: (e: IChangeEvent<{}>) => void
    constructor(formType: FormTypes, user: UserStore) {
        Object.assign(this, FORMS[formType])
        this.onSubmit = (e: IChangeEvent<{}>) => {
            this.submit(e, user)
        }
    }
}
