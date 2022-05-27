import React from "react";
import "./styles.css";
import FoodData from "./data/calorie-data";
import HeaderElement from "./components/header-element";
import TotalCalories from "./components/total-calories";
import FoodTable from "./components/food-table";
import FoodClicked from "./components/food-clicked";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import bck from './bck.jpg';

export const MainContent = styled.div`
  box-sizing: border-box;
  color: #ecfdf9;
  display: flex;
  height: 100vh;
  flex-direction: column; 
  margin-top: 15px;
  align-items: center;
`;
export default class FoodLog extends React.Component {
  state = {
    foodClicked: null,
    totalCalories: 0
  };

onFoodPillClickHandler = (name, calories) => {
    const newCalories = this.state.totalCalories + calories;
    this.setState({ foodClicked: name, totalCalories: newCalories });
  };

  render() {
    return (<div> 
      <img src={bck} style={{position:"absolute", width:"100%", height:"1200px", opacity:"0.8", display:"flex", top:"0cm", objectFit:"cover", autoPlay:"true"}}>
      
      </img><div style={{zIndex:"10", position:"relative"}}> 
      <MainContent className="FoodLog">
        <HeaderElement header={"Calorie Tracker"} />
        <FoodTable
          calorieData={FoodData}
          onFoodPillClicked={this.onFoodPillClickHandler}
        />
        <FoodClicked foodClicked={this.state.foodClicked} />
        <TotalCalories totalCalories={this.state.totalCalories} />
      </MainContent></div></div>
    );
  }
}
