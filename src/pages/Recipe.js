import React from "react"


let renderIngredients = (ingredient) =>{
    return   <li>{ingredient.name}</li>
}
const Recipe =(props)=>{
    if(props.recipe !== undefined){
    return (
        <>
            <image id="main-image"
            src=""
            alt="Pizza" 
            />
            <h1 id="title">{props.recipe.title}</h1>
            <div id="description">
            {props.recipe.description}</div>
            <h2>Ingredients</h2>
            <ul id="ingredients">
              {props.recipe.extendedIngredients.map(renderIngredients)}
            </ul>
            <h2>Instructions</h2>
            <div id="instructions">{props.recipe.instructions}</div>
        </>
    )} else 
    return <div>Loading....</div>
}

export default Recipe