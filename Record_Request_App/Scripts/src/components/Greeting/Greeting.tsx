import * as React from "react"
import { UserStore } from "../../stores"
import { observer, inject } from "mobx-react"
import "./styles.scss"

export interface IGreetingProps {
    userStore?: UserStore
}

export const Greeting = inject("userStore")(
    observer((props: IGreetingProps) => (
        <div className={"ms-Grid-row"}>
            <div className={"ms-Grid-col ms-sm4 ms-smPush8"}>
                <div className={"greeting-wrapper"}>
                    <h2 className={"ms-font-l"}>
                        Welcome, {props.userStore.name}
                    </h2>
                </div>
            </div>
        </div>
    ))
)

export default Greeting
