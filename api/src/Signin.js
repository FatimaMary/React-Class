import React from 'react'

export default function Signin() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios 
        .get("http://127.0.0.1:8000/students/")
        .then(res => this.setData({ data: res.data }))
        .catch(err => console.log(err));
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            <label>Password:</label>
            <input placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button>Submit</button>
        </form>
    </div>
  )
}
