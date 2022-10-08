import { createapi } from '../Api/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import TweetCard from './TweetCard';
import ReplyCard from './ReplyCard';

    function PostReply(props) {
      const location = useLocation();
      
        const[replyValue, SetReplyValue] = useState("");
    const ReplyEvent = e => {
        SetReplyValue(e.target.value);
    }
    const AddReply = ()=>{
        var curdate = new Date();
        const replyData = {
            userId: sessionStorage.getItem('userId'),
            tweetId: location.state.tweet.id,
            replyText: replyValue,
            createdAt: curdate
          }
        let username = encodeURIComponent(sessionStorage.getItem('userName'));
        // console.log(username);
        // // console.log(curdate.getDate());
        createapi().AddReply(username,replyData).then(res=> alert("reply added successful")).catch(err=> console.log(err))
        // SetReplyValue("");
        // alert("Reply Posted Successfully");
        console.log(replyData);
    }
      return (
         <div>
           <div>
           <TweetCard tweet={location.state.tweet} name={location.state.name} />
           </div>
           <div>
           <div className="App"> 
            <h1>Post a Reply</h1>
           <Form>
      
      <Form.Group className="mb-3" >
        <Form.Label>Enter your Reply</Form.Label>
        <Form.Control type="text" placeholder="Enter You Reply" onChange={ReplyEvent} value={replyValue} />
      </Form.Group>
      <Button variant="dark" onClick={AddReply}>
    Post
  </Button>
    </Form>
        </div>
           </div>
        <div>
          <ReplyCard tweet={location.state.tweet} />
        </div>
         </div> 
        
      );
    }

export default PostReply;