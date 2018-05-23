import * as React from 'react'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  CheckboxVisibility,
} from 'office-ui-fabric-react/lib/DetailsList'
import { CreateFolderModal } from './CreateFolderModal'
import { IFolderData, IBoxData } from '../models/MockData'
import { AppStyles } from './Styles'

const Center = {
  textAlign: 'center',
} as React.CSSProperties

export interface IFolderViewProps {
  openModal(i: number): void
  closeModal(): void
  filteredData: Array<IFolderData>
  selectedBox?: IBoxData
  addFolder(x): void
  toggleCreateModal(): void
  boxInCart(boxNumber: number): boolean
}

const columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Folder Name',
    fieldName: 'folderName',
    minWidth: 80,
    maxWidth: 120,
    isResizable: true,
    ariaLabel: 'Operations for name',
  },
  {
    key: 'column2',
    name: '',
    fieldName: 'checkoutFolder',
    minWidth: 60,
    maxWidth: 170,
    isResizable: true,
    ariaLabel: 'Operations for checkoutFolder',
  },
  {
    key: 'column3',
    name: '',
    fieldName: 'createFolder',
    minWidth: 40,
    maxWidth: 120,
    isResizable: true,
    ariaLabel: 'Operations for createFolder',
  },
]

// ----------------------------------------------

export function FolderView(props: IFolderViewProps) {
  const folderIdList = props.filteredData.map((x, i) => ({
    key: i,
    folderName: (
      <p className='ms-fontSize-mPlus ms-fontWeight-light'>
        {x.FolderName}'s Folder
      </p>
    ),
    checkoutFolder: (
      <button
        onClick={() =>
          props.addFolder({
            key: i,
            FolderName: x.FolderName,
            FolderIdBarCode: x.FolderIdBarCode,
            BoxID: x.BoxID,
            Folder_Description: x.Folder_Description,
          })
        }
        // tslint:disable-next-line:max-line-length
        style={{
          ...AppStyles.checkOutButton,
          color:
            props.boxInCart(x.BoxID) || props.boxInCart(x.FolderIdBarCode)
              ? 'gray'
              : '#0078d7',
          cursor:
            props.boxInCart(x.BoxID) || props.boxInCart(x.FolderIdBarCode)
              ? 'not-allowed'
              : 'pointer',
        }}
        className='ms-fontSize-mPlus ms-fontWeight-light'
        disabled={props.boxInCart(x.BoxID)}
      >
        + Add Folder to Checkout
      </button>
    ),
    createFolder: (
      <p
        style={AppStyles.links}
        className='ms-fontSize-mPlus ms-fontWeight-light'
        onClick={props.toggleCreateModal}
      >
        Create Folder
      </p>
    ),
  }))

  return (
    <div>
      <div className='ms-modalExample-header'>
        <h2 style={{...AppStyles.center, marginTop: '6.5px' }} className='ms-font-xl'>
          Folders in Box B{props.selectedBox.BoxIdBarCode}
        </h2>
      </div>
      <div className='ms-modalExample-body' style={AppStyles.scroller}>
        <DetailsList
          items={folderIdList}
          columns={columns}
          setKey='set'
          layoutMode={DetailsListLayoutMode.fixedColumns}
          checkboxVisibility={CheckboxVisibility.hidden}
        />
      </div>
    </div>
  )
}
