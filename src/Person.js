import React from "react";
import ReactDOM from "react-dom";
import style from "./person.css";

export function Person(){
    return(
        <div className="style.person">
            <h1>Adam</h1>
            <p>Your age is: 25</p>
        </div>
    )
};

ReactDOM.render(<Person/>, document.getElementById("p1"));