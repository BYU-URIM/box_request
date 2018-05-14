/* tslint:disable:no-unused-variable */
import * as React from 'react'
/* tslint:enable:no-unused-variable */
import { TextField, Icon } from 'office-ui-fabric-react'
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  CheckboxVisibility
} from 'office-ui-fabric-react/lib/DetailsList'
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import { autobind } from 'office-ui-fabric-react/lib/Utilities'
import { IBoxData } from '../models/MockData';
import { IFolderAndBox } from '../models/App';

// Styling

const shiftDown = {
  // paddingTop: '19%'
}

const Links = {
  color: '#0078d7',
  cursor: 'pointer'
} as React.CSSProperties

export interface IRequestCartProps {
  selectedItems: Map<number, IFolderAndBox>
  type: string
  removeItemFromCheckout(itemRef: number): void
}

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Request Cart',
    fieldName: 'pendingItemRequests',
    minWidth: 70,
    maxWidth: 120,
    isResizable: true,
    ariaLabel: 'Operations for pendingItemRequests'
  },
  {
    key: 'column2',
    name: 'Type',
    fieldName: 'type',
    minWidth: 40,
    maxWidth: 70,
    isResizable: true,
    ariaLabel: 'Operations for type'
  },
  {
    key: 'column3',
    name: '',
    fieldName: 'removeItem',
    minWidth: 40,
    maxWidth: 40,
    isResizable: true,
    ariaLabel: 'Operations for removeItem'
  }
]

// --------------------------------------------------------------------------

export function RequestCart(props: IRequestCartProps) {
  const checkoutList = Array.from(props.selectedItems.values()).map((itemRef: IFolderAndBox, index) => ({
    key: `${index}`,
    pendingItemRequests: (
      <p className="ms-fontSize-mPlus ms-fontWeight-light">{ itemRef.hasOwnProperty('BoxIdBarCode') ? `B${itemRef.BoxIdBarCode}` : `${itemRef.FolderName}'s Folder`}  </p> 
    ),
    type: <p className="ms-fontSize-mPlus ms-fontWeight-light">{
      itemRef.BoxIdBarCode ? 'Box' : 'Folder'
    }</p>,
    removeItem: (
      <p onClick={() => props.removeItemFromCheckout(itemRef.BoxIdBarCode | itemRef.FolderIdBarCode)}>
        <i
          className="ms-Icon ms-Icon--Cancel"
          style={Links}
          aria-hidden="true"
        />
      </p>
    ), 
  }))

  return (
    <div style={shiftDown}>
      <DetailsList
        items={checkoutList}
        columns={_columns}
        setKey="set"
        layoutMode={DetailsListLayoutMode.fixedColumns}
        checkboxVisibility={CheckboxVisibility.hidden}
      />
    </div>
  )
}
