import * as React from "react"
import Modal from "office-ui-fabric-react/lib/Modal"
import { inject, observer } from "mobx-react"
import { ModalTypes } from "../../models"
import { User, UIStore } from "../../stores"
import { FormControlGroup } from ".."
import "./styles.scss"
import { IconButton, IconType } from "office-ui-fabric-react"
@inject("uiStore")
@observer
export class UrimModal extends React.Component<{
    uiStore?: UIStore
}> {
    render() {
        const { uiStore } = this.props

        return (
            <div className={"urimModal-wrapper"}>
                <Modal
                    isOpen={uiStore.modal !== ModalTypes.none}
                    onDismiss={uiStore.clearModal}
                    isBlocking={false}
                    isDarkOverlay={false}
                >
                    <div className="urimModal-header">
                        <IconButton
                            text={"Cancel"}
                            onClick={uiStore.clearModal}
                            iconProps={{
                                iconName: "cancel",
                                iconType: IconType.default,
                            }}
                        />
                    </div>
                    {uiStore.modal !== ModalTypes.none && (
                        <div className={"urimModal-content"}>
                            <FormControlGroup
                                formStore={this.props.uiStore.formStore}
                            />
                        </div>
                    )}
                </Modal>
            </div>
        )
    }
}
