import { useEffect, useState } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { createapi } from '../Api/Api';
import MyTweetCard from "./MyTweetCard";

function MyTweet(props){
    const[tweetData,SetTweetData] = useState([]);
    useEffect(()=>{
        let username = encodeURIComponent(sessionStorage.getItem('username'));
        createapi().MyTweets(username,sessionStorage.getItem('userId')).then(res=> SetTweetData(res.data)).catch(err=> console.log(err))
    },[])
    return(
        <div>
            <h1>My Tweets</h1>
            {tweetData.map((tweet)=>(
                <MyTweetCard key={tweet.id} tweets={tweet}/>
            ))}

        </div>
    );
}

export default MyTweet;