import * as React from "react"
import "./styles.scss"
import { AppModes } from "../../stores"

export interface IGreetingProps {
    name: string
}

export const Greeting = (props: IGreetingProps) => (
    <div className={"ms-Grid-row"}>
        <div className={"ms-Grid-col ms-sm4 ms-smPush8"}>
            <div className={"greeting-wrapper"}>
                <h2 className={"ms-font-l"}> Welcome, {props.name}</h2>
            </div>
        </div>
    </div>
)

export default Greeting
