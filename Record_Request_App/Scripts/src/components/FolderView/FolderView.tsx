import * as React from 'react'
// tslint:disable-next-line:no-submodule-imports
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import {
  DefaultButton,
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  CheckboxVisibility,
} from 'office-ui-fabric-react'
import { CreateFolderModal } from '../CreateFolderModal/CreateFolderModal'
import { IFolderDataObj, IBoxDataObj } from '../../models/MockData'
import { IFolderAndBox, ModalTypes } from '../../models'
import './styles.scss'

const Center = {
  textAlign: 'center',
} as React.CSSProperties

export interface IFolderViewProps {
  toggleModal(type: ModalTypes): void
  filteredData: Array<IFolderDataObj>
  selectedBox?: IBoxDataObj
  addFolder(item): void
  folderInCheckout(boxNumber: number): boolean
  checkoutStatus(box: IFolderAndBox): string
}

// create column info that goes into fabric ui component

// ----------------------------------------------

export function FolderView(props: IFolderViewProps) {
  const columns: IColumn[] = [
    {
      key: 'column1',
      name: 'Folder Name',
      fieldName: 'FolderName',
      minWidth: 80,
      maxWidth: 120,
      isResizable: true,
      ariaLabel: 'Operations for name',
      onRender: (item: IFolderDataObj) => {
        return <p>{`${item.FolderName}`}</p>
      },
    },
    {
      key: 'column2',
      name: '',
      fieldName: 'checkoutFolder',
      minWidth: 60,
      maxWidth: 170,
      isResizable: true,
      ariaLabel: 'Operations for checkoutFolder',
      onRender: (item: IFolderDataObj) => {
        console.log(props.checkoutStatus(item as IFolderAndBox))
        return props.checkoutStatus(item as IFolderAndBox)[0] === '+' ? (
          <button
            onClick={() => props.addFolder(item)}
            className={'ms-fontSize-mPlus ms-fontWeight-light'}
          >
            {props.checkoutStatus(item as IFolderAndBox)}
          </button>
        ) : (
          props.checkoutStatus(item as IFolderAndBox)
        )
      },
    },
    {
      key: 'column3',
      name: '',
      fieldName: 'createFolder',
      minWidth: 40,
      maxWidth: 120,
      isResizable: true,
      ariaLabel: 'Operations for createFolder',
      onRender: () => (
        <p onClick={() => props.toggleModal(ModalTypes.create)}>
          Create Folder
        </p>
      ),
    },
  ]
  const folderList = props.filteredData.map((folder: IFolderDataObj, i) => ({
    key: folder.FolderIdBarCode,
    checkoutFolder: () => props.addFolder(folder.FolderIdBarCode),
    createFolder: () => props.toggleModal(ModalTypes.create),
    ...folder
  }))

  return (
    <div>
      <div className={'ms-modalExample-header'}>
        <h2 className={'ms-font-xl center'}>
          Folders in Box B{props.selectedBox.BoxIdBarCode}
        </h2>
      </div>
      <div className={'ms-modalExample-body'}>
        <DetailsList
          items={folderList}
          columns={columns}
          compact={true}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          checkboxVisibility={CheckboxVisibility.hidden}
          // tslint:disable-next-line:variable-name
          onRenderRow={(_props, defaultRender) => (
            <div key={_props.item.key}>
              {defaultRender({
                ..._props,
                className:
                  props.folderInCheckout(_props.item.BoxID) ||
                  props.folderInCheckout(_props.item.FolderIdBarCode)
                    ? 'folderrow folderrow-disabled ms-fontSize-mPlus ms-fontWeight-light'
                    : 'folderrow ms-fontSize-mPlus ms-fontWeight-light',
              })}
            </div>
          )}
        />
      </div>
    </div>
  )
}
