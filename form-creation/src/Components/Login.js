import './LoginUi.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="Profile">
             <AccountCircleIcon />
           </div>
         </div>
         <div>
           <h3>Login Page</h3>
           <div className='login1'>
             <EmailIcon/>
             <input type="text" placeholder="Enter User Name" className="name"/>
           </div>
           <div className="second-input">
             <LockIcon/>
             <input type="password" placeholder="Enter Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
         </div>
       </div>
     </div>
    </div>
  );
}

export default Login;