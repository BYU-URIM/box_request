import * as React from 'react'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  CheckboxVisibility
} from 'office-ui-fabric-react/lib/DetailsList'
import { CreateFolderModal } from './CreateFolderModal'
import { IFolderData, IBoxData } from '../models/MockData';

// Styling

const Links = {
  color: '#0078d7',
  cursor: 'pointer'
} as React.CSSProperties

export interface IFolderViewProps {
  openModal(i: number): void
  closeModal(): void
  filteredData: Array<IFolderData>
  selectedBox?: IBoxData
  addFolder(x): void
  createNewFolder(x): void
  toggleCreateModal(): void
  // showCreateModal: boolean
  updateFolderName(e): void
  newNameInput: string
  updateFolderDescription(e): void
  newDescriptionInput: string
}

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Folder Name',
    fieldName: 'folderName',
    minWidth: 100,
    maxWidth: 275,
    isResizable: true,
    ariaLabel: 'Operations for name'
  },
  {
    key: 'column2',
    name: '',
    fieldName: 'checkoutFolder',
    minWidth: 100,
    maxWidth: 275,
    isResizable: true,
    ariaLabel: 'Operations for checkoutFolder'
  },
  {
    key: 'column3',
    name: '',
    fieldName: 'createFolder',
    minWidth: 100,
    maxWidth: 275,
    isResizable: true,
    ariaLabel: 'Operations for createFolder'
  }
]

// ----------------------------------------------

export function FolderView(props: IFolderViewProps) {
  const folderIdList = props.filteredData.map((x, i) => ({
    key: i,
    folderName: (
      <p className="ms-fontSize-mPlus ms-fontWeight-light">{x.FolderName}</p>
    ),
    checkoutFolder: (
      <p
        style={Links}
        className="ms-fontSize-mPlus ms-fontWeight-light"
        onClick={() => props.addFolder({ key: i, FolderName: x.FolderName, FolderIdBarCode: x.FolderIdBarCode, BoxID: x.BoxID, Folder_Description: x.Folder_Description })}
      >
        + Add Folder to Checkout
      </p>
    ),
    createFolder: (
      <p
        style={Links}
        className="ms-fontSize-mPlus ms-fontWeight-light"
        onClick={props.toggleCreateModal}
      >
        Create Folder
      </p>
    )
  }))

  return (
    <div>
        <div className="ms-modalExample-header">
          Box B{props.selectedBox.BoxIdBarCode}
        </div>
        <div className="ms-modalExample-body">
          <DetailsList
            items={folderIdList}
            columns={_columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.fixedColumns}
            checkboxVisibility={CheckboxVisibility.hidden}
          />

        </div>
    </div>
  )
}
