import React, { useState } from 'react'
import axios from 'axios'
import LoadBackground from './Signin';
import ButtonLoad from './ButtonLoad';
import GetMethod from './GetMethod';
import Todo from './Todo';

export default function App() {
  const [data,SetData]=useState([]);
  React.useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url).then(res=>res.json())
    .then(res=>SetData(res))
  }, [])
  return (
    <div>
      {/* <h3>React-App</h3>
      {
        data.map(item => <div><p>{`${item.id}. ${item.title}`}</p></div>)
      } */}
      {/* <LoadBackground/> */}
      {/* <ButtonLoad/> */}
      {/* <GetMethod/> */}
      <Todo/>
    </div>
  )
}
