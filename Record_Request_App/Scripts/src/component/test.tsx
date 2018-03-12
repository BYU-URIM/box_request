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
    const groups=[]
    const folders = []
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
    function needsToChangeFirst (selectedBox) {
        if(selectedBox >= 0) {
            
            // variable that grabs the whole object based on if its BoxId is equal to the selected BoxId
            let boxParentObject = data.filter(x =>  x.BoxId === selectedBox)  //selectedBoxId[0])

            folders.push({key: boxParentObject[0].BoxId, name: `Folder ${boxParentObject[0].FolderId}`})        
            {clg(folders)}
            {clg(boxParentObject)}
    
            // We need to address line 57 (folders.push) so that it can take in numbers dynamically and create a list
        } 
    }

    // create an array of department ids and box ids
    data.forEach(y => { boxList.push({ DepartmentId: y.DepartmentId, BoxId: y.BoxId })})

    // create a list of boxes within each department
    boxList.forEach(x => { if(x.DepartmentId == departmentId) {depBoxList.push(x.BoxId)}})
    {clg(depBoxList)}
    // compares all boxes with the selected box
    let depAndBoxId = boxList.filter(x => { if(x.DepartmentId === departmentId ) return x})
    {clg(depAndBoxId)}
    
    // grabs the boxId of currently selected department, used for comparison purposes
    let selectedBoxId = depAndBoxId.map(x => { return x.BoxId })
    {clg(selectedBoxId)}
    needsToChangeFirst(selectedBoxId[0])
    
    boxList.forEach(x => { 
        if(x.DepartmentId == departmentId) 
        {groups.push(
            {
                key: x.BoxId,
                name: `Box ${x.BoxId}`,
                count: folders.length,
            }
        )}
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
