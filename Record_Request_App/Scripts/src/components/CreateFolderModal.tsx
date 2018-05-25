import * as React from 'react'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { IFolderData, IBoxData } from '../models/MockData'
import { TextField } from 'office-ui-fabric-react'
import { PrimaryButton } from 'office-ui-fabric-react'
import { folderData } from '../res/folderdata'
import { AppStyles } from '../components'

export interface ICreateFolderModal {
  selectedBox?: number
  closeModal(): void
  // onSubmit(formData): void
  folderNameVal: string
  folderNameError: string
  onNameChange(value): void
}

function buttonDisabler(name, nameError) {
  if (
    name.length === 0 ||
    nameError.length > 1
  ) {
    return true
  } else {
    return false
  }
}

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
          <h1 style={AppStyles.center} className="ms-font-xl">
            {' '}
            Create Folder{' '}
          </h1>

          <div style={{...AppStyles.center, width: '225px'}}>
            <TextField
              type="text"
              label="Folder Name"
              description="Warning: You cannot change this later."
              value={props.folderNameVal}
              onChanged={props.onNameChange}
              required={true}
              placeholder="i.e. Jared"
              errorMessage={props.folderNameError}
            />

            <br />
            <PrimaryButton
              text="Create Folder"
              disabled={buttonDisabler(
                props.folderNameVal,
                props.folderNameError
              )}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}
