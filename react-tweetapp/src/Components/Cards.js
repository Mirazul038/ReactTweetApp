import { useEffect, useState } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabelc, Card } from "react-bootstrap";
import './Card.css';
import like from '../Images/like.png';
import comment from '../Images/comment.png';

function Cards(props){
  const testme=()=> {
    console.log("like");
  }
    return(
      <div className="App">
        <div className="box">
          <p className="userName">{props.tweets.userId}</p>
          <p className="tweet">{props.tweets.tweetText}</p>
          <img src={like} height="20px" width="20px" onClick={testme}/>
          <img src={comment} height="20px" width="20px" onClick={testme}/>
        </div>
      </div>
    );
}

export default Cards;