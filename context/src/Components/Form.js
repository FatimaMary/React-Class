import React from "react";
import { Consumer } from "./Context";

function Form() {
    return(
        <Consumer>
            {(name) => (<h2>Welcome {name}</h2>)}
        </Consumer>
    )
}

export default Form