import * as React from "react"
import Modal from "office-ui-fabric-react/lib/Modal"
import { inject, observer } from "mobx-react"
import { UIStore, UserStore, FormTypes } from "../../stores"
import { UrimForm } from ".."
import { IconButton, IconType } from "office-ui-fabric-react"
import "./styles.scss"
@inject("uiStore", "userStore")
@observer
export class FormModal extends React.Component<{
    uiStore?: UIStore
    userStore?: UserStore
}> {
    render() {
        const { uiStore, userStore } = this.props

        return (
            <Modal
                isOpen={uiStore.form !== FormTypes.none}
                onDismiss={uiStore.closeForm}
                isBlocking={false}
                isDarkOverlay={false}
                containerClassName={"formModal-content"}
            >
                <div className="formModal-header">
                    <IconButton
                        text={"Cancel"}
                        onClick={uiStore.closeForm}
                        iconProps={{
                            iconName: "cancel",
                            iconType: IconType.default,
                        }}
                    />
                </div>
                {uiStore.form !== FormTypes.none && (
                    <div className={"formModal-body"}>
                        <UrimForm uiStore={uiStore} userStore={userStore} />
                    </div>
                )}
            </Modal>
        )
    }
}
