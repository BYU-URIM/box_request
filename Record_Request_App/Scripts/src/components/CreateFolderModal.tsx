import * as React from 'react'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { IFolderData, IBoxData } from '../models/MockData';
import { TextField } from 'office-ui-fabric-react'
import { PrimaryButton } from 'office-ui-fabric-react'
import { folderData } from '../res/folderdata'

export interface ICreateFolderModal {
  selectedBox?: number
  createNewFolder(x): void
  closeModal(): void
  updateName(e): void
  updateDescription(e): void
  newDescriptionInput: string
  newNameInput: string

}

// ----------------------------------------------

export function CreateFolderModal(props: ICreateFolderModal) {
  return (
    <div>
      <Modal
        isOpen={true}
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
          value={props.newNameInput}
          onChanged={props.updateName}
        />
        <TextField
          label="Folder Description"
          placeholder="Describe your folder"
          required={true}
          multiline={true}
          value={props.newDescriptionInput}
          onChanged={props.updateDescription}
        />
        <PrimaryButton text="Create Folder" onClick={props.createNewFolder}/>
      </Modal>
    </div>
  )
}
