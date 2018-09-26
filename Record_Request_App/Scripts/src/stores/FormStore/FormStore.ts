import { FormEntryType, FormField, IFormField } from "."
import { observable, action, computed } from "mobx"
import { IFolderForm, IBoxForm } from "../UserStore"

export interface IFormOptions {
    submitLabel?: string
    title?: string
    description?: string
}
export interface IFormStoreProps {
    fields: Array<IFormField>
    options?: IFormOptions
}

// export class FormStore {
//     constructor(
//         props: IFormStoreProps,
//         _submit: (_formData: IFolderForm | IBoxForm) => void,
//         _close: () => void
//     ) {
//         this.fields = this.definitionToForm(props.fields)
//         Object.assign(this.options, props.options)
//     }

//     fieldValuesReducer = (acc, _formControl: FormControl): IFolderForm => ({
//         ...acc,
//         ..._formControl.valueAsObject,
//     })

//     options: IFormOptions = {}

//     @observable
//     validation: {} = {}

//     @observable
//     fields: Array<FieldState<string>>

//     @action
//     submit

//     @action
//     definitionToForm = (
//         _formDefinitions: Array<IFormControl>
//     ): Array<FieldState<string>> => {
//         const required = (val: string) => !val && "Value required"
//         const only3letters = (val: string) =>
//             !val && val.length !== 3 && "only 3 letters"
//         return _formDefinitions.map((_formDef: IFormControl) =>
//             new FieldState("").validators(required, only3letters)
//         )
//     }
// }

export class FormStore {
    constructor(
        props: IFormStoreProps,
        _submit: (_formData: IFolderForm | IBoxForm) => void,
        _close: () => void
    ) {
        this.fields = this.definitionToForm(props.fields)
        Object.assign(this.options, props.options)
        this.submit = action(
            (): void => {
                _submit(this.fields.reduce(this.fieldValuesReducer, {}))
                _close()
            }
        )
    }

    fieldValuesReducer = (acc, _formControl: FormField): IFolderForm => ({
        ...acc,
        ..._formControl.valueAsObject,
    })

    options: IFormOptions = {}

    @computed
    get validation(): {} {
        const errors = {}
        this.fields.forEach(_field => {
            if (_field.errorMessage)
                errors[_field.fieldName] = _field.errorMessage
        })
        return Object.keys(errors).length > 0 ? errors : undefined
    }

    @observable
    fields: Array<FormField>

    @action
    submit

    @action
    definitionToForm = (
        _formDefinitions: Array<IFormField>
    ): Array<FormField> => {
        return _formDefinitions.map(
            (_formDef: IFormField) => new FormField(_formDef)
        )
    }

    @action
    updateFormField = (fieldName: string, newVal: FormEntryType) => {
        this.fields.find(
            (_field: FormField) => _field.fieldName === fieldName
        ).value = newVal
    }
}
