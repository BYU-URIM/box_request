import * as React from "react"
import Modal from "office-ui-fabric-react/lib/Modal"
import { inject, observer } from "mobx-react"
import { FormTypes } from "../../models"
import { User, UIStore } from "../../stores"
import { FormControlGroup } from ".."
import { IconButton, IconType } from "office-ui-fabric-react"
import "./styles.scss"
@inject("uiStore")
@observer
export class FormModal extends React.Component<{
    uiStore?: UIStore
}> {
    render() {
        const { uiStore } = this.props

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
                        <FormControlGroup
                            formStore={this.props.uiStore.formStore}
                        />
                    </div>
                )}
            </Modal>
        )
    }
}
