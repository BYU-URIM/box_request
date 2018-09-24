import { IFormStoreProps } from "../stores"
export const FORMS: {
    NEW_FOLDER: IFormStoreProps
    NEW_BOX: IFormStoreProps
    SUBMIT_CART: IFormStoreProps
} = {
    NEW_FOLDER: {
        fields: [
            {
                label: "Folder Name*",
                fieldName: "FolderDescription",
                placeholder: "i.e. Jared",
                description: "Warning: You cannot change this later.",
                type: "text",
            },
            {
                label: "Folder Description*",
                fieldName: "FolderDescription",
                placeholder: "i.e This folder contains Jared's records",
                description: "Warning: You cannot change this later.",
                type: "text",
            },
        ],
        options: {
            title: "Create New Folder",
            submitLabel: "Create Folder",
        },
    },
    NEW_BOX: {
        fields: [
            {
                label: "Box Description*",
                description: "Warning: You cannot change this later.",
                fieldName: "FolderDescription",
                type: "textarea",
            },
        ],
        options: {
            title: "Create New Box",
            submitLabel: "Create Box",
        },
    },
    SUBMIT_CART: {
        fields: [
            {
                label: "Request Type",
                description: "Warning: You cannot change this later.",
                fieldName: "RequestType",
                type: "toggle",
                onText: "Permanent",
                offText: "Temporary",
            },
            {
                label: "Delivery Priority",
                description: "Warning: You cannot change this later.",
                fieldName: "DeliveryPriority",
                type: "toggle",
                onText: "Urgent",
                offText: "Standard",
            },
            {
                label: "Delivery Instructions",
                description: "Warning: You cannot change this later.",
                fieldName: "DeliveryInstructions",
                type: "textarea",
            },
        ],
        options: {
            title: "Review and Submit Request",
            submitLabel: "Submit Request",
        },
    },
}
