import * as React from 'react'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { IBoxData, IFolderData } from './App'

// Styling

const Links = {
  color: '#0078d7',
  cursor: 'pointer'
} as React.CSSProperties

export interface IWarningModal {
    shown: boolean
    close(): void
    continue(): void
}


// ----------------------------------------------

export function WarningModal(props: IWarningModal) {

  return (
    <div>
      <Modal
        isOpen={props.shown}
        isBlocking={false}
        isDarkOverlay={false}
        containerClassName="ms-modalExample-container"
      >
        <div className='ms-modalExample-header'>
            <h1> Warning </h1>
        </div>
        <div>
            <p>You cannot request both folders and boxes in one request.  If you want to continue and select folders/boxes, then the items currently in your cart will all be removed.</p>
        </div>
        <div>
            <PrimaryButton text="Clear Cart and Continue" onClick={props.continue}/>
            <PrimaryButton text="Keep Cart and Go Back" onClick={props.close}/>
        </div>
      </Modal>
    </div>
  )
}
