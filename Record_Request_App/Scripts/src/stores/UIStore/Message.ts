import { MessageBarType } from "office-ui-fabric-react"

export class Message {
    name: string
    text: string
    type: MessageBarType
    buttons: Array<string>
    time: number = 0
    constructor(msg: IMessage) {
        Object.assign(this, msg)
    }
}
export interface IMessage {
    name: string
    text: string
    type: MessageBarType
    buttons: Array<string>
    time?: number
}

export const messages = {
    Five_Folders: new Message({
        name: "five-folders",
        text:
            "Your request has 5 or more folders from the same box, we reccomend requesting the box instead instead of this many folders.",
        type: MessageBarType.info,
        buttons: [],
    }),
    Cart_Submit_Success: new Message({
        name: "cart-submit-success",
        text: "Thank you. Your order has been submitted.",
        type: MessageBarType.success,
        buttons: [],
        // time: 5000,
    }),
}
