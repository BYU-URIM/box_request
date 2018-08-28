import { MessageBarType } from "office-ui-fabric-react"

export class Message {
    name: MessageTypes
    text: string
    type: MessageBarType
    buttons: Array<string>
}

export type MessageTypes = "five-folders" | "cart-submit-success"

export const messages: Array<Message> = [
    {
        name: "five-folders",
        text:
            "Your request has 5 or more folders from the same box, we reccomend requesting the box instead instead of this many folders.",
        type: MessageBarType.info,
        buttons: [],
    },
    {
        name: "cart-submit-success",
        text: "Thank you. Your order has been submitted.",
        type: MessageBarType.success,
        buttons: [],
    },
]
