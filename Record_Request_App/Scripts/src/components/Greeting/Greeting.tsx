import * as React from "react"
import "./styles.scss"
import { PrimaryButton } from "office-ui-fabric-react"
import { AppModes } from "../../stores/SessionStore/SessionStore"

export interface IGreeting {
    name: string
    departmentid: number[]
    switchApp(mode: AppModes): void
}

export const Greeting = (props: IGreeting) => (
    <div className={"ms-Grid-row"}>
        <div className={"ms-Grid-col ms-sm4 ms-smPush8"}>
            <div className={"greeting-wrapper"}>
                <h2 className={"ms-font-l"}> Welcome, {props.name}</h2>
            </div>
        </div>
    </div>
)
