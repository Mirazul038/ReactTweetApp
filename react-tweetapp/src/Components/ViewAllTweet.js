import { useEffect, useState } from "react";

import { createapi } from '../Api/Api';

import AllTweets from "./AllTweets";
import PostReply from "./PostReply";

function ViewAllTweet(){
    const[tweetData,SetTweetData] = useState([]);
    const[likeCount,SetLikeCount] = useState(1);
    const[isReply,SetIsReply] = useState(false);
    const updateLike = (tid) => {
        let username = encodeURIComponent(sessionStorage.getItem('username'));
        // console.log(curdate.getDate());
        createapi().UpdateLike(username,tid).then(res=> SetLikeCount(prev => prev+1)).catch(err=> console.log(err))
        
        console.log(likeCount);
    }
    const doReply = (tData) =>{
        console.log(tData);
    }
    useEffect(()=>{
        createapi().AllTweets().then(res=> SetTweetData(res.data)).catch(err=> console.log(err))
    },[likeCount])
    if(isReply){
        return(
            <div className="App">
                <PostReply/>
    
            </div>

        );
        
    }
    else{
        return(
            <div className="App">
                <h1>All Tweets</h1>
                {tweetData.map((tweet)=>(
                    <AllTweets key={tweet.id} tweets={tweet} updateLike={updateLike} doReply={doReply}/>
                    
                ))}
    
            </div>
 
        );
    }
    
}

export default ViewAllTweet;