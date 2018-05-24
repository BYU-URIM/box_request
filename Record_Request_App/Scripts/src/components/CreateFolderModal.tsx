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
  console.log(props.value)
  return (
    <TextField
      type='text'
      value={props.value}
      onChanged={(event: any) => props.onChange(event)}
      multiline={props.schema.multiline}
      required={true}
      errorMessage={ props.value === undefined ? '' : props.value.length < 50 ? '' : `The length of the input value should be less than 50, actual is ${props.value.length}.`  }
      // onGetErrorMessage={ this.getErrorMessage }
    />

  )
}
const DisabledLabel = (props: any) => <h2>{props.value}</h2>

// const tooLongTooShortError = (props:any) => ( props.value === undefined ? '' : props.value.length < 50 ? '' : `The length of the input value should be less than 50, 
// actual is ${props.value.length}.` )

// const getErrorMessage(value: string): string {
//   return value.length < 3 ? '' : `The length of the input value should be less than 3, actual is ${value.length}.`
// }
// ----------------------------------------------

export function CreateFolderModal(props: ICreateFolderModal) {

  function transformErrors(errors) {
    return errors.map(error => {
      if (error.name === 'pattern') {
        error.message = 'Only letters are allowed'
      }
      return error
    })
  }

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
        pattern: '^[A-Za-z]+$',
      },
      folderDescription: {
        type: 'string',
        title: 'Folder Description',
        multiline: true,
        pattern: '^[A-Za-z]+$',
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
              transformErrors={transformErrors}
              showErrorList={false}
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

