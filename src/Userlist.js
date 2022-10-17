import axios from "axios";
import React, { useEffect, useState } from "react";

axios.defaults.withCredentials = true
const Userlist = () =>{
    const [userData, setUserData] = useState([]);

    const fetchUsers  = async() =>{
        try {
            const res  = await axios.get("http://localhost:5000/users/all-users");
            console.log("res",res.data)
            setUserData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    return (
       <>
       <h1>List of Users</h1>
       {
           userData?.map((item, i)=>(
               <p key={i}>{item.name}</p>
           ))
       }
       </>
    )
}

export default Userlist