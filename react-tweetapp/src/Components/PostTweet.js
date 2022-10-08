import { createapi } from '../Api/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button} from "react-bootstrap";
import { useState } from 'react';
import { useLocation } from 'react-router';


    function PostTweet(props) {
      const location = useLocation();
        const[tweetValue, SetTweetValue] = useState("");
    const TweetEvent = e => {
        SetTweetValue(e.target.value);
    }
    const AddTweet = ()=>{
      if(tweetValue!==""){
        var curdate = new Date();
        const tweetData = {
            tweetText: tweetValue,
            userId: sessionStorage.getItem('userId'),
            likes: 0,
            createdAt: curdate
          }
        let username = encodeURIComponent(sessionStorage.getItem('username'));
        console.log(username);
        // console.log(curdate.getDate());
        createapi().AddTweet(username,tweetData).then(res=> alert("Tweet Posted Successfully")).catch(err=> console.log(err))
        SetTweetValue("");
        
      }
      else{
        alert("Tweet cannot be empty");
      }
        
    }
      return (
          
        <div className="App"> 
            <h1>Post a tweet</h1>
           <Form>
      
      <Form.Group className="mb-3" >
        <Form.Label>Enter your Tweet</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Tweet" onChange={TweetEvent} value={tweetValue} />
      </Form.Group>
      <Button variant="dark" onClick={AddTweet}>
    Post
  </Button>
    </Form>
        </div>
      );
    }

export default PostTweet;