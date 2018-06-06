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
import { AppStyles } from '../Styles'
import { IFolderDataObj, IBoxDataObj } from '../../models/MockData'
import { IFolderAndBox, ModalTypes } from '../../models'

const Center = {
  textAlign: 'center',
} as React.CSSProperties

export interface IFolderViewProps {
  toggleModal(type: ModalTypes): void
  filteredData: Array<IFolderDataObj>
  selectedBox?: IBoxDataObj
  addFolder(x): void
  folderInCheckout(boxNumber: number): boolean
  checkoutStatus(box: IFolderDataObj): string
}

// create column info that goes into fabric ui component
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
            Location: x.BoxID,
          })
        }
      >
        {props.checkoutStatus(x)}
      </button>
    ),
    createFolder: (
      <p onClick={() => props.toggleModal(ModalTypes.create)}>Create Folder</p>
    ),
  }))

  return (
    <div>
      <div className={'ms-modalExample-header'}>
        <h2
          style={{ ...AppStyles.center, marginTop: '6.5px' }}
          className={'ms-font-xl'}
        >
          Folders in Box B{props.selectedBox.BoxIdBarCode}
        </h2>
      </div>
      <div className={'ms-modalExample-body'} style={AppStyles.scroller}>
        <DetailsList
          items={folderIdList}
          columns={columns}
          compact={true}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          checkboxVisibility={CheckboxVisibility.hidden}
          onRenderItemColumn={(item, index, column) => (
            <div
              style={AppStyles.test}
              className={'ms-fontSize-mPlus ms-fontWeight-light'}
            >
              {column.key === 'column1' ? (
                <div>
                  {`${item.folderName.props.children.FolderName}'s Folder`}
                </div>
              ) : column.key === 'column2' ? (
                <div
                  onClick={
                    item.checkoutFolder.props.children ===
                    '+ Add Item to Checkout'
                      ? () => item.checkoutFolder.props.onClick()
                      : undefined
                  }
                  style={{
                    color:
                      props.folderInCheckout(
                        item.folderName.props.children.BoxID
                      ) ||
                      props.folderInCheckout(
                        item.folderName.props.children.FolderIdBarCode
                      ) ||
                      item.folderName.props.children !==
                        '+ Add Item to Checkout'
                        ? 'gray'
                        : '#0078d7',
                    cursor:
                      props.folderInCheckout(
                        item.folderName.props.children.BoxID
                      ) ||
                      props.folderInCheckout(
                        item.folderName.props.children.FolderIdBarCode
                      ) ||
                      item.folderName.props.children !==
                        '+ Add Item to Checkout'
                        ? 'not-allowed'
                        : 'pointer',
                  }}
                >
                  {item.checkoutFolder.props.children}
                </div>
              ) : (
                <div
                  onClick={() => item.createFolder.props.onClick()}
                  style={AppStyles.links}
                >
                  {item.createFolder.props.children}
                </div>
              )}
            </div>
          )}
        />
      </div>
    </div>
  )
}

// import * as React from 'react'

// import { Modal } from 'office-ui-fabric-react/lib/Modal'
// import {
//   DefaultButton,
//   DetailsList,
//   DetailsListLayoutMode,
//   Selection,
//   IColumn,
//   CheckboxVisibility,
// } from 'office-ui-fabric-react'
// import { CreateFolderModal } from './CreateFolderModal'
// import { AppStyles } from './Styles'
// import { IFolderDataObj, IBoxDataObj } from '../models/MockData'

// export interface IFolderViewProps {
//   openModal(i: number): void
//   closeModal(): void
//   filteredData: Array<IFolderDataObj>
//   selectedBox?: IBoxDataObj
//   addFolder(x: IFolderDataObj): void
//   toggleCreateModal(): void
//   itemInCheckout(boxNumber: number): boolean
//   checkoutStatus(box: IFolderDataObj): string
// }

// export function FolderView(props: IFolderViewProps) {

//   const columns: IColumn[] = [
//     {
//       key: 'column1',
//       name: 'Folder Name',
//       fieldName: 'folderName',
//       minWidth: 80,
//       maxWidth: 120,
//       isResizable: true,
//       ariaLabel: 'Operations for name',
//       onRender: (item: IFolderDataObj) => <p>{item.FolderName}</p>,
//     },
//     {
//       key: 'column2',
//       name: '',
//       fieldName: 'checkoutFolder',
//       minWidth: 60,
//       maxWidth: 170,
//       isResizable: true,
//       ariaLabel: 'Operations for checkoutFolder',
//       onRender: (item: IFolderDataObj) => {
//           return props.checkoutStatus(item)[0] === '+' ? (
//             <button onClick={() => props.addFolder(item)} className={'ms-fontSize-mPlus ms-fontWeight-light'}>
//               {console.log(props.checkoutStatus(item))} hey
//             </button>
//           ) : (
//             props.checkoutStatus(item)
//         )
//       }
//     },
//     {
//       key: 'column3',
//       name: '',
//       fieldName: 'createFolder',
//       minWidth: 40,
//       maxWidth: 120,
//       isResizable: true,
//       ariaLabel: 'Operations for createFolder',
//     },
//   ]

//   const folderIdList = props.filteredData.map((x, i) => ({
//     key: i,
//     folderName: <p>{x.FolderName}</p>,
//     checkoutFolder: (
//       <p
//         onClick={() =>
//           props.addFolder({
//             key: i,
//             FolderName: x.FolderName,
//             FolderIdBarCode: x.FolderIdBarCode,
//             BoxID: x.BoxID,
//             Folder_Description: x.Folder_Description,
//             Location: x.BoxID,
//           })
//         }
//       >
//         {props.checkoutStatus(x)}
//       </p>
//     ),
//     createFolder: <p onClick={props.toggleCreateModal}>Create Folder</p>,
//   }))

//   return (
//     <div>
//       <div className={'ms-modalExample-header'}>
//         <h2
//           style={{ ...AppStyles.center, marginTop: '6.5px' }}
//           className={'ms-font-xl'}
//         >
//           Folders in Box B{props.selectedBox.BoxIdBarCode}
//         </h2>
//       </div>
//       <div className={'ms-modalExample-body'} style={AppStyles.scroller}>
//         <DetailsList
//           items={folderIdList}
//           columns={columns}
//           compact={true}
//           layoutMode={DetailsListLayoutMode.fixedColumns}
//           checkboxVisibility={CheckboxVisibility.hidden}
//           // tslint:disable-next-line:variable-name
//           onRenderRow={(_props, defaultRender) => (
//             <div>
//               {defaultRender({
//                 ..._props,
//                 className:
//                   props.itemInCheckout(_props.item.BoxID) ? 'boxrow boxrow-disabled ms-fontSize-mPlus ms-fontWeight-light'
//                   : 'boxrow ms-fontSize-mPlus ms-fontWeight-light',
//               })}
//             </div>
//           )}

//         />
//       </div>
//     </div>
//   )
// }
