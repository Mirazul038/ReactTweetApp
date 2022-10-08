import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./Box.css";
import like from '../Images/like.png';
import comment from '../Images/comment.png';
import { useEffect, useState } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { createapi } from '../Api/Api';
import PostReply from './PostReply';
import { useNavigate, Link } from 'react-router-dom'

function AllTweets(props){
  const navigate = useNavigate();
    const[name,SetName] = useState("");
    useEffect(()=>{
        createapi().GetUserById(props.tweets.userId).then(res=> SetName(res.data)).catch(err=> console.log(err))
    },[])
    // const testMe = () => {
    //     createapi().GetUserById(props.tweets.userId).then(res=> console.log(res)).catch(err=> console.log(err))
    // }
    const postReply =()=>{
      props.doReply(props.tweets);
    
    }

    const Likes=()=>{
      props.updateLike(props.tweets.id);
    }


    return (
        <div className="grid">
            <Card style={{ width: '18rem' }} className="boxy">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{props.tweets.createdDate}</Card.Subtitle>
            <Card.Text>
              {props.tweets.tweetText}

            </Card.Text>
            {props.tweets.likes}
            <img src={like} height="30px" width="30px" onClick={Likes} />
            <img src={comment} height="30px" width="30px" onClick={()=>{navigate('/home/post-reply', {state:{tweet:props.tweets}})}} />
          </Card.Body>
        </Card>       
        </div>
        
      );
}

export default AllTweets;