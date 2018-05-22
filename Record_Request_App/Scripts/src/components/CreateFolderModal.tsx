import * as React from 'react'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { IFolderData, IBoxData } from '../models/MockData'
import { TextField } from 'office-ui-fabric-react'
import { PrimaryButton } from 'office-ui-fabric-react'
import { folderData } from '../res/folderdata'
import { AppStyles } from '../components'
import Form from 'react-jsonschema-form'

export interface ICreateFolderModal {
  selectedBox?: number
  closeModal(): void
  onSubmit(formData): void
}

const MyTextField = (props: any) => {
  console.log(props)

  return (
    <TextField
      type='text'
      value={props.value}
      onChanged={(event: any) => props.onChange(event)}
      multiline={props.schema.multiline}
      errorMessage={
        props.schema.rawErrors && props.schema.rawErrors.length > 0
          ? props.schema.rawErrors[0]
          : undefined
      }
      // errorMessage={ 'error' }
    />
  )
}
const DisabledLabel = (props: any) => <h2>{props.value}</h2>
// ----------------------------------------------

export function CreateFolderModal(props: ICreateFolderModal) {
  const schema = {
    type: 'object',
    required: ['folderName', 'folderDescription'],
    properties: {
      parentBox: {
        type: 'number',
        title: 'Parent Box',
        default: props.selectedBox,
      },
      folderName: {
        type: 'string',
        title: 'Folder Name',
        multiline: false,
      },
      folderDescription: {
        type: 'string',
        title: 'Folder Description',
        multiline: true,
      },
    },
  }
  const uiSchema = {
    folderName: {
      'ui:placeholder': 'i.e. Jaron',
      'ui:widget': 'textField',
    },
    folderDescription: {
      'ui:placeholder': 'Describe your folder',
      'ui:widget': 'textField',
    },
    parentBox: {
      'ui:disabled': true,
      'ui:widget': 'disabledLabel',
    },
  }
  const widgets = {
    textField: MyTextField,
    disabledLabel: DisabledLabel,
  }
  return (
    <div>
      <Modal
        isOpen={true}
        onDismiss={props.closeModal}
        isBlocking={false}
        isDarkOverlay={false}
      >
        <div style={AppStyles.createModal}>
          <h1 style={AppStyles.center} className='ms-font-xl'>
            {' '}
            Create Folder{' '}
          </h1>

          <div style={AppStyles.center}>
            <Form
              schema={schema}
              uiSchema={uiSchema}
              onSubmit={props.onSubmit}
              widgets={widgets}
            >
              <div style={AppStyles.center}>
                <PrimaryButton text='Create Folder' type='submit' />
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  )
}
