import { useState } from 'react';
import Header from './Header';
import PostTweet from './PostTweet';
import ViewAllTweet from './ViewAllTweet';
import ResetPassword from './ResetPassword';
import AllUser from './AllUser';
import MyTweet from './MyTweet';
import { useNavigate} from 'react-router-dom'


function LoggedIn(){
const navigate = useNavigate();
const [headerName,SetHeaderName] = useState("AllTweets");
const HeaderEvent = (data) =>{
    if(data==="Logout"){
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('dob');
        sessionStorage.removeItem('contact');
        sessionStorage.removeItem("token");
        navigate('/login');
    }
    SetHeaderName(data);
    
}

return(
    <div className="App">
        <Header headerEvent={HeaderEvent} />
       
        {headerName==="PostTweet" && <PostTweet /> }
        {headerName==="ResetPassword" && <ResetPassword /> }
        {headerName==="AllTweets" && <ViewAllTweet/> }
        {headerName==="AllUsers" && <AllUser/> } 
        {headerName==="MyTweets" && <MyTweet/> } 
    </div>
);
}

export default LoggedIn;