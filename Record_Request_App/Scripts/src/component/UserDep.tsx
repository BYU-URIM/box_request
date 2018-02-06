import * as React from 'react';

export function UDep (props) {
    
    return (
        <div>
            <ul>
                {props.items.map((x, i) => {
                    return (
                        <li>
                            {x}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
    
}