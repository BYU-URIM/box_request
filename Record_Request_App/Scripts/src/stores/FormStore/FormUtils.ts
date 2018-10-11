import { IFolderForm, UserStore } from "../UserStore"
import { IChangeEvent } from "react-jsonschema-form"

export const FormUtils = {
    logOnSubmit: (e: IChangeEvent<IFolderForm>, user: UserStore) => {
        console.log(e)
        console.log(user)
    },
}
