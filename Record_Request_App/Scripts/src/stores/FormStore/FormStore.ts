import { FormEntryType, FormControl, IFormControl } from "."
import { observable, action } from "mobx"
import { IFolder, IFolderForm, IBoxForm } from "../UserStore"

export interface IFormOptions {
    submitLabel?: string
    title?: string
    description?: string
}
export interface IFormStoreProps {
    fields: Array<IFormControl>
    options?: IFormOptions
}

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
                _submit(this.fields.reduce(this.reducer, {}))
                _close()
            }
        )
    }

    reducer = (accumulator, _formControl: FormControl): IFolderForm => ({
        ...accumulator,
        ..._formControl.valueAsObject,
    })

    options: IFormOptions = {}
    validation: {} = {}

    @observable
    fields: Array<FormControl>

    @action
    submit

    @action
    definitionToForm = (
        _formDefinitions: Array<IFormControl>
    ): Array<FormControl> => {
        return _formDefinitions.map(
            (_formDef: IFormControl) => new FormControl(_formDef)
        )
    }

    @action
    updateFormField = (fieldName: string, newVal: FormEntryType) => {
        this.fields.find(
            (_field: FormControl) => _field.fieldName === fieldName
        ).value = newVal
    }
}
