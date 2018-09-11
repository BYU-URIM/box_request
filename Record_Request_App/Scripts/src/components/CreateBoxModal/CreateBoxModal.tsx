import * as React from "react"
import "./styles.scss"
import { observer } from "mobx-react"

export interface ICreateBoxModalProps {
    name: string
}

export const CreateBoxModal = observer((props: ICreateBoxModalProps) => {
    return <div className={`createBox-wrapper`}>{props.name}</div>
})

export default CreateBoxModal
