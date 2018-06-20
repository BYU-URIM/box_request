import * as React from "react"
import "./styles.scss"
import { inject, observer } from "mobx-react"


@inject("rootStore")
@observer
export class BoxCreator extends React.Component<any, any> {
    render() {
        return <h2>Box Creator</h2>
    }
}
