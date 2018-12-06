
import React from "react";
import ReactDOM from "react-dom";
import { Person } from "./Person";
import { CardList } from "./CardList";
import { Form } from "./Form"

export class Index extends React.Component {
    state = {
      cards : []
    }

    addNewCard = (cardInfo) => {
      this.setState(prevState => ({
        cards: prevState.cards.concat(cardInfo)
      }));
    }

  render() {
    return (
      <div>
        <Person />
        <Form onSubmit = {this.addNewCard}/>
        <CardList cards={this.state.cards} />
      </div>
    )
  }
};

ReactDOM.render(<Index />, document.getElementById("index"));