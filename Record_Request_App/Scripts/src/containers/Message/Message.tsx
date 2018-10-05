import * as React from "react"
import { UIStore } from "../../stores"
import { inject, observer } from "mobx-react"
import { MessageBar } from "office-ui-fabric-react"
import "./styles.scss"

@inject("uiStore")
@observer
export class Message extends React.Component<{ uiStore?: UIStore }> {
    render() {
        const { uiStore } = this.props
        return uiStore.message ? (
            <div className={"message-wrapper"}>
                <div className={"message-content"}>
                    <MessageBar
                        messageBarType={uiStore.message.type}
                        isMultiline={true}
                        styles={{
                            text: {
                                fontSize: 14,
                                padding: 6,
                            },
                        }}
                    >
                        {uiStore.message.text}
                    </MessageBar>
                </div>
            </div>
        ) : null
    }
}
