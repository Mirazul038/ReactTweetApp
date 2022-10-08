import { createapi } from '../Api/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useState } from 'react';

    function Signup(props) {
      return (
          
        <div className="App">
            <h1>Signup Page</h1>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={props.user} name="email" onChange={props.usernameEvent} />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={props.pass} name="password" onChange={props.passwordEvent} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter you Name</Form.Label>
        <Form.Control type="text" placeholder="Enter You name" value={props.yourname} name="yourName" onChange={props.nameEvent} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="text" placeholder="dd-mm-yyyy" value={props.dob} name="DOB" onChange={props.dobEvent} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" name="check" />
      </Form.Group>
    </Form>
        </div>
      );
    }

export default Signup;