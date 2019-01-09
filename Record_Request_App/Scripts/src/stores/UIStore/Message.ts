import { MessageBarType } from "office-ui-fabric-react"

// The Message class determines what the pop-up message bar will look like, what the message will be, etc.
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

// I don't know what the point of using an interface here is. Shouldn't the class do the job of the interface?
export interface IMessage {
    name: string
    text: string
    type: MessageBarType
    buttons?: Array<string>
    time?: number
}

/* 
We have several different instances of the Message class that we'll be using. They need a name we can easily refer to in the code to identify the message we want, text for the message that will appear on screen, and a message bar type in order to use the Microsoft UI styles 
*/

export const messages = {
    Five_Folders: new Message({
        name: "five-folders",
        text:
            "Your request has 5 or more folders from the same box, we recommend requesting the box instead instead of this many folders.",
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
