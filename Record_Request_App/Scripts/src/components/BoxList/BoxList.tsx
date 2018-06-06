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
import { IFolderDataObj, IBoxDataObj } from '../../models/MockData'
import './styles.scss'
import { IFolderAndBox } from '../../models'
export interface IBoxListProps {
  boxData: Array<IBoxDataObj>
  addBox(x): void
  openModal(i: IBoxDataObj): void
  boxInCheckout(boxNumber: number): boolean
  checkoutStatus(box: IFolderAndBox): string
}

// --------------------------------------------------------------------------

export function BoxList(props: IBoxListProps) {
  const columns: IColumn[] = [
    {
      key: 'column1',
      name: 'Box Number',
      fieldName: 'boxNumber',
      minWidth: 40,
      maxWidth: 250,
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
        return props.checkoutStatus(item as IFolderAndBox)[0] === '+' ? (
          <button
            onClick={() => props.addBox(item)}
            className={'ms-fontSize-mPlus ms-fontWeight-light'}
          >
            {props.checkoutStatus(item as IFolderAndBox)}
          </button>
        ) : (
          props.checkoutStatus(item as IFolderAndBox)
        )
      },
    },
  ]

  const bIdList = props.boxData.map((box, i) => ({
    key: i,
    boxNumber: <p>{`B${box.BoxIdBarCode}`}</p>,
    checkoutBox: (
      <p
        onClick={() =>
          props.addBox({
            key: i,
            BoxIdBarCode: box.BoxIdBarCode,
            Location: box.Location,
            DepId: box.DepId,
            DepartmentName: box.DepartmentName,
          })
        }
      >
        {props.checkoutStatus(box as IFolderAndBox)}
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
              props.boxInCheckout(_props.item.BoxIdBarCode) === true
                ? 'boxrow boxrow-disabled ms-fontSize-mPlus ms-fontWeight-light'
                : 'boxrow ms-fontSize-mPlus ms-fontWeight-light',
          })}
        </div>
      )}
    />
  )
}
