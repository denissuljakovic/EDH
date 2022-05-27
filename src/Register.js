import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import pic from './prvaslika.png';
import slika from './slika.jpg';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "./Register.css";
function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password, country, phone, dob);
  };
  {/*useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);*/ }
  return (<div>
<div >
      <img src={slika} style={{position:"absolute", width:"100%", height:"1100px", opacity:"0.5", display:"flex", bottom:"0", top:"0cm", objectFit:"cover", autoPlay:"true"}}>
        
      </img>

   </div>
<div style={{zIndex:"10", position:"relative"}}> 
    <img src={pic} style={{marginLeft:"30%", width:"500px", alignItems:"center", justifyContent:"center", marginLeft:"13.5cm", height:"50vh", marginBottom:"0.5cm"}}/> 
    <div className="register" style={{ marginBottom:"4cm"}}>
        
      <div className="rcontainer" >
       <h3>Registration</h3> <input
          type="text"
          className="rBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          id="name"
        />
        <input
          type="text"
          className="rBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          id="email"
        />
        <input
          type="password"
          className="rBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="password"
        />
        <input
          type="text"
          className="rBox"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          id="country"
        />
        <input
          type="text"
          className="rBox"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          id="phone"
        />
        <input
          type="text"
          className="rBox"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          placeholder="DoB"
          id="dob"
        />
        <Link to="/mainpage"><button className="register__btn" onClick={register}>
          Register
        </button> </Link> 
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
           <Link to="/">Login now.</Link> 
        </div>
      </div>
     
    </div>
    </div> </div>
  );
}
export default Register;