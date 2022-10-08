import axios from "axios";

export const createapi = () => {
    
    let url = 'http://20.219.173.44/api/v1.0/tweets/users/all';
    let url2 = 'http://20.219.173.44/api/v1.0/tweets/register';
    return {
        fetch:()=>axios.get(url),
        login:(username,password)=> axios.get("http://20.219.173.44/api/v1.0/tweets/login?username="+username+"&password="+password),
        register:data => axios.post(url2,data),
        AddTweet:(username,tweetData) => axios.post("http://20.219.173.44/api/v1.0/tweets/"+username+"/add", tweetData),
        ResetPassword:(username,password) => axios.get("http://20.219.173.44/api/v1.0/tweets/"+username+"/forgot?newPassword="+password),
        AllTweets:()=>axios.get("http://20.219.173.44/api/v1.0/tweets/all"),
        AllUsers:()=>axios.get("http://20.219.173.44/api/v1.0/tweets/users/all"),
        MyTweets:(username,uid)=> axios.get("http://20.219.173.44/api/v1.0/tweets/"+username+"?uid="+uid),
        SearchUser:(username)=> axios.get("http://20.219.173.44/api/v1.0/tweets/user/search/"+username),
        SetPassword:(username,password)=> axios.get("http://20.219.173.44/api/v1.0/tweets/"+username+"/forgot?newPassword="+password),
        GetUserById:(uid)=> axios.get("http://20.219.173.44/api/v1.0/tweets/GetUserById?uid="+uid),
        UpdateLike:(username,tid)=> axios.put("http://20.219.173.44/api/v1.0/tweets/"+username+"/like/"+tid),
        GetAllReplies:(tid)=> axios.get("http://20.219.173.44/api/v1.0/tweets/GetReplies?tid="+tid),
        AddReply:(username,replyData) => axios.post("http://20.219.173.44/api/v1.0/tweets/"+username+"/reply", replyData),
    }
}