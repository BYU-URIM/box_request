import * as React from 'react'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { IFolderData, IBoxData } from '../models/MockData'

import { TextField } from 'office-ui-fabric-react'
import { Toggle } from 'office-ui-fabric-react'
import { IFolderAndBox } from '../models/App'

// Styling

const Links = {
  color: '#0078d7',
  cursor: 'pointer'
} as React.CSSProperties

export interface ISubmitModal {
  close(): void
  requestType: boolean
  selectedItems: Map<number, IFolderAndBox>
  submit(x): any
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
          {!!props.requestType ? <h1>Box Request</h1> : <h1>Folder Request</h1>}
        </div>
        <div>
          <Toggle
            // checked={ props.isChecked }
            label="Request Type"
            onAriaLabel="This toggle is checked. Press to uncheck."
            offAriaLabel="This toggle is unchecked. Press to check."
            onText="Permanent"
            offText="Temporary"
            // onChanged={props.openWarning}
            // onChanged={props.makeToggle}
          />
          <Toggle
            // checked={props.isChecked}
            label="Delivery Priority"
            onAriaLabel="This toggle is checked. Press to uncheck."
            offAriaLabel="This toggle is unchecked. Press to check."
            onText="Urgent"
            offText="Standard"
            // onChanged={props.openWarning}
            // onChanged={props.makeToggle}
          />
          <TextField multiline={true} label="Delivery Instructions" />
        </div>
        <div>
          <PrimaryButton
            text="Submit"
            onClick={props.submit(props.selectedItems)}
          />
          <PrimaryButton text="Cancel" onClick={props.close} />
        </div>
      </Modal>
    </div>
  )
}
