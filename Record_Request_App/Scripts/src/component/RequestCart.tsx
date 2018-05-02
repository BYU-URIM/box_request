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
import { IBoxData } from './App'

// Styling

const Links = {
  color: '#0078d7',
  cursor: 'pointer'
} as React.CSSProperties

export interface IRequestCart {
  selectedItems: Array<string>
  type: string
  removeItemFromCheckout(itemRef: number): void
}

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Request Cart',
    fieldName: 'pendingItemRequests',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for pendingItemRequests'
  },
  {
    key: 'column2',
    name: 'Type',
    fieldName: 'type',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for type'
  },
  {
    key: 'column3',
    name: '',
    fieldName: 'removeItem',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for removeItem'
  }
]

// --------------------------------------------------------------------------

export function RequestCart(props: IRequestCart) {
  const checkoutList = props.selectedItems.map((itemRef, index) => ({
    key: `${index}`,
    pendingItemRequests: (
      <p className="ms-fontSize-mPlus ms-fontWeight-light">{itemRef}</p>
    ),
    type: <p className="ms-fontSize-mPlus ms-fontWeight-light">{props.type}</p>,
    removeItem: (
      <p onClick={() => props.removeItemFromCheckout(index)}>
        <i
          className="ms-Icon ms-Icon--Cancel"
          style={Links}
          aria-hidden="true"
        />
      </p>
    )
  }))

  return (
    <div>
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
