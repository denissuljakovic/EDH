import 'bootstrap/dist/css/bootstrap.min.css';
//import NewLoginPage from './pages/NewLoginPage';
import { useContext } from "react";
//import SignUp from './pages/SignUp';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage.js';
import React from 'react';
import FirstPage from './pages/FirstPage';
//import ProfilePage from './pages/ProfilePage';
import SecondDiary from './pages/SecondDiary';
import FirstCal from './components/Tracker/FirstCal';
import EDiary from './pages/EDiary';
import { UserContext } from "./pages/UserProvider";
//import { Router } from "@reach/router";
//import SignIn from "./Components/SignIn";
//import SignUp from "./Components/SignUp";
//import Application from "./Components/Application";
import UserProvider from "./pages/UserProvider";
//import ProfilePage from "./Components/ProfilePage";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
//import Reset from "./Reset";
//import Dashboard from "./Dashboard";
import Tracker from './components/Tracker/Tracker.js';
import { SiFacebook } from "react-icons/ai";
import MyProfile from './pages/MyProfile';
import Nutrition from './components/nutrition/Nutrition';
import FoodLog from './components/foodlog/FoodLog';
import Education from './pages/Education';
import Workout from './pages/Workout';
import UpperBody from './pages/UpperBody';
import Core from './pages/Core';
import LowerBody from './pages/LowerBody';
import Motivation from './pages/motivation/Motivation';
function App() {
  const user = useContext(UserContext);

  return (<div>
     <Switch>
       <Route path='/' exact>
         <FirstPage/>  
        </Route>
     <Route path='/login'>
          <Login/>
        </Route>
        
       <Route path='/register'>
          <Register/>
        </Route>
        {/**   <Route path='/dashboard'>
          <Dashboard/>
        </Route>
      
      
         <Route path='/reset'>
            <Reset/>
          </Route>*/}
  

{/**<Route path='/login'>
          <NewLoginPage/>
        </Route> 
        <Route path='/signup'>
          <SignUp/>
        </Route> */}
    
       
        <Layout>
        <Route path='/foodlogging'>
          <FoodLog/>
        </Route>
        <Route path='/motivational'>
          <Motivation/>
        </Route>
        <Route path='/workout'>
          <Workout/>
        </Route>
        <Route path='/upperbody'>
          <UpperBody/>
        </Route>
        <Route path='/core'>
          <Core/>
        </Route>
        <Route path='/lowerbody'>
          <LowerBody/>
        </Route>

          <Route path='/mainpage'>
          <MainPage/>
        </Route>

    <Route path='/myprofile'>
    <MyProfile />
        </Route>
        <Route path='/education'>
    <Education />
        </Route>
        
        <Route path='/eDiary'>
          <EDiary/>
        </Route> 
        <Route path='/post'>
          <SecondDiary/>
        </Route> 
        <Route path='/enter'>
          <FirstCal/>
        </Route>  
        <Route path='/tracker'>
          <Tracker/>
        </Route>
        <Route path='/nutrition'>
          <Nutrition/>
        </Route></Layout>
    </Switch>  



    <div><div class="footer" style={{zIndex:"10", position:"relative"}}> 








<div class="copyright" style={{bottom:"0", marginLeft:'420px'}}>
All artwork and content ©2022 EDHealth. Website Design by Hamza, Denis and Esma.
</div>


</div>
</div>
 
    


 </div>

  );}

export default App;

