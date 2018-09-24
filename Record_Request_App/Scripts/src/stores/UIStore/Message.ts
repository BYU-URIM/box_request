import { MessageBarType } from "office-ui-fabric-react"

export class Message {
    name: string
    text: string
    type: MessageBarType
    buttons?: Array<string> = []
    time?: number
    constructor(msg: IMessage) {
        Object.assign(this, msg)
    }
}
export interface IMessage {
    name: string
    text: string
    type: MessageBarType
    buttons?: Array<string>
    time?: number
}

export const messages = {
    Five_Folders: new Message({
        name: "five-folders",
        text:
            "Your request has 5 or more folders from the same box, we reccomend requesting the box instead instead of this many folders.",
        type: MessageBarType.info,
    }),
    Cart_Submit_Success: new Message({
        name: "cart-submit-success",
        text: "Thank you. Your order has been submitted.",
        type: MessageBarType.success,
    }),
    NEW_FOLDER: new Message({
        name: "folder-create-success",
        text: "The Folder was created successfully.",
        type: MessageBarType.success,
    }),
    NEW_BOX: new Message({
        name: "box-create-success",
        text: "The Box was created successfully.",
        type: MessageBarType.success,
    }),
}
