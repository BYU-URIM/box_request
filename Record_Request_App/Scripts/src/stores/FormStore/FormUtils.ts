import { IFolderForm, User } from "../UserStore"
import { IChangeEvent } from "react-jsonschema-form"

export const FormUtils = {
    logOnSubmit: (e: IChangeEvent<IFolderForm>, user: User) => {
        console.log(e)
        console.log(user)
    },
}
