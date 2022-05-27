import React from "react";
//import pic1 from "./arrow.png";
import pic2 from "./up4.jpg";
import pic3 from "./core2.jpg";
import pic4 from "./lowerbody.jpg";
import './workout2.css';
import UpperBody from "./UpperBody.js";
import Core from "./Core.js";
import { Link } from 'react-router-dom';
import LowerBody from "./LowerBody.js";

import './Toggle/tgl.css';
import Toggle from './Toggle/Toggle';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class Workout extends React.Component{

    render(){
        return(
        <div>
        
             <div class="kontentdio" > 
        <div class="glavnidio">
                   
            <div class="header">
                {/*<button onclick="history.back()" id="btn" title="Go back"><img src={pic1} 
                    id="arw" alt="Back button"/></button>*/}

                    <h3 style={{paddingLeft:'480px'}}>LET'S DO SOME WORKING OUT! </h3>
            </div>
            
                     
                

               
           
                <div class="workouts" >
                            <div class="col">
                       
                               <Link to='/UpperBody'> 
                                   <h4>Upper Body <hr/></h4><img src={pic2} alt="" id="guy"/>
                               </Link>
                              
                                   {/*  <Router>
                                        
                                        <UpperBody />
                                              <Route path="/UpperBody" component={UpperBody} />
                                        
  <a href={UpperBody}> </a> <a href="https://www.youtube.com/embed/bOJu7xi3l3Q"></a>
                                    </Router>
 */}
  


                             
                              
                            </div>

                            <div class="col"><Link to='/Core'> 
                                   <h4>Core <hr/></h4><img src={pic3} alt="" id="abs"/>
                               </Link>
                                
                            </div>
                            
                            <div class="col">

                            <Link to='/LowerBody'> 
                                   <h4>Lower Body <hr/></h4><img src={pic4} alt="" id="guys"/>
                               </Link>

                            </div> 

                </div>
        </div>
              

    </div>
    <Toggle/>  
        </div>
        
        )
    }
}

export default Workout;