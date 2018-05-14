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
import { IBoxData } from '../models/MockData'

// Styling

const shiftDown = {
  // paddingTop: '18.35%',
  // width: '290px',
  // paddingLeft: '75%'
}

const Links = {
  color: '#0078d7',
  cursor: 'pointer'
} as React.CSSProperties

export interface IBoxList {
  boxData: Array<IBoxData>
  addBox(x): void
  openModal(i: IBoxData): void
}

const _items: {}[] = []

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Box Number',
    fieldName: 'boxNumber',
    minWidth: 40,
    maxWidth: 70,
    isResizable: true,
    ariaLabel: 'Operations for name'
  },
  {
    key: 'column2',
    name: '',
    fieldName: 'checkoutBox',
    minWidth: 40,
    maxWidth: 150,
    isResizable: true,
    ariaLabel: 'Operations for checkoutBox'
  },
]

// --------------------------------------------------------------------------

export function BoxList(props: IBoxList) {
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
        onClick={() =>
          props.addBox({
            key: i,
            BoxIdBarCode: x.BoxIdBarCode,
            Location: x.Location,
            DepId: x.DepId,
            DepartmentName: x.DepartmentName
          })
        }
      >
        + Add Box to Checkout
      </p>
    ),
  }))

  return (
    <div style={shiftDown}>
      <DetailsList
        items={bIdList}
        columns={_columns}
        setKey="set"
        layoutMode={DetailsListLayoutMode.fixedColumns}
        checkboxVisibility={CheckboxVisibility.hidden}
        onRenderRow={(_props, defaultRender) => (
          <div
            key={_props.item.key}
            onClick={()=> {
              props.openModal(props.boxData[_props.item.key])
            }}
          >
            {defaultRender(_props)}
          </div>
        )}
      />
    </div>
  )
}
