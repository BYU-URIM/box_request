import * as React from 'react'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  CheckboxVisibility,
} from 'office-ui-fabric-react/lib/DetailsList'
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import { IBoxData } from '../models/MockData'
import { AppStyles } from './Styles'

export interface IBoxListProps {
  boxData: Array<IBoxData>
  addBox(x): void
  openModal(i: IBoxData): void
  boxInCart(boxNumber: number): boolean
}

// const _items: {}[] = []

const columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Box Number',
    fieldName: 'boxNumber',
    minWidth: 40,
    maxWidth: 70,
    isResizable: true,
    ariaLabel: 'Operations for name',
  },
  {
    key: 'column2',
    name: '',
    fieldName: 'checkoutBox',
    minWidth: 40,
    maxWidth: 150,
    isResizable: true,
    ariaLabel: 'Operations for checkoutBox',
  },
]

// --------------------------------------------------------------------------

export function BoxList(props: IBoxListProps) {
  // Grab just the BoxIdBarCodes, turn them into a string so I can add a "B" onto it
  // This is how it is stored in the ROC, (as an int with a function adding on a B), so this is why it's done this way
  // Also checks to make sure we are grabbing boxes within the selected department

  const bIdList = props.boxData.map((x, i) => ({
    key: i,
    boxNumber: (
      <p>
        {`B${x.BoxIdBarCode}`}
      </p>
    ),
    checkoutBox: (
      <p
        onClick={() =>
          props.addBox({
            key: i,
            BoxIdBarCode: x.BoxIdBarCode,
            Location: x.Location,
            DepId: x.DepId,
            DepartmentName: x.DepartmentName,
          })
        }
      >
        + Add Box to Checkout
      </p>
    ),
  }))

  return (
    <DetailsList
      items={bIdList}
      columns={columns}
      layoutMode={DetailsListLayoutMode.fixedColumns}
      checkboxVisibility={CheckboxVisibility.hidden}
      compact={true}
      // Go deep to shorten cell height; work with children to apply gray out if box is selected

      onRenderItemColumn={(item, index, column) =>
        <div className='ms-fontSize-mPlus ms-fontWeight-light' style={AppStyles.test} onClick={() => props.openModal(props.boxData[item.key])}

        >
        {column.key === 'column1' ? (
          <div>
            {item.boxNumber.props.children}
          </div>
        ) : (
          <div
            onClick={() => {
              item.checkoutBox.props.onClick()
            }}
            style={{
              ...AppStyles.links,
              color: props.boxInCart(
                Number(item.boxNumber.props.children.slice(1))
              )
                ? 'grey'
                : '#0078d7',
              cursor: props.boxInCart(
                Number(item.boxNumber.props.children.slice(1))
              )
                ? 'not-allowed'
                : 'pointer',
            }}
          >
            {item.checkoutBox.props.children}
          </div>
        )}
        </div>
      }
    />
  )
}