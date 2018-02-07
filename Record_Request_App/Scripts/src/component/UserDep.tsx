import * as React from 'react';
import { mockdata } from '../res/mockdata';

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