/* tslint:disable:no-unused-variable */
import * as React from 'react'
/* tslint:enable:no-unused-variable */
import {
  TextField,
  Icon,
  PrimaryButton,
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  CheckboxVisibility,
} from 'office-ui-fabric-react'

import { IFolderAndBox, ModalTypes } from '../models/App'
import { AppStyles } from './Styles'

export interface IRequestCartProps {
  selectedItems: Map<number, IFolderAndBox>
  type: string
  removeItemFromCheckout(itemRef: number): void
  toggleModal(x): void
}

const columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Request Cart',
    fieldName: 'pendingItemRequests',
    minWidth: 70,
    maxWidth: 120,
    isResizable: true,
    ariaLabel: 'Operations for pendingItemRequests',
  },
  {
    key: 'column2',
    name: 'Type',
    fieldName: 'type',
    minWidth: 40,
    maxWidth: 70,
    isResizable: true,
    ariaLabel: 'Operations for type',
  },
  {
    key: 'column3',
    name: '',
    fieldName: 'removeItem',
    minWidth: 40,
    maxWidth: 40,
    isResizable: true,
    ariaLabel: 'Operations for removeItem',
  },
]

// --------------------------------------------------------------------------

export function RequestCart(props: IRequestCartProps) {
  const checkoutList = Array.from(props.selectedItems.values()).map(
    (itemRef: IFolderAndBox, index) => ({
      key: `${index}`,
      pendingItemRequests: (
        <p>
          {itemRef.hasOwnProperty('BoxIdBarCode')
            ? `B${itemRef.BoxIdBarCode}`
            : `${itemRef.FolderName}'s Folder`}{' '}
        </p>
      ),
      type: <p>{itemRef.BoxIdBarCode ? 'Box' : 'Folder'}</p>,
      removeItem: (
        <p
          onClick={() =>
            props.removeItemFromCheckout(
              itemRef.FolderIdBarCode | itemRef.BoxIdBarCode
            )
          }
        >
          <i
            className={'ms-Icon ms-Icon--Cancel'}
            style={AppStyles.links}
            aria-hidden={'true'}
          />
        </p>
      ),
    })
  )

  return (
    <div>
      <DetailsList
        items={checkoutList}
        columns={columns}
        setKey={'set'}
        compact={true}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        checkboxVisibility={CheckboxVisibility.hidden}
        onRenderItemColumn={(item, index, column) =>
          column.key === 'column1' ? (
            <div
              className={'ms-fontSize-mPlus ms-fontWeight-light'}
              style={AppStyles.test}
            >
              {item.pendingItemRequests.props.children[0]}
            </div>
          ) : column.key === 'column2' ? (
            <div
              className={'ms-fontSize-mPlus ms-fontWeight-light'}
              style={AppStyles.test}
            >
              {item.type.props.children}
            </div>
          ) : (
            <div
              style={AppStyles.test}
              onClick={() => item.removeItem.props.onClick()}
            >
              {item.removeItem.props.children}
            </div>
          )
        }
      />
      <div style={AppStyles.center}>
        <PrimaryButton
          disabled={!(props.selectedItems.size > 0)}
          text={'Submit Request'}
          onClick={() => props.toggleModal(ModalTypes.submit)}
        />
      </div>
    </div>
  )
}
