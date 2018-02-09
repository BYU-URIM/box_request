import * as React from 'react';

export interface iGreeting {
    name: string
    departmentid: number[]
}

export function Greeting (props:iGreeting) {
    return (
        <div className="greeting_card">

            <h2> Welcome, {props.name}</h2>

        
        </div>

        
    )
}
