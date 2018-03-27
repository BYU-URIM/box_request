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

const squeezeList = {
  marginTop: '2.5%',
  marginLeft: '77.5%',
  marginRight: '2.5%'
} as React.CSSProperties

const Links = {
  color: '#0078d7'
} as React.CSSProperties

export interface iRequestCart {
  boxData
  currentDep
}

const _items: {}[] = []

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Items',
    fieldName: 'pendingItemRequests',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for pendingItemRequests'
  },
]

const listedRequestItems = []

// --------------------------------------------------------------------------

export function RequestCart(props: iRequestCart) {
  // Grab just the BoxIdBarCodes, turn them into a string so I can add a "B" onto it
  // This is how it is stored in the ROC, (as an int with a function adding on a B), so this is why it's done this way
  // Also checks to make sure we are grabbing boxes within the selected department

  const itemList = props.boxData
    .filter((x, i) => x.DepId == props.currentDep)
    .map((x, i) => ({
      key: i,
      boxNumber: (
        <p className="ms-fontSize-mPlus ms-fontWeight-light">
          { listedRequestItems } <span><i className="ms-Icon--alert2"></i></span>
        </p>
      ),
    }))

  return (
    <div style={squeezeList}>
      <DetailsList
        items={itemList}
        columns={_columns}
        setKey="set"
        layoutMode={DetailsListLayoutMode.fixedColumns}
        checkboxVisibility={CheckboxVisibility.hidden}
      />
    </div>
  )
}