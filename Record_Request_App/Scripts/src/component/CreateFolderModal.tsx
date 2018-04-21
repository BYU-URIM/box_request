import * as React from 'react'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { IBoxData, IFolderData } from './App'
import { TextField } from 'office-ui-fabric-react'
import { PrimaryButton } from 'office-ui-fabric-react'

export interface ICreateFolderModal {
  showModal: boolean
  selectedBox?: number
  createNewFolder(x): void
  closeModal(): void
}

// ----------------------------------------------

export function CreateFolderModal(props: ICreateFolderModal) {
  return (
    <div>
      <Modal
        isOpen={props.showModal}
        onDismiss={props.closeModal}
        isBlocking={false}
        isDarkOverlay={false}
        containerClassName="ms-modalExample-container"
      >
        <TextField
          label="Parent Box"
          disabled={true}
          value={`B${props.selectedBox.toString()}`}
        />
        <TextField
          label="Folder Name"
          required={true}
          placeholder="i.e. Jarod"
        />
        <TextField label="Folder Description" placeholder="Describe your folder" />
        <PrimaryButton
            text="Create Folder"
        />
      </Modal>
    </div>
  )
}
