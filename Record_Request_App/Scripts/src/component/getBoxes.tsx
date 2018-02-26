import * as React from 'react';
import {
    Checkbox,
    ICheckboxStyles,
    ICheckboxProps
  } from 'office-ui-fabric-react/lib/Checkbox';
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
export interface iBoxes {
    mockData
    Dep
}

// console.log shortcut
const clg = (v) => console.log(v)

export function GetBoxes (props: iBoxes) {
    const data = props.mockData
    const departmentId = props.Dep
    const boxList = []
    const depBoxList = []

    data.forEach(y => { boxList.push({ DepartmentId: y.DepartmentId, BoxId: y.BoxId })})

    boxList.forEach(x => { if(x.DepartmentId == departmentId) {depBoxList.push(x.BoxId)}})


    {clg(boxList)}
    {clg(departmentId)}
    {clg(depBoxList)}

    return(
        <div style={bodyStyle}>
            <h3> Box ID: </h3>
            <ul>
                {depBoxList.map((x, i) => {
                    return(
                        <li style={boxItem}>
                            <Checkbox
                                key={i}
                                label={x}
                                onChange={(ev, checked)=>console.log(checked)}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
