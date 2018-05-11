import * as React from 'react'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { IFolderData, IBoxData } from '../models/MockData'
import { TextField } from 'office-ui-fabric-react'
import { Toggle } from 'office-ui-fabric-react'
import { IFolderAndBox } from '../models/App'

export interface ISubmitModal {
  close(): void
  selectedItems: Map<number, IFolderAndBox>
  submit(x): any
  updateInstructions(e): void
  priority(): void
  requestType(): void
  deliveryInstructions: string
}

// ----------------------------------------------

export function SubmitModal(props: ISubmitModal) {
  return (
    <div>
      <Modal
        isOpen={true}
        isBlocking={false}
        isDarkOverlay={false}
        containerClassName="ms-modalExample-container"
      >
        <div className="ms-modalExample-header">
          <h1>Item Request</h1>
        </div>
        <div>
          <Toggle
            label="Request Type"
            onAriaLabel="This toggle is checked. Press to uncheck."
            offAriaLabel="This toggle is unchecked. Press to check."
            onText="Permanent"
            offText="Temporary"
            onChanged={props.requestType}
          />
          <Toggle
            // checked={props.isChecked}
            label="Delivery Priority"
            onAriaLabel="This toggle is checked. Press to uncheck."
            offAriaLabel="This toggle is unchecked. Press to check."
            onText="Urgent"
            offText="Standard"
            onChanged={props.priority}
          />
          <TextField
            multiline={true}
            label="Delivery Instructions"
            value={props.deliveryInstructions}
            onChanged={props.updateInstructions}
          />
        </div>
        <div>
          <PrimaryButton
            text="Submit"
            onClick={(x) => props.submit(props.selectedItems)}
          />
          <PrimaryButton text="Cancel" onClick={props.close} />
        </div>
      </Modal>
    </div>
  )
}
