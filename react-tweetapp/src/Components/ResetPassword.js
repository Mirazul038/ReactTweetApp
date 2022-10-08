import { createapi } from '../Api/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useState } from 'react';

    function ResetPassword(props) {
        const[passValue, SetPassValue] = useState("");
    const PassEvent = e => {
        SetPassValue(e.target.value);
    }
    const reset = ()=>{
        //console.log(props.userData);
        //var curdate = new Date();
        if(passValue!=""){
          let username = encodeURIComponent(sessionStorage.getItem('username'));
          console.log(username);
          // console.log(curdate.getDate());
          createapi().ResetPassword(username,passValue).then(res=> alert("Password Reset Successfully")).catch(err=> console.log(err))
          SetPassValue("");
          ;
        }
        else{
          alert("password cannot be empty");
        }
        
    }
      return (
          
        <div className="App">
            <h1>Reset your Password</h1>
           <Form>
      
      <Form.Group className="mb-3" >
        <Form.Label>Enter new Password</Form.Label>
        <Form.Control type="text" placeholder="Enter You Password" onChange={PassEvent} value={passValue} />
      </Form.Group>
      <Button variant="dark" onClick={reset}>
    Reset
  </Button>
    </Form>
        </div>
      );
    }

export default ResetPassword;