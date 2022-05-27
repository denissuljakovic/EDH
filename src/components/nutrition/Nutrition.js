import React from "react";

import './Nutrition.css';

import foodlogBlock from './foodlogBlock.png';

import trackerBlock from './trackerBlock.png';

import { Link } from 'react-router-dom';

//import FoodLog from "../foodlog/FoodLog";
import bck from './bck.jpg';


class Nutrition extends React.Component{

render(){
return(
 <div>  <div >
 <img src={bck} style={{position:"absolute", width:"100%", opacity:"0.5",height:"1100px", display:"flex", bottom:"0", top:"0cm", objectFit:"cover", autoPlay:"true"}}>
   
 </img>

</div>  
    {/**<a href="https://i.imgur.com/fe0T4nw.png"> </a>*/}
    <Link to="/foodlogging">
     <div>
<div id="up" >
<div class="logLeftBox">
 <h1 id="foodLogTitle" style={{zIndex:"10", position:"relative"}}>Food <br/> <hr/>Logging</h1> 
</div>
<div class="logRightBox"style={{zIndex:"10", position:"relative", display:"flex"}}><img src={foodlogBlock} alt="foodlogBlock" />
 </div>
 </div>
 
   </div>   </Link>  

<Link to='/tracker'><div> 
<div id="down" >

 <div class="trackLeftBox" style={{zIndex:"10", position:"relative", display:"flex"}}>

 <img id="trackerBlock" src={trackerBlock} alt="trackerBlock"/>

</div>
 <div class="trackRightBox">

<h1 id="trackTitle" style={{zIndex:"10", position:"relative", paddingBottom:"30px"}}>Progress <br/> <hr/> Tracker</h1> 
</div>
 </div> </div></Link>





</div>
 )

}
}

export default Nutrition;