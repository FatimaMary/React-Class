import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function GetMethod() {
    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    const [repeat, setRepeat] = useState(false);

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/users/2';
        axios
        .get(url)
        .then((response)=>setUser(response.data));
    }, [])

    const postUser = () => {
        axios
        .post ('https://jsonplaceholder.typicode.com/users', {name: name})
        .then(response=>setUser([...user, response.data]))
        .then(()=> setRepeat(!repeat));
    }

    const updateUser = () => {
        axios
        .put('https://jsonplaceholder.typicode.com/users/2', {name: name})
        .then(response => setUser(response.data));
    }

    // const deleteUser = () => {
    //     axios
    //     .delete(`https://jsonplaceholder.typicode.com/users/${1}`)
    //     .then(response => setUser( response.data));
    // }
  return (
    <div>
         {/* {
            user.map(item=>(
                <p>{item.name}</p>
            ))
        } */}
        {user.name}
        <input placeholder='Enter the Name' name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
        <button onClick={postUser}>POST</button>
        <button onClick={updateUser}>UPDATE</button>
        {/* <Signin name={name}></Signin> */}
        {/* <button onClick={deleteUser}>DELETE</button> */}
    </div>
  )
}
