import React from "react";
import style from "./Recipe.module.css";

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image}/>
        </div>
    );
}

export default Recipe;