import * as React from 'react';

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
                        <li key={i}>
                            Box: {x}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
