import * as React from 'react';

const headingStyle = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "15"
  } as React.CSSProperties

export interface iGreeting {
    name: string
    departmentid: number[]
}

export function Greeting (props:iGreeting) {
    return (
        <div style={headingStyle}>

            <h2 className="ms-font-l"> Welcome, {props.name}</h2>

        
        </div>

        
    )
}
