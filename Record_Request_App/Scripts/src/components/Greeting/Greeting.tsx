import * as React from "react"
import "./styles.scss"
import { UserStore } from "../../stores"

export interface IGreetingProps {
    user: UserStore
}

export const Greeting = (props: IGreetingProps) => (
    <div className={"ms-Grid-row"}>
        <div className={"ms-Grid-col ms-sm4 ms-smPush8"}>
            <div className={"greeting-wrapper"}>
                <h2 className={"ms-font-l"}> Welcome, {props.user.name}</h2>
            </div>
        </div>
    </div>
)

export default Greeting
