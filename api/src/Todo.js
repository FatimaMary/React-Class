import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Todo.css';

let index = 0;

const url = 'https://jsonplaceholder.typicode.com/users';

export default function Todo() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
      .get(url)
      .then(res => setData(res.data));
    }, []);

    const postTodo = () => {
      axios
      .post (url)
      .then(res => setData(res.data))
    }

   
  return (
    <div className='container-todo'>
      {
      data.map(item=>(
                <p>{item.id}</p>
            ))
        }
            </div>
  )
}
