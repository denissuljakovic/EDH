import React from "react";
import './workout2.css';
//import pic1 from "./arrow.png";

class Core extends React.Component{

    render(){
        return(
            <div>
                
    <div class="kontentdio" style={{marginLeft:'120px'}}> 
        <div class="glavnidio" >

            <div class="header">
              {/** <button onclick="history.back()" id="btn" title="Go back" ><img src={pic1} 
                    id="arw" alt="Back button"/></button>*/}  

                    <h3 style={{marginLeft:"45%"}} >Core </h3>
            </div>

            <div class="videos">
                   
                <div class="row">
                    <iframe src="https://www.youtube.com/embed/tfI6gs1jrHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}                    
                    <iframe src="https://www.youtube.com/embed/Goe-ODprA1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}                    
                    <iframe src="https://www.youtube.com/embed/KrDEwxdEwVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}                    

                </div>
                
                
                <div class="row">
                    <iframe src="https://www.youtube.com/embed/bOJu7xi3l3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}                   
                    <iframe src="https://www.youtube.com/embed/Z4Hekf5Xo18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}                   
                    <iframe src="https://www.youtube.com/embed/MwXKqZbFwLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}                   

                </div>
            </div>       
        </div>
    </div>

            </div>
        )
    }
}
export default Core;