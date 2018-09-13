import { observable, computed } from "mobx"
import { IToggle } from "office-ui-fabric-react"

export type FormEntryType = string | number | boolean

export type FormControlType =
    | "text"
    | "choice"
    | "checkbox"
    | "toggle"
    | "textarea"
    | "datetime"
    | "number"

export interface IFormControl {
    fieldName: string // reference to the field name from the model that this from control is displaying
    type: FormControlType
    label: string
    description: string
    placeholder?: string
    choices?: Array<string>
    onText?: string
    offText?: string
}

export class FormControl implements IFormControl {
    constructor(_formControlDefinition: IFormControl) {
        Object.assign(this, _formControlDefinition)
        this.required = this.label.includes("*")
        if (this.required) this.label = this.label.replace("*", "")
    }

    fieldName: string
    type: FormControlType
    label: string
    description: string
    placeholder?: string
    choices?: Array<string>
    onText?: string
    offText?: string

    required: boolean

    @observable
    private _value

    @computed
    get value() {
        return this._value
    }

    set value(value) {
        this._value = value
    }

    @computed
    get valueAsObject() {
        return { [this.fieldName]: this.value }
    }
}
