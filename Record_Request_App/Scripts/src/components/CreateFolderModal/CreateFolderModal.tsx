import * as React from 'react'
// tslint:disable-next-line:no-submodule-imports
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { TextField, Label, PrimaryButton, DefaultButton } from 'office-ui-fabric-react'
import { folderData } from '../../res'
import './styles.scss'

export interface ICreateFolderModal {
  selectedBox?: number
  closeModal(): void
  submitFolder(box): void
  folderNameVal: string
  folderNameError: string
  onNameChange(value): void
}

function buttonDisabler(name, nameError) {
  return name.length === 0 || nameError.length > 1 ? true : false
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
        <div className={'buffer'}>
          <h1 className={'ms-font-xl'}>
            {' '}
            Create Folder{' '}
          </h1>

            <Label>{`Box B${props.selectedBox}`}</Label>
            <br />
            <TextField
              type={'text'}
              label={'Folder Name'}
              description={'Warning: You cannot change this later.'}
              value={props.folderNameVal}
              onChanged={props.onNameChange}
              required={true}
              placeholder={'i.e. Jared'}
              errorMessage={props.folderNameError}
            />

            <br />
          <div className={'modalWidth'}>
            <PrimaryButton
              text={'Create Folder'}
              onClick={box => props.submitFolder(props.selectedBox)}
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