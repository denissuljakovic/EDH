import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import pic from './prvaslika.png';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import slika from './slika.jpg';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useHistory();
  {/**useEffect(() => {
    if (loading) {
            return;
    }
    if (user) navigate("/mainpage");
  }, [user, loading]); */} 
  return (<div> <div >
    <img src={slika} style={{position:"absolute", width:"100%", opacity:"0.5",height:"1100px", display:"flex", bottom:"0", top:"0cm", objectFit:"cover", autoPlay:"true"}}>
      
    </img>

 </div> <div style={{zIndex:"10", position:"relative"}}>  
    <img src={pic} style={{marginLeft:"30%", width:"500px", alignItems:"center", justifyContent:"center", marginLeft:"13.5cm",  height:"50vh"}}/>

    <div className="login">
      <div className="lcontainer">
          <h3>Login</h3>
        <input
          type="text"
          className="box"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          id="email"
        />
        <input
          type="password"
          className="box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
        <Link to="/register">Register now</Link> 
        </div>
      </div>
    </div>
  </div></div>    
  );
}
export default Login;