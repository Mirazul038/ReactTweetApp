import "./LoginStyles.css"
import twitterImage from '../Images/twitterImage.jpg';
import { createapi } from '../Api/Api';
import { useState } from "react";
import { useNavigate} from 'react-router-dom'

function ForgotPassword(props){
    const navigate = useNavigate();
    const[username, SetUsername] = useState("");
    const[password, SetPassword] = useState("");
    const[isValid,SetIsValid] = useState(false);
    const[resetDone,IsResetDone] = useState(false);
    const changeUsername = e => {
        SetUsername(e.target.value);
    }
    const changePassword = e => {
        SetPassword(e.target.value);
    }
    const Log= ()=>{
        console.log(username)
        createapi().SearchUser(username).then(res=> SetIsValid(true)).catch(err=> alert("Invalid Username"));
    }
    const setPassword= ()=>{
        console.log(username)
        if(password!==""){
            createapi().SetPassword(username,password).then(res=> IsResetDone(true)).catch(err=> alert("some problem occur at server side"));
        }
        else{
            alert("please enter a new password");
        }
        
    }
   
    if(resetDone){
        return(
        <div className="main">
                <div className="sub-main">
                <div>
                    <div className="imgss">
                        <div className="container-image">
                            <img src={twitterImage} alt="twitter pic" className="twitterPic" />
                        </div>
                    </div>
                    <div>
                        <h1>Password reset successfull</h1>
                        <div className="login-button">
                            <button onClick={()=>{navigate('/login')}}>Login Page</button>
                        </div>
                       
                        
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
    else
    {
        if(isValid){
        return(
            <div className="main">
                <div className="sub-main">
                <div>
                    <div className="imgss">
                        <div className="container-image">
                            <img src={twitterImage} alt="twitter pic" className="twitterPic" />
                        </div>
                    </div>
                    <div>
                        <h1>Set Password Page</h1>
                        <div>
                            <input type="text" placeholder="New Password" className="name" value={password} onChange={changePassword} />
                        </div>
                        <div className="login-button">
                            <button onClick={setPassword}>Set Password</button>
                        </div>
                       
                        
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
    else{
        return(
            <div className="main">
                <div className="sub-main">
                <div>
                    <div className="imgss">
                        <div className="container-image">
                            <img src={twitterImage} alt="twitter pic" className="twitterPic" />
                        </div>
                    </div>
                    <div>
                        <h1>Forgot Password Page</h1>
                        <div>
                            <input type="text" placeholder="user name" className="name" value={username} onChange={changeUsername} />
                        </div>
                        <div className="login-button">
                            <button onClick={Log}>Validate</button>
                        </div>
                       
                        
                    </div>
                </div>
                </div>
                
            </div>
        );
    }}
    

}

export default ForgotPassword;