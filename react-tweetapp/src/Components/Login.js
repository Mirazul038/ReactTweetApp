import "./LoginStyles.css"
import twitterImage from '../Images/twitterImage.jpg';
import { useState } from "react";
import { createapi } from '../Api/Api';
import { useNavigate} from 'react-router-dom'


function Login(props){
    const[username, SetUsername] = useState("");
    const[password, SetPassword] = useState("");
    const navigate = useNavigate();
    const LoginUser = () => {   
        createapi().login(username,password).then(
            res=> {
                sessionStorage.setItem('userId',res.data.id);
                sessionStorage.setItem('username',res.data.username);
                sessionStorage.setItem('name',res.data.name);
                sessionStorage.setItem('email',res.data.email);
                sessionStorage.setItem('dob',res.data.dob);
                sessionStorage.setItem('contact',res.data.contact);
                sessionStorage.setItem("token", res.data.token);
                navigate('/home')
            }
            ).catch(err=> alert("Please enter correct username and password"));
      }
  
    return(
        <div className="main">
            <div className="sub-main">
            <div>
                <div className="imgss">
                    <div className="container-image">
                        <img src={twitterImage} alt="twitter pic" data-testid="prj_image" className="twitterPic" />
                    </div>
                </div>
                <div>
                    <h1>Login Page</h1>
                    <div>
                        <input type="text" data-testid="usrId" placeholder="user name" className="name" value={username} onChange={(e) => SetUsername(e.target.value)} />
                    </div>
                    <div className="second-input">
                        <input type="password" data-testid="passId" placeholder="password" className="name" value={password} onChange={(e) => SetPassword(e.target.value)} />
                    </div>
                    <div className="login-button">
                        <button disabled={!username || !password} data-testid="buttonId" onClick={LoginUser}>Login</button>
                    </div>
                    <p className="link"> 
                        <a href="" data-testid="forgotLink" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</a> Or <a href="" data-testid="signupLink" onClick={()=>{navigate('/signup')}}>Sign Up</a>
                    </p>
                    
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Login;