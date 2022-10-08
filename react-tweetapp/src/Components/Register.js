import "./LoginStyles.css"
import twitterImage from '../Images/twitterImage.jpg';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { createapi } from '../Api/Api';

function Register(props){
    const navigate = useNavigate();
    const[username, SetUsername] = useState("");
    const[password, SetPassword] = useState("");
    const[yourname, SetYourname] = useState("");
    const[email,SetEmail]=useState("");
    const[dob, SetDOB] = useState("");
    const[con,SetContact] = useState("");

    const RegisterUser = () =>{
        const myData = {
            userName: username,
            password: password,
            name: yourname,
            email: email,
            dob: dob,
            contact:con
          }
          //console.log(myData);
          createapi().register(myData).then(
              res=>{ 
                  alert("Registration Successfull")
                  navigate('/login');
                }
              ).catch(err=> alert("Some Error occured while registering user"))
    }

    return(
        <div className="main">
            <div className="sub-main">
            <div>
                <div className="imgss">
                    <div className="container-image">
                        <img src={twitterImage} data-testid="prjImage" alt="twitter pic" className="twitterPic" />
                    </div>
                </div>
                <div>
                    <h1>Register Page</h1>
                    <div>
                        <input type="text" data-testid="usrId" placeholder="user name" className="name" value={username} onChange={e=>{SetUsername(e.target.value)}} />
                    </div>
                    <div className="second-input">
                        <input type="password" data-testid="passId" placeholder="password" className="name" value={password} onChange={e=>{SetPassword(e.target.value)}} />
                    </div>
                    <div className="second-input">
                        <input type="text" data-testid="nameId" placeholder="your name" className="name" value={yourname} onChange={e=>{SetYourname(e.target.value)}} />
                    </div>
                    <div className="second-input">
                        <input type="text" data-testid="emailId" placeholder="your email" className="name" value={email} onChange={e=>{SetEmail(e.target.value)}} />
                    </div>
                    <div className="second-input">
                        <input type="text" data-testid="dobId" placeholder="DOB: dd-mm-yyyy" className="name" value={dob} onChange={e=>{SetDOB(e.target.value)}} />
                    </div>
                    <div className="second-input">
                        <input type="text" data-testid="contactId" placeholder="your mobile" className="name" value={con} onChange={e=>{SetContact(e.target.value)}} />
                    </div>
                    <div className="login-button">
                        <button disabled={!username || !password} data-testid="regButtonId" onClick={RegisterUser}>Register</button>
                    </div>
                    <p className="link"> 
                        <a href="" data-testid="loginLink" onClick={()=>{navigate('/login')}}>Already have an Account?</a>
                    </p>
                    
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Register;