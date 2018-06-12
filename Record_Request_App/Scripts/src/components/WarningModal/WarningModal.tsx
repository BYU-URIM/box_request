import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import { Modal } from "office-ui-fabric-react/lib/Modal"
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react"

// Styling

const Links = {
  color: "#0078d7",
  cursor: "pointer",
} as React.CSSProperties

export interface IWarningModal {
  close(): void
  continue(): void
}

// ----------------------------------------------

export function WarningModal(props: IWarningModal) {
  return (
    <div>
      <Modal
        isOpen={true}
        isBlocking={false}
        isDarkOverlay={false}
        containerClassName={"ms-modalExample-container"}
      >
        <div className={"ms-modalExample-header"}>
          <h1> Warning </h1>
        </div>
        <div>
          <p>
            You cannot request both folders and boxes in one request. If you
            want to continue and select folders/boxes, then the items currently
            in your checkout will all be removed.
          </p>
        </div>
        <div>
          <PrimaryButton
            text={"Clear Checkout and Continue"}
            onClick={props.continue}
          />
          <PrimaryButton text={"Keep Checkout and Go Back"} onClick={props.close} />
        </div>
      </Modal>
    </div>
  )
}
