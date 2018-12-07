import React from 'react';
import Axios from 'axios';

export class Form extends React.Component{
    state = {username: '',
                age: 23}
    
    handleSubmit = (event) =>{
        event.preventDefault();
        Axios.get('https://api.github.com/users/' + this.state.username)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({username: ''});
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