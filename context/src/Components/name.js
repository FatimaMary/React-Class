import React from "react";
// import ChangeName from "./component1";
import Change from './change'

export default function Name(props) {
    return(
      <React.Fragment>
        <Change name={props.name}/>
      </React.Fragment>
    )
  }