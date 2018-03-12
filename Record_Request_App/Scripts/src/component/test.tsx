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
    const test = []
    const _folders = [
        {
            GroupFolderId: 2,
            FolderName: 'Folder1'
        },
        {
            key: 4,
            name: 'Folder2'
        },
        {
            key: 5,
            name: 'Folder3'
        },
        {
            key: 1,
            name: 'Folder4'
        },
        {
            key: 9,
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
    
    // function  waits for depAndBoxId and selectedBoxId to have values. Creates an array with folders within the box.
    function needsToChangeFirst (selectedBox) {
        if(selectedBox >= 0) {
            
            // variable that grabs the whole object based on if its BoxId is equal to the selected BoxId
            let boxParentObject = data.filter(x =>  x.BoxId === selectedBox)  //selectedBoxId[0])
              
            folders.push({key: boxParentObject[0].BoxId, name: boxParentObject[0].FolderId})        
    
        } 
    }

    // create an array of department ids and box ids
    data.forEach(y => { boxList.push({ DepartmentId: y.DepartmentId, BoxId: y.BoxId })})
    
    // create a list of boxes within each department
    boxList.forEach(x => { if(x.DepartmentId == departmentId) {depBoxList.push(x.BoxId)}})
    
    // create a list of BoxId's and FolderId's (which are made up of objects with keys and names)
    // data.forEach(y => { folders.push({ 
    //     FolderGroupId: y.BoxId, 
    //     FolderId: y.FolderId  })})    

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

window["stuff"]= {
    Folders: test,
    boxList: boxList}

// {clg(folders)}
// {clg(boxList)}

// variable that compares all boxes with the selected box
let depAndBoxId = boxList.filter(x => { if(x.DepartmentId === departmentId ) return x})

// variable that grabs the boxId of currently selected department, used for comparison purposes
let selectedBoxId = depAndBoxId.map(x => { return x.BoxId })


// {clg(selectedBoxId)}
// {clg(depAndBoxId)}
// {clg(needsToChangeFirst(selectedBoxId[0]))}

needsToChangeFirst(selectedBoxId[0])

{clg(folders)}
{clg(_folders)}

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
