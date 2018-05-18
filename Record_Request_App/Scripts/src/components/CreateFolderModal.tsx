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

// ----------------------------------------------

export function CreateFolderModal(props: ICreateFolderModal) {
  const schema = {
    description: `Create a new folder in Box B${props.selectedBox}`,
    type: 'object',
    required: ['folderName', 'folderDescription'],
    properties: {
      parentBox: {
        type: 'number',
        title: 'Parent Box',
        default: props.selectedBox
      },
      folderName: { type: 'string', title: 'Folder Name' },
      folderDescription: { type: 'string', title: 'Folder Description' }
    }
  }
  const uiSchema = {
    folderName: {
      'ui:placeholder': 'i.e. Jaron'
    },
    folderDescription: {
      'ui:widget': 'textarea',
      'ui:placeholder': 'Describe your folder'
    },
    parentBox: {
      'ui:disabled': `B${props.selectedBox}`
    }
  }

  const log = (type) => console.log.bind(console, type)

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

          <div style={AppStyles.center}>
            <Form
              schema={schema}
              uiSchema={uiSchema}
              onChange={log('changed')}
              onSubmit={props.onSubmit}
              onError={log('errors')}
            >
              <div style={AppStyles.center}>
                <PrimaryButton text="Create Folder" type="submit" />
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  )
}
