import { createapi } from '../Api/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useState } from 'react';

    function Signin(props) {
      return (
          
        <div className="App">
            <h1>Login Page</h1>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={props.user} name="email" onChange={props.usernameEvent} />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={props.pass} name="password" onChange={props.passwordEvent} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" name="check" />
      </Form.Group>
    </Form>
        </div>
      );
    }

export default Signin;