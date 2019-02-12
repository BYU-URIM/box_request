import { JSONSchema6 } from "json-schema"

import { UiSchema, IChangeEvent, Field, Widget } from "react-jsonschema-form"

import { UserStore, IFolderForm } from ".."
import { FormUtils } from "./FormUtils"

export interface IFields {
    [name: string]: Field
}

export interface IFormConfig {
    schema: JSONSchema6
    uiSchema?: UiSchema
    fields?: IFields
    submit: (e: IChangeEvent<{}>, user: UserStore) => void
}
export interface IForms {
    NEW_FOLDER: IFormConfig
    NEW_BOX: IFormConfig
    SUBMIT_CART: IFormConfig
}

/*
    Forms are created and defined here using JSON Schema Forms. To most easily understand schemas, UIs, and other properties, it's probably best to visit their documentation.
*/
export const FORMS: IForms = {
    NEW_FOLDER: {
        schema: {
            type: "object",
            title: "Folder Form",
            required: ["FolderDescription"],
            properties: {
                // This is where you'd add form components, like toggles and textfields
                FolderDescription: {
                    type: "string",
                    maxLength: 50,
                    title: "Folder Description",
                },
            },
            description: "Describes the contents of the folder.",
        },
        uiSchema: {
            FolderDescription: {
                "ui:autofocus": true,
            },
        },
        submit: (e, user) =>
            user.selectedDepartment.selectedBox.createFolder(
                e.formData as IFolderForm
            ),
    },
    NEW_BOX: {
        schema: {
            type: "object",
            title: "Box Form",
            required: ["BoxDescription"],
            properties: {
                BoxDescription: {
                    type: "string",
                    maxLength: 50,
                    title: "Box Description",
                },
            },
            description: "Describes the contents of the box.",
        },
        uiSchema: {
            BoxDescription: {
                "ui:autofocus": true,
            },
        },
        fields: {},
        submit: FormUtils.logOnSubmit,
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
                urgent: {
                    type: "boolean",
                    title: "This Request is Urgent",
                    default: false,
                },
                permanent: {
                    type: "boolean",
                    title: "This Request is Permanent",
                    default: false,
                },
            },
        },
        uiSchema: {
            DeliveryInstructions: {
                "ui:autofocus": true,
                "ui:widget": "textarea",
            },
        },
        fields: {},
        submit: FormUtils.logOnSubmit,
    },
}
