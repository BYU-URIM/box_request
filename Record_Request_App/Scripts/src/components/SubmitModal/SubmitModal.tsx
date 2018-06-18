import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import { Modal } from "office-ui-fabric-react/lib/Modal"
import {
    PrimaryButton,
    TextField,
    Toggle,
    TooltipHost,
    Label,
    IconButton,
    IconType,
} from "office-ui-fabric-react"
import { ModalTypes } from "../../models/App"
import "./styles.scss"
import { observer } from "mobx-react"
import { RequestState } from "../../stores/RequestStore/RequestState"

export interface ISubmitModal {
    submit(x): any
    updateInstructions(e): void
    priority(): void
    requestType(): void
    deliveryInstructions: string
    requestState: RequestState
}

// ----------------------------------------------

export const SubmitModal = observer((props: ISubmitModal) => {
    return (
        <Modal
            isOpen={true}
            onDismiss={() => (props.requestState.modal = ModalTypes.none)}
            isBlocking={false}
            isDarkOverlay={false}
        >
            <div className={"submit-modal-wrapper"}>
                <div className={"submit-modal-header"}>
                    <label className={"ms-font-xl"}>Item Request</label>
                    <IconButton
                        text={"Cancel"}
                        onClick={() =>
                            (props.requestState.modal = ModalTypes.none)
                        }
                        iconProps={{
                            iconName: "cancel",
                            iconType: IconType.default,
                        }}
                    />
                </div>
                <div className={"submit-modal-body"}>
                    <Label>
                        Request Type
                        <TooltipHost
                            content="Temporary requests last 1 business week; Permament requests transfer custody to your department."
                            id=""
                            calloutProps={{ gapSpace: 0 }}
                            className={"item2"}
                        >
                            <i className="ms-Icon ms-Icon--Info" />
                        </TooltipHost>
                    </Label>
                    <Toggle
                        onAriaLabel={
                            "This toggle is checked. Press to uncheck."
                        }
                        offAriaLabel={
                            "This toggle is unchecked. Press to check."
                        }
                        onText={"Permanent"}
                        offText={"Temporary"}
                        onChanged={props.requestType}
                    />
                    <Label>
                        Delivery Priority
                        <TooltipHost content="Standard: We will get the box to you by the end of the next business day.  Urgent: We will try to get the request to you as soon as possible.">
                            <i className="ms-Icon ms-Icon--Info" />
                        </TooltipHost>
                    </Label>
                    <Toggle
                        onAriaLabel={
                            "This toggle is checked. Press to uncheck."
                        }
                        offAriaLabel={
                            "This toggle is unchecked. Press to check."
                        }
                        onText={"Urgent"}
                        offText={"Standard"}
                        onChanged={props.priority}
                        className={"item1"}
                    />
                    <Label>
                        Delivery Instructions
                        <TooltipHost content="This field is usually left blank unless you need the requested items in a certain location at a specific time.">
                            <i className="ms-Icon ms-Icon--Info" />
                        </TooltipHost>
                    </Label>
                    <TextField
                        multiline={true}
                        autoAdjustHeight={true}
                        value={props.deliveryInstructions}
                        onChanged={props.updateInstructions}
                    />
                </div>
                <div className={"submit-modal-footer"}>
                    <PrimaryButton
                        text={"Submit"}
                        onClick={x => props.submit(props.requestState.cart)}
                    />
                </div>
            </div>
        </Modal>
    )
})
