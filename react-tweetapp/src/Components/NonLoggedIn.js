import logo from '../logo.svg';
import '../App.css';
import { createapi } from '../Api/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

// const Test=()=>{
// // createapi().login().then(res=> console.log(res)).catch(err=> console.log(err))
// fetch('https://localhost:44345/api/v1.0/tweets/users/all').then((resp)=> {
//     resp.json().then(res=> console.log(res))
// })
// }

// const TestRegister=()=>{
//     const myData = {
//         userName: 'hemant1234',
//       password: 'password',
//       name: 'hemant',
//       dob: '03-01-1999'
//     }
//     createapi().register(myData).then(res=> console.log(res)).catch(err=> console.log(err))
//     //const result = fetch('https://localhost:44345/api/v1.0/tweets/register',{
//     //     method: 'POST',
//     //     headers:{
//     //         'ContentType': 'application/json'
//     //     },
//     //     body: JSON.stringify(myData)
//     // })
//     //  const resinjson = result.json()
//     //  console.log(resinjson)
//     // 
// }

function NonLoggedIn(props) {
    const[username, SetUsername] = useState("");
    const[password, SetPassword] = useState("");
    const[yourname, SetYourname] = useState("");
    const[email,SetEmail]=useState("");
    const[con,SetContact]=useState("");
    const[dob, SetDOB] = useState("");
    const[showsignup, SetSignup] = useState(false);
    const[showPass, SetPass] = useState(false);
    const RegisterUser = () => {
        //e.preventDefault();
        //createapi().login(username,password).then(res=> console.log(res)).catch(err=> console.log(err));
        // console.log(username);
        // console.log(password);
        // console.log(yourname);
        // console.log(dob);
        const myData = {
          userName: username,
          password: password,
          name: yourname,
          email:email,
          dob: dob,
          contact:con

        }
        createapi().register(myData).then(res=> alert("Registration Successfull")).catch(err=> alert("Some Error occured while registering user"))
        showsignup(false);
      }
    const LoginUser = () => {
        // console.log(username);
        // console.log(password);
        //e.preventDefault();
        createapi().login(username,password).then(res=> props.LoginEvent(res)).catch(err=> alert("Please enter correct username and password"));
        //props.LoggedInEvent;
      }
    const changeUsername = e => {
        SetUsername(e.target.value);
    }
    const changePassword = e => {
        SetPassword(e.target.value);
    }
    const changeYourname = e => {
        SetYourname(e.target.value);
    }
    const changeEmail = e => {
      SetEmail(e.target.value);
    }
    const changeDOB = e => {
        SetDOB(e.target.value);
    }
    const changeContact = e =>{
      SetContact(e.target.value);
    }
    const Toggle = () =>{
        SetSignup(showsignup =>!showsignup);
        
    }
    const forgot = () =>{
      SetPass(true);
    }
    const logForgot = () => {
      SetPass(false);
    }
    if(showPass){
      return(
        <div className="App"><ForgotPassword log={logForgot} /></div>
      );
    }
    else{
      return (
      
        <div className="App">
    
    {showsignup ? (<Register RegisterFunction={RegisterUser} usernameEvent={changeUsername} passwordEvent={changePassword} nameEvent={changeYourname} emailEvent={changeEmail} dobEvent={changeDOB} contactEvent={changeContact} user={username} pass={password} yourname={yourname} email={email} dob={dob} contact={con} toggle={Toggle}/>): (<Login usernameEvent={changeUsername} passwordEvent={changePassword} user={username} pass={password} LogInFunction={LoginUser} toggle={Toggle} fpass={forgot} />)} 
        </div>
      );
    }
  
}

export default NonLoggedIn;
