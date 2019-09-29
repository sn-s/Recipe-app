import React from "react";
import "./Recipe.css";

const Recipe = ({name, calories, ingredients, image}) => {
  const list = ingredients.map((ingredient, index) => {
   return <li className="list" key={name+index} >{ingredient.text}</li>
  })
  return(
      <div className="black bg-light-yellow dib br4 pa3 ma4 grow bw2 shadow-5">
        <h3>Meal name: {name}</h3>
        <img className="images" src={image} alt="food"/>
        <p>Calories: <strong>{Math.round(calories)}cal</strong></p>
        <ul>
          {list}
        </ul>
      </div>
  )
}

export default Recipe;
