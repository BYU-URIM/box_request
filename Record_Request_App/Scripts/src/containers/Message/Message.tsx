import * as React from "react"
import { UIStore } from "../../stores"
import { inject, observer } from "mobx-react"
import { MessageBar, MessageBarButton } from "office-ui-fabric-react"
import "./styles.scss"

@inject("uiStore")
@observer
export class Message extends React.Component<{ uiStore?: UIStore }> {
    render() {
        const { uiStore } = this.props
        console.log(uiStore.message)

        return uiStore.message ? (
            <div className={"message-wrapper"}>
                <div className={"message-content"}>
                    <MessageBar
                        messageBarType={uiStore.message.type}
                        isMultiline={true}
                        dismissButtonAriaLabel="Close"
                        onDismiss={uiStore.clearMessage}
                        actions={
                            <>
                                {uiStore.message.buttons.map(_button => (
                                    <MessageBarButton key={_button}>
                                        {_button}
                                    </MessageBarButton>
                                ))}
                            </>
                        }
                        styles={{
                            iconContainer: {
                                fontSize: 18,
                            },
                            root: {
                                alignItems: "center",
                                verticalAlign: "center",
                            },
                            text: {
                                fontSize: 14,
                                padding: 6,
                            },
                            actions: {
                                margin: 0,
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
