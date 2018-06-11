import * as React from 'react'
// tslint:disable-next-line:no-submodule-imports
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import {
  DefaultButton,
  PrimaryButton,
  TextField,
  Toggle,
  TooltipHost,
  Label,
  ILabelProps,
} from 'office-ui-fabric-react'
import { IFolderAndBox } from '../../models/App'
import './styles.scss'

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
          <div className={'mainBuffer'}>
            <div className={'ms-modalExample-header'}>
              <h1 className={'ms-font-xl'}>Item Request</h1>
            </div>
            <Label>
              Request Type
              <div className={'helpBuffer'}>
                <TooltipHost
                  content="Temporary requests last 1 business week; Permament requests transfer custody to your department."
                  id=""
                  calloutProps={{ gapSpace: 0 }}
                  className={'item2'}
                >
                  <i className="ms-Icon ms-Icon--Info helpBuffer" />
                </TooltipHost>
              </div>
            </Label>
            <Toggle
              onAriaLabel={'This toggle is checked. Press to uncheck.'}
              offAriaLabel={'This toggle is unchecked. Press to check.'}
              onText={'Permanent'}
              offText={'Temporary'}
              onChanged={props.requestType}
            />
            <Label>
              Delivery Priority
              <div className={'helpBuffer'}>
                <TooltipHost content="Standard: We will get the box to you by the end of the next business day.  Urgent: We will try to get the request to you as soon as possible.">
                  <i className="ms-Icon ms-Icon--Info" />
                </TooltipHost>
              </div>
            </Label>
            <Toggle
              // checked={props.isChecked}
              onAriaLabel={'This toggle is checked. Press to uncheck.'}
              offAriaLabel={'This toggle is unchecked. Press to check.'}
              onText={'Urgent'}
              offText={'Standard'}
              onChanged={props.priority}
              className={'item1'}
            />
            <Label>
              Delivery Instructions
              <div className={'helpBuffer'}>
                <TooltipHost content="This field is usually left blank unless you need the requested items in a certain location at a specific time.">
                  <i className="ms-Icon ms-Icon--Info" />
                </TooltipHost>
              </div>
            </Label>
            <TextField
              multiline={true}
              value={props.deliveryInstructions}
              onChanged={props.updateInstructions}
            />{' '}
            <br />
            <div>
              <PrimaryButton
                text={'Submit'}
                onClick={x => props.submit(props.selectedItems)}
              />
              <PrimaryButton text={'Cancel'} onClick={props.close} className={'breakApart'} />
              <br />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
