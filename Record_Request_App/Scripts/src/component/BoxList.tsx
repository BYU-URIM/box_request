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

// Enables microsoft ui icons to appear
initializeIcons()

// Styling

const squeezeTable = {
  marginTop: '2.5%',
  marginLeft: '25%',
  marginRight: '25%'
} as React.CSSProperties

const Links = {
  color: "#0078d7"
  
} as React.CSSProperties

export interface iBoxList {
  boxData
  currentDep
}

const _items: {}[] = []

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Box Number',
    fieldName: 'boxNumber',
    minWidth: 100,
    maxWidth: 250,
    isResizable: true,
    ariaLabel: 'Operations for name'
  },
  {
    key: 'column2',
    name: '',
    fieldName: 'checkoutBox',
    minWidth: 100,
    maxWidth: 250,
    isResizable: true,
    ariaLabel: 'Operations for checkoutBox'
  },
  {
    key: 'column3',
    name: '',
    fieldName: 'viewFolders',
    minWidth: 100,
    maxWidth: 250,
    isResizable: true,
    ariaLabel: 'Operations for viewFolders'
  }
]

export function BoxList(props: iBoxList) {
  console.log(props.boxData.filter((x, i) => x.DepId == props.currentDep))
  const bIdList = props.boxData
    .filter((x, i) => x.DepId == props.currentDep)
    .map((x, i) => ({
      key: i,
      boxNumber: <p className="ms-fontSize-mPlus ms-fontWeight-light">{'B' + x.BoxIdBarCode.toString()}</p>,
      checkoutBox: <p style={Links} className="ms-fontSize-mPlus ms-fontWeight-light">+ Add Box</p>,
      viewFolders: <p style={Links} className="ms-fontSize-mPlus ms-fontWeight-light">View Folders</p>
    }))

  // Grab just the BoxIdBarCodes, turn them into a string so I can add a "B" onto it
  // This is how it is stored in the ROC, (as an int with a function adding on a B), so this is why it's done this way
  // Also checks to make sure we are grabbing boxes within the selected department

  return (
    <div style={squeezeTable}>
      <TextField label="Filter by BoxId:" />
      <DetailsList
        items={bIdList}
        columns={_columns}
        setKey="set"
        layoutMode={DetailsListLayoutMode.fixedColumns}
        checkboxVisibility={CheckboxVisibility.hidden}
      />
    </div>
  )
}
