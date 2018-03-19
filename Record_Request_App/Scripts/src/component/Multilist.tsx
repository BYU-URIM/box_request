import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { PrimaryButton } from 'office-ui-fabric-react/lib/components/Button';

// Styling
const bodyStyle = {
    display: "block",
    justifyContent: "center",
    marginRight: "29%",
    marginLeft: "29%",
} as React.CSSProperties

const folderLink = {
    color: "#0078d7"
    
} as React.CSSProperties

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
                                            // id of the currently selected department
    const departmentId = props.Dep
                                            // List of boxes within the department
    const depBoxList = []
                                            // Details List parameter requires a certain layout, that's what "groups" is
    const groups=[]
                                            // folders within a single box
    let folders = []
                                            // Display the name of the currently selected department
    let depName = ""
    
    // filter method that provides the correct selected department name
    data.filter(x => {if(departmentId == x.DepartmentId) depName = x.DepartmentName})

    const _columns = [
        {
            key: 'mList1',
            name: `${depName} Record Boxes`,
            fieldName: 'name',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        }
    ];
    
    // function: takes in a box, checks for and establishes the # of folders it has, gets the folder id's and prints it out as an item
    // underneath its parent box.
    function boxSetup (box) {
            
        box["folderStartIndex"] = folders.length
        if (box.FolderId == null) {
            box["folderCount"] = 0
        }
        else {
            box["folderCount"] = box.FolderId.length
            folders = folders.concat(box.FolderId.map((id, index) => (
                {key: index, name: `Folder ${id}`}
            )))
        }
    }

    // create a list of boxes within each department
    data.forEach(x => { if(x.DepartmentId == departmentId) {depBoxList.push(x)}})
    
    // call the boxSetup function on each box in the department list (of boxes)
    depBoxList.forEach(box => boxSetup(box))
    
    // Use the boxes in the department list to create groups that satisfy the detailed list required parameters
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
            <DetailsList className="is-collapsed expandIsCollapsed_de312bf4"
                items={ folders }
                groups={ groups }
                columns= { _columns }
                ariaLabelForSelectAllCheckbox='Toggle selection for all items'
                ariaLabelForSelectionColumn='Toggle selection'
                groupProps={{
                    showEmptyGroups: true,
                    onRenderHeader: (props, defaultRender)=> (<div className="ms-FocusZone groupHeaderContainer_de312bf4">
                        {defaultRender(props)} <span style={folderLink} className="ms-fontSize-mPlus ms-fontWeight-light">+ Add Folder</span>
                        </div>)

                }}
                
                // Somehow, I need to collapse this.  
                // compact attribute?
                
            />
        </Fabric>
    )
}
