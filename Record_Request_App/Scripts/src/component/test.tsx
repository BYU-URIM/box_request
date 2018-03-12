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
    const depBoxList = []
    const groups=[]
    let folders = []
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
    
    // function  waits for depAndBoxId and selectedBoxId to have values. Creates an array with folders within the box.
    function boxSetup (box) {
            
        box["folderStartIndex"] = folders.length
        box["folderCount"] = box.FolderId.length
        folders = folders.concat(box.FolderId.map((id, index) => (
            {key: index, name: `Folder ${id}`}
        )))

    }

    const myarray: number[] = []
    const otherarray: Array<number> = []

    

    // create a list of boxes within each department
    data.forEach(x => { if(x.DepartmentId == departmentId) {depBoxList.push(x)}})
    
    depBoxList.forEach(box => boxSetup(box))
    
    depBoxList.forEach(x => { 
        groups.push(
            {
                key: x.BoxId,
                name: `Box ${x.BoxId}`,
                count: x.folderCount,
                startIndex: x.folderStartIndex
            }
        )
    })


    return(
        <Fabric className='bodyStyle'>
            <DefaultButton
                text='Add a folder'
            />
            <DetailsList
                items={ folders }
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
