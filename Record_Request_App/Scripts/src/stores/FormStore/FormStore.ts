import { UiSchema, Field, Widget, IChangeEvent } from "react-jsonschema-form"
import { JSONSchema6 } from "json-schema"
import { FormTypes } from "../../models"
import { User, IFolderForm } from "../UserStore"

export interface IFormConfig {
    schema: JSONSchema6
    uiSchema?: UiSchema
    fields?: IFields
    submit: (e: IChangeEvent<{}>, user: User) => void
}

export interface IWidgets {
    [name: string]: Widget
}

export interface IFields {
    [name: string]: Field
}

export interface IForms {
    NEW_FOLDER: IFormConfig
    NEW_BOX: IFormConfig
    SUBMIT_CART: IFormConfig
}

const FORMS: IForms = {
    NEW_FOLDER: {
        schema: {
            type: "object",
            title: "Folder Form",
            required: ["FolderDescription"],
            properties: {
                FolderDescription: {
                    type: "string",
                    maxLength: 50,
                    title: "Folder Description",
                },
            },
        },
        submit: (e: IChangeEvent<IFolderForm>, user: User) => {
            user.selectedBox.createFolder(e.formData)
        },
    },
    NEW_BOX: {
        schema: {
            type: "object",
            title: "Box Form",
            required: ["BoxDescription"],
            properties: {
                BoxDescription: {
                    type: "string",
                    maxLength: 5,
                    title: "Box Description",
                },
            },
        },
        uiSchema: {},
        fields: {},
        submit: () => {
            console.log()
        },
    },
    SUBMIT_CART: {
        schema: {
            type: "object",
            title: "Request Form",
            required: ["DeliveryInstructions"],
            properties: {
                DeliveryInstructions: {
                    type: "string",
                    title: "Delivery Instructions",
                },
            },
        },
        uiSchema: {},
        fields: {},
        submit: () => {
            console.log()
        },
    },
}

export class FormStore implements IFormConfig {
    schema: JSONSchema6
    uiSchema?: UiSchema
    fields?: IFields
    submit: (e: IChangeEvent<{}>, user: User) => void
    onSubmit: (e: IChangeEvent<{}>) => void
    constructor(formType: FormTypes, user: User) {
        Object.assign(this, FORMS[formType])
        this.onSubmit = (e: IChangeEvent<{}>) => {
            this.submit(e, user)
        }
    }
}
