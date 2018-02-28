/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';

const _columns = [
  {
    key: 'name',
    name: 'Name',
    fieldName: 'name',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true
  }
];
const _items = [
  {
    key: 'a',
    name: 'Folder1'
  },
  {
    key: 'b',
    name: 'Folder2'
  },
  {
    key: '',
    name: 'Folder3'
  },
  {
    key: '1',
    name: 'Folder4'
  },
  {
    key: 'e',
    name: 'Folder5'
  }
];

export class DetailsListGroupedExample extends React.Component<{}, {
  items: {}[];
}> {
  constructor(props: {}) {
    super(props);

    this.state = {
      items: _items
    };
  }

  public render() {
    const { items } = this.state;

    return (
      <Fabric className='foo'>
        <DefaultButton
          onClick={ this._addItem }
          text='Add an item'
        />
        <DetailsList
          items={ items }
          groups={ [
            {
              key: '1',
              name: 'Box 1',
              startIndex: 0,
              count: 2
            },
            {
              key: '2',
              name: 'Box 2',
              startIndex: 2,
              count: 0
            },
            {
              key: '3',
              name: 'Box 3',
              startIndex: 2,
              count: 3
            }
          ] }
          columns={ _columns }
          ariaLabelForSelectAllCheckbox='Toggle selection for all items'
          ariaLabelForSelectionColumn='Toggle selection'
          groupProps={ {
            showEmptyGroups: true
          } }
        />
      </Fabric>
    );
  }

  private _addItem() {
    const items = this.state.items;

    this.setState({
      items: items.concat([{
        key: 'item-' + items.length,
        name: 'New item ' + items.length,
        color: 'blue'
      }])
    });
  }

}