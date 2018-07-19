import * as React from "react"
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
import { RequestForm } from "../../stores"

export interface ISubmitModalProps {
    submit(): void
    requestForm: RequestForm
    modal: ModalTypes
}

// ----------------------------------------------

export const SubmitModal = observer((props: ISubmitModalProps) => {
    return (
        <div className={"submit-modal-wrapper"}>
            <div className={"submit-modal-header"}>
                <label className={"ms-font-xl"}>Item Request</label>
                <IconButton
                    text={"Cancel"}
                    onClick={() => (props.modal = ModalTypes.none)}
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
                    onAriaLabel={"This toggle is checked. Press to uncheck."}
                    offAriaLabel={"This toggle is unchecked. Press to check."}
                    onText={"Permanent"}
                    offText={"Temporary"}
                    onChanged={event => (props.requestForm.permanent = event)}
                />
                <Label>
                    Delivery Priority
                    <TooltipHost content="Standard: We will get the box to you by the end of the next business day.  Urgent: We will try to get the request to you as soon as possible.">
                        <i className="ms-Icon ms-Icon--Info" />
                    </TooltipHost>
                </Label>
                <Toggle
                    onAriaLabel={"This toggle is checked. Press to uncheck."}
                    offAriaLabel={"This toggle is unchecked. Press to check."}
                    onText={"Urgent"}
                    offText={"Standard"}
                    onChanged={event => (props.requestForm.urgent = event)}
                />
                <Label>
                    Delivery Instructions
                    <TooltipHost content="This field is usually left blank unless you need the requested items in a certain location at a specific time.">
                        <i className="ms-Icon ms-Icon--Info" />
                    </TooltipHost>
                </Label>
                <TextField
                    type={"text"}
                    multiline={true}
                    autoAdjustHeight={true}
                    value={props.requestForm.deliveryInstructions}
                    onChanged={instructions =>
                        (props.requestForm.deliveryInstructions = instructions)
                    }
                    errorMessage={props.requestForm.errorMessage}
                />
            </div>
            <div className={"submit-modal-footer"}>
                <PrimaryButton text={"Submit"} onClick={props.submit} />
            </div>
        </div>
    )
})

export default SubmitModal
