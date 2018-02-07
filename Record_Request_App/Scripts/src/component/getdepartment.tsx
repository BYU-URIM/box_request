import * as React from 'react';

export function GetDepartment (props) {

    var arr = []

    for(var i = 0; i < props.mockuser.departments.length; i++)
    {
        for(var u = 0; u < props.mockdata.length; u++)
        {
            if(props.mockdata[u].DepartmentId === props.mockuser.departments[i]) {
                var str = props.mockdata[u].DepartmentName
                arr.push(str)
            }
        }
    }

    return(
        <div>
            <ul>
                {arr.map((x, i) => {
                    return (
                        <li key={i}>
                            {x}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}