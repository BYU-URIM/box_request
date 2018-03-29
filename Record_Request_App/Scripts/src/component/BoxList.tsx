/* tslint:disable:no-unused-variable */
import * as React from 'react'
/* tslint:enable:no-unused-variable */
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  CheckboxVisibility
} from 'office-ui-fabric-react/lib/DetailsList'
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import { autobind } from 'office-ui-fabric-react/lib/Utilities'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'

// Styling

const Links = {
  color: '#0078d7'
} as React.CSSProperties

export interface iBoxList {
  boxData
  addBox
}

const _items: {}[] = []

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Box Number',
    fieldName: 'boxNumber',
    minWidth: 100,
    maxWidth: 275,
    isResizable: true,
    ariaLabel: 'Operations for name'
  },
  {
    key: 'column2',
    name: '',
    fieldName: 'checkoutBox',
    minWidth: 100,
    maxWidth: 275,
    isResizable: true,
    ariaLabel: 'Operations for checkoutBox'
  },
  {
    key: 'column3',
    name: '',
    fieldName: 'viewFolders',
    minWidth: 100,
    maxWidth: 275,
    isResizable: true,
    ariaLabel: 'Operations for viewFolders'
  }
]

// --------------------------------------------------------------------------

export function BoxList(props: iBoxList) {
  // Grab just the BoxIdBarCodes, turn them into a string so I can add a "B" onto it
  // This is how it is stored in the ROC, (as an int with a function adding on a B), so this is why it's done this way
  // Also checks to make sure we are grabbing boxes within the selected department

  const bIdList = props.boxData.map((x, i) => ({
    key: i,
    boxNumber: (
      <p className="ms-fontSize-mPlus ms-fontWeight-light">
        {'B' + x.BoxIdBarCode.toString()}
      </p>
    ),
    checkoutBox: (
      <p
        style={Links}
        className="ms-fontSize-mPlus ms-fontWeight-light"
        onClick={() => props.addBox(i)}
      >
        + Add Box to Checkout
      </p>
    ),
    viewFolders: (
      <p style={Links} className="ms-fontSize-mPlus ms-fontWeight-light">
        View Folders
      </p>
    )
  }))

  return (
    <DetailsList
      items={bIdList}
      columns={_columns}
      setKey="set"
      layoutMode={DetailsListLayoutMode.fixedColumns}
      checkboxVisibility={CheckboxVisibility.hidden}
    />
  )
}
