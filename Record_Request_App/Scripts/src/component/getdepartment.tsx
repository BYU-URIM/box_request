import * as React from 'react';

export interface iUserDeps {
    mockUser
    mockData
}

// const clg = (v) => console.log(v) -- for future use

export function GetDepartment (props:iUserDeps) {
    const deps = []

    const changeDep = (e) => {
        console.log('e: ' + e.target.value )
        console.log(deps[e.target.value])
    }

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

    departmentObj.forEach(outer => {
        if(userDepartments.find(inner => inner === outer.id)) {
            deps.push(outer.name)
        }
    })

    // return the HTML list of the department names associated with the user
    return(
        <div>

            <form action = ''>
                <h1>Select one of your available departments:</h1>

                <fieldset>
                    <select onChange ={(e)=>changeDep(e)}>
                        <option>Departments</option>
                        {deps.map((x, i) => {
                            return (
                                <option key={i} value={i}>
                                    {x}
                                </option>
                            );
                        })}
                    </select>
                </fieldset>
            </form>
        </div>
    )
}