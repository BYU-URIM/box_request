import * as React from 'react';
import { mockData } from '../res/mockdata';

export function DepList (props) {
    return (
        <div>
            <ul>
                {props.items.map((x, i) => {
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