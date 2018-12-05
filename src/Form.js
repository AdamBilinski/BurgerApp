import React from 'react';
import Axios from 'axios';

export class Form extends React.Component{
    state = {username: ''}
    
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log()

        Axios.get('https://api.github.com/users/${this.state.username}')
            .then(resp => {
                console.log(resp);
            })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    onChange = {(event) => this.setState({username : event.target.value})}
                    placeholder="Githut username" required/>
                <button type="submit">Add card</button>
            </form>
        )
    }
}