import './LoginUi.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName =  e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  }

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  return (
    <div className="main">
     <div className="sub-main">
       <form onSubmit={handleSubmit}>
         {/* <div className="imgs">
           <div className="Profile">
             <AccountCircleIcon />
           </div>
         </div> */}
         <div>
         <h3>Registration Form</h3>
           <div className='login1'>
             <PermIdentityRoundedIcon/>
             <input type="text" placeholder="Enter Your Name" className="name" value={name} onChange={(e) => setName(e.target.value)}/>
           </div>
           <div className='login1'>
             <EmailIcon/>
             <input type="email" placeholder=" Email" className="name" value={email} onChange={(e) => setEmail(e.target.value)}/>
           </div>
           <div className="second-input">
             <LockIcon/>
             <input type="password" placeholder="Create Password" className="name" value={password} onChange={(e) => setPassword(e.target.value)}/>
           </div>
          <div className="login-button">
          <button>Register</button>
          </div>
         </div>
       </form>
     </div>
    </div>
  );
}

export default Register;