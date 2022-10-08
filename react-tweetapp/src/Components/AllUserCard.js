import { useEffect, useState } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabelc, Card } from "react-bootstrap";

function AllUserCard(props){
    return(
      <div className="grid">
      <Card style={{ width: '18rem' }} className="boxy">
    <Card.Body>
      <Card.Title>{props.users.name}</Card.Title>
      <Card.Subtitle>{props.users.username}</Card.Subtitle>
      <Card.Text>
        {props.users.dob}

      </Card.Text>
 
    </Card.Body>
  </Card>
  </div>
    );
}

export default AllUserCard;