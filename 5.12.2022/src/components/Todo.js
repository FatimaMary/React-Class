import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Todo.css';

let index = 0;

export default function Todo() {
    const [todo, setTodo] = useState([]);
    const [description, setDescription] = useState();
    const [task, setTask] = useState();
    const navigate = useNavigate();

  const LoggingOut = () =>{
    navigate("/dashboard");
    localStorage.removeItem("UserName");
    localStorage.removeItem("Password");
  }

    function CreateTodo(event) {
        event.preventDefault()
        setTodo(oldTodo => {
          setTask('')
          setDescription ('')
          return [...oldTodo, {display: ("Task Name: " + task +"  Description: " + description), id: index++}]
        })
      }

      function deleteItem(itemID) {
        setTodo(oldTodo => oldTodo.filter(item => item.id !== itemID))
      }
    
  return (
    <div className='container-todo'>
        <h3>Create Todo App</h3>
        <form onSubmit={CreateTodo} className="form-todo">
            <input type="text" placeholder='Enter To do' value={task} onChange={(e) => setTask(e.target.value)}/>
            <textarea value={description} onChange={(e) =>setDescription(e.target.value)}></textarea>
            <button type='submit'>Add Todo</button>
        </form>
        <ol>
            {todo.map((item) => {
                return(
                <div>
                    <li>{item.display}</li>
                    <button onClick={() => deleteItem(item.id)} className="delete-btn">Delete</button>
                </div>)
            })}
        </ol>
        <button onClick={LoggingOut} className="logout-btn">LogOut</button>
    </div>
  )
}
