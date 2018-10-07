import React from 'react';

const todoItems = (props) => (
    <ul>
        {
            props.items.map((item, key) => {
                return (
                    <div>
                        <li key={key} onClick={() => props.deleted(item)}>{item}</li>
                    </div>
                )
            })
        }
    </ul>
);

export default todoItems;