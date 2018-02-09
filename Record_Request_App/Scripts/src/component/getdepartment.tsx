import * as React from 'react';

const clg = (v) => console.log(v)
export function GetDepartment (props) {

    const userDepartments = props.mockUser.departments 
    const departmentInfo = props.mockData

    // becomes the array of the below function
    const departmentObj = []

    // iterate through json department object and pull out unique departments
    departmentInfo.forEach(outer => {
        if(!departmentObj.find(inner => inner.id === outer.DepartmentId)) {
            departmentObj.push({name: outer.DepartmentName, id: outer.DepartmentId})
        }
    })

    // becomes the array of the names of departments the user has access to
    const deps = []

    departmentObj.forEach(outer => {
        if(userDepartments.find(inner => inner === outer.id)) {
            deps.push(outer.name)
        }
    })

    // return the HTML list of the department names associated with the user
    return(
        <div>
            <ul>
                {deps.map((x, i) => {
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