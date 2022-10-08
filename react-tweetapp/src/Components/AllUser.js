import { useEffect, useState } from "react";
import { createapi } from '../Api/Api';
import AllUserCard from "./AllUserCard";

function AllUser(){
    const[userData,SetUserData] = useState([]);
    useEffect(()=>{
        createapi().AllUsers().then(res=> SetUserData(res.data)).catch(err=> console.log(err))
    },[])
    return(
        <div>
            <h1>All Users</h1>
            {userData.map((user)=>(
                <AllUserCard key={user.id} users={user}/>
            ))}

        </div>
    );
}

export default AllUser;