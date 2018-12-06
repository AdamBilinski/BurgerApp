import React from 'react';

export function Card(props) {
    return(
        <div style={{margin: '1em'}}>
            <img width="75" src={props.avatar_url}></img>
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div>
                    {props.name} ({props.login})
                </div>
                <div>
                    {props.company}
                </div>
            </div>
        </div>
    )
};