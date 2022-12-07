import './LoginUi.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Register() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         {/* <div className="imgs">
           <div className="Profile">
             <AccountCircleIcon />
           </div>
         </div> */}
         <div>
           <h3>Registration Form</h3>
           <div className='login1'>
             <PermIdentityRoundedIcon/>
             <input type="text" placeholder="Enter Your Name" className="name"/>
           </div>
           <div className='login1'>
             <EmailIcon/>
             <input type="text" placeholder=" Create user name" className="name"/>
           </div>
           <div className="second-input">
             <LockIcon/>
             <input type="password" placeholder="Create Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Register</button>
          </div>
         </div>
       </div>
     </div>
    </div>
  );
}

export default Register;