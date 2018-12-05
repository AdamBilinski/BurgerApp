import React from 'react';

export class Form extends React.Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Githut username"/>
                <button type="submit">Add card</button>
            </form>
        )
    }
}