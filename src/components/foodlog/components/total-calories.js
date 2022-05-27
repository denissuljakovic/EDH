import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import styled from 'styled-components';

export default function TotalCalories(
  { totalCalories }) 
  { let calText =(totalCalories);  
    return (
    <div style={{ color: 'black', fontSize:"31px" }}>{"Total: " + (totalCalories) + "Kcal"}</div>
    )
  }

