import React from "react";
import './workout2.css';
//import pic1 from "./arrow.png";

class LowerBody extends React.Component{

    render(){
        return(
            <div>
                <div class="kontentdio" style={{marginLeft:'120px'}}> 
        <div class="glavnidio" >

            <div class="header">
               {/* <button onclick="history.back()" id="btn" title="Go back"><img src={pic1} 
                    id="arw" alt="Back button"/></button>*/}

                    <h3 style={{marginLeft:"45%"}} >Lower Body </h3>
            </div>

                <div class="videos">
                   
                    <div class="row">
                        <iframe src="https://www.youtube.com/embed/aeNPFLLKXro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}
                        <iframe src="https://www.youtube.com/embed/_yGiMQtmNbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}
                        <iframe src="https://www.youtube.com/embed/X0xt0fYTZv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}


                    </div>

                    
                    <div class="row">
                        <iframe src="https://www.youtube.com/embed/KcjAzSf9QEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}
                        <iframe src="https://www.youtube.com/embed/_kLBi8tF6Kk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>{" "}
                        <iframe src="https://www.youtube.com/embed/6vlP9xPJbaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/> {" "}                  

                    </div>
                    
                </div>

               
                
                
            </div>

        </div>
    </div>
           
        )
    }
}
export default LowerBody;