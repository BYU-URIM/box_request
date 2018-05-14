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

const Scroller = {
  overflowY: 'auto',
  height: '600px',
  marginTop: '5.8%',
} as React.CSSProperties

const Links = {
  color: '#0078d7',
  cursor: 'pointer'
} as React.CSSProperties

const Center = {
  textAlign: 'center',
} as React.CSSProperties

export interface IFolderViewProps {
  openModal(i: number): void
  closeModal(): void
  filteredData: Array<IFolderData>
  selectedBox?: IBoxData
  addFolder(x): void
  createNewFolder(x): void
  toggleCreateModal(): void
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
    minWidth: 80,
    maxWidth: 120,
    isResizable: true,
    ariaLabel: 'Operations for name'
  },
  {
    key: 'column2',
    name: '',
    fieldName: 'checkoutFolder',
    minWidth: 60,
    maxWidth: 170,
    isResizable: true,
    ariaLabel: 'Operations for checkoutFolder'
  },
  {
    key: 'column3',
    name: '',
    fieldName: 'createFolder',
    minWidth: 40,
    maxWidth: 120,
    isResizable: true,
    ariaLabel: 'Operations for createFolder'
  }
]

// ----------------------------------------------

export function FolderView(props: IFolderViewProps) {
  const folderIdList = props.filteredData.map((x, i) => ({
    key: i,
    folderName: (
      <p className="ms-fontSize-mPlus ms-fontWeight-light">{x.FolderName}'s Folder</p>
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
          <h2 style={Center} className="ms-font-xl">Folders in Box B{props.selectedBox.BoxIdBarCode}</h2>
        </div>
        <div className="ms-modalExample-body" style={Scroller}>
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
