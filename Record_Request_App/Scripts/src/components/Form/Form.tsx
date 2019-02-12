import * as React from "react"
import "./styles.scss"
import { DetailListHeader } from ".."
import { observer } from "mobx-react"
import { Button } from "office-ui-fabric-react"

export interface IFormProps {
    detail: string
    initializeBoxForm(): void
}

export const Form = observer((props: IFormProps) => {
    return (
        <div className={"ms-Grid-row"}>
            <div className={"ms-Grid-col ms-smPush4 ms-mdPush4 ms-lgPush4"}>
                <div className={""}>
                    <DetailListHeader title={props.detail} />
                    <Button onClick={props.initializeBoxForm} />
                </div>
            </div>
        </div>
    )
})

export default Form
