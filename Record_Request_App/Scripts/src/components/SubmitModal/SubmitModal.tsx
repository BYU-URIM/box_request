import * as React from 'react'
// tslint:disable-next-line:no-submodule-imports
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import {
  DefaultButton,
  PrimaryButton,
  TextField,
  Toggle,
} from 'office-ui-fabric-react'
import { IFolderAndBox } from '../../models/App'

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
        containerClassName={'ms-modalExample-container'}
      >
        <div>
          <div>
            <div className={'ms-modalExample-header'}>
              <h1 className={'ms-font-xl'}>Item Request</h1>
            </div>
            <Toggle
              label={'Request Type'}
              onAriaLabel={'This toggle is checked. Press to uncheck.'}
              offAriaLabel={'This toggle is unchecked. Press to check.'}
              onText={'Permanent'}
              offText={'Temporary'}
              onChanged={props.requestType}
            />
            <Toggle
              // checked={props.isChecked}
              label={'Delivery Priority'}
              onAriaLabel={'This toggle is checked. Press to uncheck.'}
              offAriaLabel={'This toggle is unchecked. Press to check.'}
              onText={'Urgent'}
              offText={'Standard'}
              onChanged={props.priority}
            />
            <TextField
              multiline={true}
              label={'Delivery Instructions'}
              value={props.deliveryInstructions}
              onChanged={props.updateInstructions}
            />{' '}
            <br />
            <div>
              <PrimaryButton
                text={'Submit'}
                onClick={x => props.submit(props.selectedItems)}
              />
              <PrimaryButton text={'Cancel'} onClick={props.close} />
              <br />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
