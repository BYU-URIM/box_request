import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
  import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

// Styling
const bodyStyle = {
    display: "block",
    justifyContent: "center",
    marginRight: "29%",
    marginLeft: "29%",
} as React.CSSProperties

const boxItem = {
    padding: "2",
    listStyleType: "none",
}

// Enables microsoft ui icons to appear
initializeIcons()

// Interface for iBoxes
export interface iList {
    mockData
    Dep
}

// console.log shortcut
const clg = (v) => console.log(v)

export function Multilist (props: iList) {
    const data = props.mockData
    const departmentId = props.Dep
    const boxList = []
    const depBoxList = []
    const _folders = [
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
    ]
    const _columns = [
        {
            key: 'mList1',
            name: 'Department Record Boxes',
            fieldName: 'name',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        }
    ];
    
    // create an array of department ids and box ids
    data.forEach(y => { boxList.push({ DepartmentId: y.DepartmentId, BoxId: y.BoxId })})
    
    // create a list of boxes within each department
    boxList.forEach(x => { if(x.DepartmentId == departmentId) {depBoxList.push(x.BoxId)}})
    
    _folders.forEach(x => {})
    
    const groups=[]
    
    boxList.forEach(x => { 
        if(x.DepartmentId == departmentId) 
        {groups.push(
            {
                key: x.BoxId,
                name: `Box ${x.BoxId}`,
                count: _folders.length,
            }
        )}
    })

    {clg(boxList)}
    {clg(departmentId)}
    {clg(depBoxList)}
    {clg(groups)}

    return(
        <Fabric className='bodyStyle'>
            <DefaultButton
                text='Add a folder'
            />
            <DetailsList
                items={ _folders }
                groups={ groups }
                columns= { _columns }
                ariaLabelForSelectAllCheckbox='Toggle selection for all items'
                ariaLabelForSelectionColumn='Toggle selection'
                groupProps={{
                    showEmptyGroups: true
                }}
            />
        </Fabric>
    )
}