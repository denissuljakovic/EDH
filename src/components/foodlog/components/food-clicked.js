import React from "react";

export default function FoodClicked(props) {
  const { foodClicked } = props;
  return <h2 style={{ color: 'black'}}>{!!foodClicked ? "Last Food: " + foodClicked : "You didn't eat anything today :("} </h2>;
}
