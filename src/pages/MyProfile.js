import db from '../firebase.config';
import React,{useState,useEffect} from 'react';
import classes from './SignUpItem.module.css';
import { useRef } from 'react';
//import NewLoginPage from './NewLoginPage';
import { AiOutlineProfile }  from "react-icons/ai";
import fitnes from './fitnes.jpg';
import { AiOutlineHome } from "react-icons/ai";
function MyProfile() {
const [users,setUsers]=useState([])
const fetchUsers=async()=>{

    const response=db.collection('users');
    const data=await response.get();

    data.docs.forEach(item=>{
     setUsers([...users,item.data()])
    })
  }
  useEffect(() => {
    fetchUsers();
  }, [])

  return (
   <div > 
<div >
      <img src={fitnes} style={{position:"absolute", width:"100%", height:"950px", display:"flex", bottom:"0", top:"0cm", objectFit:"cover", autoPlay:"true"}}>
        
      </img>

   </div>
      { //users&&
       users.map(users=>{
          return(
            <div style={{zIndex:"10", position:"relative"}} >
                <div className={classes.content}>
                <h3>My Profile</h3>

                  <h3>Username</h3>
                  <div className={classes.label} style={{border: "1px solid"}}> {users.name}</div> 
                  <h3>Email</h3> 
                  <div className={classes.label}style={{border: "1px solid"}}>{users.email}</div>
                 <h3>Country</h3> 
                  <div className={classes.label} style={{border: "1px solid"}}>{users.country}</div> 
                  <h3>Phone</h3> 
                  <div className={classes.label} style={{border: "1px solid"}}>{users.phone}</div> 
                  <h3>Date of Birth</h3> 
                  <div className={classes.label} style={{border: "1px solid"}}>{users.dob}</div> 
                </div>
                  </div>
          )
        })
      }
 </div>
  );
}
export default MyProfile;
