import { Folder, Box } from "../stores"

export interface IOption {
    key: number
    text: string
}

export interface IDropdownInfo {
    title: string
    key: number
    placeHolder: string
}

export type CheckoutItem = Box | Folder
