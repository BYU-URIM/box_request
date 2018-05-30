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
    folderName: <p>{x}</p>,
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
      >
        + Add Folder to Checkout
      </button>
    ),
    createFolder: <p onClick={props.toggleCreateModal}>Create Folder</p>,
  }))

  return (
    <div>
      <div className='ms-modalExample-header'>
        <h2
          style={{ ...AppStyles.center, marginTop: '6.5px' }}
          className='ms-font-xl'
        >
          Folders in Box B{props.selectedBox.BoxIdBarCode}
        </h2>
      </div>
      <div className='ms-modalExample-body' style={AppStyles.scroller}>
        <DetailsList
          items={folderIdList}
          columns={columns}
          compact={true}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          checkboxVisibility={CheckboxVisibility.hidden}
          onRenderItemColumn={(item, index, column) =>
            column.key === 'column1' ? (
              <div
                style={AppStyles.test}
                className='ms-fontSize-mPlus ms-fontWeight-light'
              >
                {`${item.folderName.props.children.FolderName}'s Folder`}
              </div>
            ) : column.key === 'column2' ? (
              <div
                onClick={(() => item.checkoutFolder.props.onClick())}
                style={{
                  ...AppStyles.test,
                  color:
                    props.boxInCart(item.folderName.props.children.BoxID) ||
                    props.boxInCart(
                      item.folderName.props.children.FolderIdBarCode
                    )
                      ? 'gray'
                      : '#0078d7',
                  cursor:
                    props.boxInCart(item.folderName.props.children.BoxID) ||
                    props.boxInCart(
                      item.folderName.props.children.FolderIdBarCode
                    )
                      ? 'not-allowed'
                      : 'pointer',
                }}
                className='ms-fontSize-mPlus ms-fontWeight-light'
              >
                {item.checkoutFolder.props.children}
              </div>
            ) : (
              <div
                onClick={() => item.createFolder.props.onClick()}
                style={{ ...AppStyles.links, ...AppStyles.test }}
                className='ms-fontSize-mPlus ms-fontWeight-light'
              >
                {item.createFolder.props.children}
              </div>
            )
          }
        />
      </div>
    </div>
  )
}
