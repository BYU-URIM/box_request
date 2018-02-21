import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import {
    Checkbox,
    ICheckboxStyles,
    ICheckboxProps
  } from 'office-ui-fabric-react/lib/Checkbox';
  import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons()

export interface iBoxes {
    mockData
    Dep
}

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
        <div>
            <ul>
                {depBoxList.map((x, i) => {
                    return(
                            <Checkbox
                                key={i}
                                label={x}
                            />
                    );
                })}
            </ul>

            <PrimaryButton>Request</PrimaryButton>

        </div>
    )
}
