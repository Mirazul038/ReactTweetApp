import { useEffect, useState } from "react";
//import { Form, Button, FormGroup, FormControl, ControlLabelc, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./Box.css";
import like from '../Images/like.png';

function MyTweetCard(props){
    return(
      <div className="grid">
      <Card style={{ width: '18rem' }} className="boxy">
    <Card.Body>
      <Card.Title>{sessionStorage.getItem('username')}</Card.Title>
      <Card.Subtitle>{props.tweets.createdAt}</Card.Subtitle>
      <Card.Text>
        {props.tweets.tweetText}

      </Card.Text>
      {props.tweets.likes}
            <img src={like} height="20px" width="20px" />
    </Card.Body>
  </Card>
  </div>
    );
}

export default MyTweetCard;