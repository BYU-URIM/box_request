import * as React from 'react'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { IFolderData, IBoxData } from '../models/MockData';
import { TextField } from 'office-ui-fabric-react'
import { PrimaryButton } from 'office-ui-fabric-react'
import { folderData } from '../res/folderdata'
import { AppStyles } from '../components'

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
      >
      <div style={AppStyles.createModal}>
        <h1 style={AppStyles.center} className="ms-font-xl"> Create Folder </h1>
        <TextField
          label="Parent Box"
          disabled={true}
          value={`B${props.selectedBox.toString()}`}
        /> <br/>
        <TextField
          label="Folder Name"
          required={true}
          placeholder="i.e. Jarod"
          value={props.newNameInput}
          onChanged={props.updateName}
        /> <br />
        <TextField 
          label="Folder Name"
          required={true}
          placeholder='i.e. Jarod'
          value={props.newNameInput}
          onChanged={props.updateName}
          errorMessage='Hey Dummy'
        />
        <TextField
          label="Folder Description"
          placeholder="Describe your folder"
          required={true}
          multiline={true}
          value={props.newDescriptionInput}
          onChanged={props.updateDescription}
        /> <br />

        <div style={AppStyles.center}>
          <PrimaryButton text="Create Folder" onClick={props.createNewFolder}/>
        </div>
      </div>
      </Modal>
    </div>
  )
}
