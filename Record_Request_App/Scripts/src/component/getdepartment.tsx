import * as React from 'react';

export interface iUserDeps {
    mockUser
    mockData
    changeSelectedDep
}

export function GetDepartment (props:iUserDeps) {
    const deps = []                                                         // Department name that shows up on the dropdown list
    const depsid = []                                                       // department id, part of the object that links the user departments with list of available departments
    const departmentObj = []                                                // Object that gives a name to the departments of the user
    const userDepartments = props.mockUser.departments                      // props, gives department permissions of user
    const departmentInfo = props.mockData                                   // props, all of the data about departments and boxes

    // iterate through json department object and pull out unique departments
    departmentInfo.forEach(outer => {
        if(!departmentObj.find(inner => inner.id === outer.DepartmentId)) {
            departmentObj.push({name: outer.DepartmentName, id: outer.DepartmentId})
        }
    })

    // iteratoes through each object of name and id, compares the id with the user departments, applies a department name with the users dep ID
    departmentObj.forEach(outer => {
        if(userDepartments.find(inner => inner === outer.id)) {
            deps.push(outer.name);
            depsid.push(outer.id);
        }
    })
    
    // return the HTML dropdown menu of the department names associated with the user
    return(
        <div>

            <form action = ''>
        
                <h1>Select one of your available departments:</h1>

                <fieldset>

                    <select onChange={props.changeSelectedDep} defaultValue="">

                        <option 
                            value=""
                            selected disabled>
                                Departments
                        </option>

                        {deps.map((x, i) => {
                            return (
                                <option 
                                    key={i} 
                                    value={depsid[i]}>
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


// const changeDep = (e) => {
//     console.log('e: ' + e.target.value )
//     console.log(deps[e.target.value])
// }  I think I can remove this function because it is now passed as props to this component