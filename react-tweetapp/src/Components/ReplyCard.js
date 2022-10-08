import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./Box.css";
import like from '../Images/like.png';
import comment from '../Images/comment.png';
import { useEffect, useState } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { createapi } from '../Api/Api';
import { useNavigate, Link } from 'react-router-dom'
import ReplyCard1 from './ReplyCard1';

function ReplyCard(props){
  const navigate = useNavigate();
  const[replyData,SetReplyData] = useState([]);
    const[name,SetName] = useState("");
    useEffect(()=>{
        createapi().GetAllReplies(props.tweet.id).then(res=> SetReplyData(res.data)).catch(err=> console.log(err))
        // console.log(props.tweet.id);
        // console.log(replyData);
    },[])
    // useEffect(()=>{
    //     createapi().GetUserById(props.tweets.userId).then(res=> SetName(res.data)).catch(err=> console.log(err))
    // },[])
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
        <div>
            <div className="App">
                <h1>All replies</h1>
                {replyData.map((reply)=>(
                    <ReplyCard1 replies={reply.replyText}/>
                    
                ))}
    
            </div>
        </div>
        
        
        
        
      );
}

export default ReplyCard;