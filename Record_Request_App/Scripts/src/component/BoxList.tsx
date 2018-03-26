/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  CheckboxVisibility,
} from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

// Enables microsoft ui icons to appear
initializeIcons()

export interface iBoxList {
    boxData,
    currentDep,
}

const _items: {}[] = [];

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Name',
    fieldName: 'name',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for name'
  },
  {
    key: 'column2',
    name: 'Value',
    fieldName: 'value',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
];

export function BoxList (props: iBoxList) {

    const bIdList = []
    const test = []


    props.boxData.forEach(x => { if(x.DepId == props.currentDep) {
      bIdList.push("B" + x.BoxIdBarCode.toString())
    }})

    // Grab just the BoxIdBarCodes, turn them into a string so I can add a "B" onto it
    // This is how it is stored in the ROC, (as an int with a function adding on a B), so this is why it's done this way

    if (_items.length === 0) {
      bIdList.forEach((x,i) => {
          _items.push({
              key: i,
              name: `Box Number ${x}`,
              value: i,
          });
      })
    }

  {console.log(props.currentDep)}
  {console.log(bIdList)}

    return (
      <div>
        <TextField
          label='Filter by BoxId:'
        />
          <DetailsList
            items={ bIdList }
            columns={ _columns }
            setKey='set'
            layoutMode={ DetailsListLayoutMode.fixedColumns }
            checkboxVisibility={ CheckboxVisibility.hidden }

          />
      </div>
    );


}