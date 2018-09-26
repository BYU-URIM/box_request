import { observable, computed } from "mobx"
export type FormEntryType = string | number | boolean

export type FormFieldType =
    | "text"
    | "choice"
    | "checkbox"
    | "toggle"
    | "textarea"
    | "datetime"
    | "number"

export interface IFormField {
    fieldName: string
    type: FormFieldType
    label: string
    description: string
    placeholder?: string
    choices?: Array<string>
    onText?: string
    offText?: string
    autoFocus?: boolean
    maxLength?: number
}

export class FormField implements IFormField {
    constructor(_formControlDefinition: IFormField) {
        Object.assign(this, _formControlDefinition)
        this.required = this.label.includes("*")
        if (this.required) this.label = this.label.replace("*", "")
    }
    fieldName: string
    type: FormFieldType
    label: string
    description: string
    placeholder?: string
    choices?: Array<string>
    onText?: string
    offText?: string
    autoFocus?: boolean
    maxLength?: number
    required: boolean

    @observable
    private _value: FormEntryType = ""

    @computed
    get value(): FormEntryType {
        return this._value
    }

    set value(value: FormEntryType) {
        this._value = value
    }

    @computed
    get errorMessage(): string {
        return this.requiredValidation()
    }

    @computed
    get valueAsObject() {
        return { [this.fieldName]: this.value }
    }

    requiredValidation = (): string => {
        return this.value.toString().length > 0 ? "" : "this field is required"
    }
}
