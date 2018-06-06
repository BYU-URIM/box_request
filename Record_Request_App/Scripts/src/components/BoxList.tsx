import * as React from 'react'
import {
  TextField,
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  CheckboxVisibility,
  getNativeProps,
} from 'office-ui-fabric-react'
import { IFolderDataObj, IBoxDataObj } from '../models/MockData'
import './appstyles.scss'
export interface IBoxListProps {
  boxData: Array<IBoxDataObj>
  addBox(x): void
  openModal(i: IBoxDataObj): void
  boxInCart(boxNumber: number): boolean
  checkoutStatus(box: IBoxDataObj): string
}

// --------------------------------------------------------------------------

export function BoxList(props: IBoxListProps) {
  const columns: IColumn[] = [
    {
      key: 'column1',
      name: 'Box Number',
      fieldName: 'boxNumber',
      minWidth: 40,
      maxWidth: 70,
      isResizable: true,
      ariaLabel: 'Operations for name',
      onRender: (item: IBoxDataObj) => <p>{`B${item.BoxIdBarCode}`}</p>,
    },
    {
      key: 'column2',
      name: '',
      fieldName: 'checkoutBox',
      minWidth: 40,
      maxWidth: 150,
      isResizable: true,
      ariaLabel: 'Operations for checkoutBox',
      onRender: (item: IBoxDataObj) => {
        return props.checkoutStatus(item)[0] === '+' ? (
          <button onClick={() => props.addBox(item)} className={'ms-fontSize-mPlus ms-fontWeight-light'}>
            {props.checkoutStatus(item)}
          </button>
        ) : (
          props.checkoutStatus(item)
        )
      },
    },
  ]

  const bIdList = props.boxData.map((x, i) => ({
    key: i,
    boxNumber: <p>{`B${x.BoxIdBarCode}`}</p>,
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
        {props.checkoutStatus(x)}
      </p>
    ),
  }))

  return (
    
    <DetailsList
      items={props.boxData}
      columns={columns}
      layoutMode={DetailsListLayoutMode.fixedColumns}
      checkboxVisibility={CheckboxVisibility.hidden}
      // tslint:disable-next-line:variable-name
      onRenderRow={(_props, defaultRender) => (
        <div
          key={_props.item.key}
          onClick={() => {
            props.openModal(_props.item)
          }}
        >
          {defaultRender({
            ..._props,
            className:
              props.boxInCart(_props.item.BoxIdBarCode) === true
                ? 'boxrow boxrow-disabled ms-fontSize-mPlus ms-fontWeight-light'
                : 'boxrow ms-fontSize-mPlus ms-fontWeight-light',
          })}
        </div>
      )}
    />
  )
}
