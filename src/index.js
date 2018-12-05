
import React from "react";
import ReactDOM from "react-dom";
import { Person } from "./Person";
import { CardList } from "./CardList";
import { Form } from "./Form"

export class Index extends React.Component {
    state = {
      cards : [
        {
          name: "Adam Bilinski",
          company: "IHS Markit",
          avatar_url: "https://avatars2.githubusercontent.com/u/45371818?v=4"
        }
      ]
    }

    addNewCard = (cardInfo) => {
      console.log(cardInfo);
    }

  render() {
    return (
      <div>
        <p>Hi ho Hello React2!</p>
        <Person />
        <Form onSubmit = {this.addNewCard}/>
        <CardList cards={this.state.cards} />
      </div>
    )
  }
};

ReactDOM.render(<Index />, document.getElementById("index"));