import React from "react";
import './Education.css';
//import pic1 from './arrow.png';
import pic2 from './1.jpg';
import pic3 from './2.png';
import pic4 from './3.jpg';
import pic5 from './4.jpg';
import {Col, Row, Container} from 'react-bootstrap'



class Education extends React.Component{
    render(){
        return(
            <div>
                <div class="main" style={{marginLeft:'45px'}}>
   <div class="header">
      {/* <button onclick="history.back()" id="btn" title="Go back"><img src={pic1} 
           id="arw" alt="Back button"/></button>*/}
           <h3 style={{marginLeft:"550px"}}>Read some interesting articles </h3>
   </div>
   <Container>
   <Row fluid>

<Col xs={3} id="col">
    
        <a href="https://www.muscleandstrength.com/articles/six-advanced-arm-exercises">
                <article id="common">
                    <div class="inside-article">
                                <img src={pic2} alt="Thumbnail"/>
                            <h2>6 Advanced Exercises to Take Your Arms to the Next Level</h2>
                            <p> <br/>Whether you want to add size or develop shape, 
                                these advanced movements will help you maximize your arm-building potential.
                                Sample workout is also included! 
                            Click to read more! </p>
                    </div>
                </article>
            </a> 
</Col>

<Col xs={3} id="col"> 

<a href="https://www.muscleandstrength.com/articles/quick-tips-correct-lifting-technique-training-alone.html">
                <article id="common">
                    <div class="inside-article">
                                <img src={pic3} alt="Thumbnail"/>
                            <h2>Quick  Correct Lifting at Home tips</h2>
                            <p> <br/>Training at home and having a hard time improving your exercise form? 
                                Here are 7 practical tips to help get you on track and hitting your goals. 
                            Click to read more! </p>
                    </div>
                
                </article>
            </a> 
</Col>

<Col xs={3} id="col">

        <a href="https://www.helpguide.org/articles/healthy-eating/healthy-eating.htm">
                <article id="common">
                    <div class="inside-article">
                                <img src={pic4} alt="Thumbnail"/>
                            <h2>Healthy Eating</h2>
                            <p>  <br/>Confused by all the conflicting nutrition advice out there?
                                    These simple tips can show you how to plan, enjoy, and stick to a healthy diet.
                            Click to read more! </p>
                    </div>
                
                </article>
           </a> 

</Col>


<Col xs={3} id="col">

        <a href="https://www.medicalnewstoday.com/articles/160774">
            <article id="common">
                <div class="inside-article">
                            <img src={pic5} alt="Thumbnail"/>
                        <h2>What is nutrition, and why does it matter?</h2>
                        <p> <br/>Nutrition is the study of nutrients in food, how the body uses them,
                                and the relationship between diet, health, and disease. <br/> Click to read more!
                            </p>
                </div>
           
           </article>
           </a>
</Col>


</Row>

  <Row fluid>

<Col xs={3} id="col">
    
        <a href="https://www.muscleandstrength.com/articles/six-advanced-arm-exercises">
                <article id="common">
                    <div class="inside-article">
                                <img src={pic2} alt="Thumbnail"/>
                            <h2>6 Advanced Exercises to Take Your Arms to the Next Level</h2>
                            <p> <br/>Whether you want to add size or develop shape, 
                                these advanced movements will help you maximize your arm-building potential.
                                Sample workout is also included! 
                            Click to read more! </p>
                    </div>
                </article>
            </a> 
</Col>

<Col xs={3} id="col"> 

<a href="https://www.muscleandstrength.com/articles/quick-tips-correct-lifting-technique-training-alone.html">
                <article id="common">
                    <div class="inside-article">
                                <img src={pic3} alt="Thumbnail"/>
                            <h2>Quick  Correct Lifting at Home tips</h2>
                            <p> <br/>Training at home and having a hard time improving your exercise form? 
                                Here are 7 practical tips to help get you on track and hitting your goals. 
                            Click to read more! </p>
                    </div>
                
                </article>
            </a> 
</Col>

<Col xs={3} id="col">

        <a href="https://www.helpguide.org/articles/healthy-eating/healthy-eating.htm">
                <article id="common">
                    <div class="inside-article">
                                <img src={pic4} alt="Thumbnail"/>
                            <h2>Healthy Eating</h2>
                            <p>  <br/>Confused by all the conflicting nutrition advice out there?
                                    These simple tips can show you how to plan, enjoy, and stick to a healthy diet.
                            Click to read more! </p>
                    </div>
                
                </article>
           </a> 

</Col>


<Col xs={3} id="col">

        <a href="https://www.medicalnewstoday.com/articles/160774">
            <article id="common">
                <div class="inside-article">
                            <img src={pic5} alt="Thumbnail"/>
                        <h2>What is nutrition, and why does it matter?</h2>
                        <p> <br/>Nutrition is the study of nutrients in food, how the body uses them,
                                and the relationship between diet, health, and disease. <br/> Click to read more!
                            </p>
                </div>
           
           </article>
           </a>
</Col>


</Row>



</Container>




{/*   <div class="container">
       <div class="row">




           <div class="col1">
               
           
           </div> 

           <div class="col2">
              
           
           </div>

           <div class="col3">
              
           </div>

           <div class="col4">
             
           
           </div>
       </div>

       <div class="row">

<div class="col1">
    <article id="common">
        <div class="inside-article">
                    <img src={pic2} alt="Thumbnail"/>
                <h2>6 Advanced Exercises to Take Your Arms to the Next Level</h2>
                <p> <a href="https://www.muscleandstrength.com/articles/six-advanced-arm-exercises">Whether you want to add size or develop shape, 
                    these advanced movements will help you maximize your arm-building potential.
                    Sample workout is also included! </a> 
                Click to read more! </p>
        </div>
    </article>

</div>

<div class="col2">
    <article id="common">
        <div class="inside-article">
                    <img src={pic3} alt="Thumbnail"/>
                <h2>Quick Tips To Correct Lifting Technique When You Are Training Alone</h2>
                <p> <a href="https://www.muscleandstrength.com/articles/quick-tips-correct-lifting-technique-training-alone.html">Training at home and having a hard time improving your exercise form? 
                    Here are 7 practical tips to help get you on track and hitting your goals. </a> 
                Click to read more! </p>
        </div>
    
    </article>

</div>

<div class="col3">
    <article id="common">
        <div class="inside-article">
                    <img src={pic4} alt="Thumbnail"/>
                <h2>Healthy Eating</h2>
                <p> <a href="https://www.helpguide.org/articles/healthy-eating/healthy-eating.htm">Confused by all the conflicting nutrition advice out there?
                     These simple tips can show you how to plan, enjoy, and stick to a healthy diet.</a> 
                Click to read more! </p>
        </div>
    
    </article>

</div>

<div class="col4">
    <article id="common">
        <div class="inside-article">
                    <img src={pic5} alt="Thumbnail"/>
                <h2>What is nutrition, and why does it matter?</h2>
                <p> <a href="https://www.medicalnewstoday.com/articles/160774">Nutrition is the study of nutrients in food, how the body uses them,
                     and the relationship between diet, health, and disease.</a> 
                Click to read more! </p>
        </div>
    
    </article>

</div>
</div>
   </div>
        */}
   
   

</div>

            </div>
        )
    }
}

export default Education;