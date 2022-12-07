import React, { Component } from "react";
import { ReactDOM } from "react";


function List(props){
  const  myList = props.myList
  const listItems = myList.map((myList)=> {
    return<li>{myList}</li>
  });
  return(
    <div>
        <h1>Names</h1>
        <ul>{listItems}</ul>
    </div>
  )
}
export default List