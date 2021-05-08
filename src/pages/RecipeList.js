/* This contains show recipe along with ingredients code */
/* Not included in Medieinstitutet assignment 2 */
import React from "react"
import IngredientList from "../components/IngredientList"

//import Cart from "../pages/Cart"
let renderIngredients = (ingredients) =>{
    return IngredientList(ingredients)
}
const RecipeList = ({recipe}) => {
 
return ( 
        <>
<div className="px-4 py-8 max-w-md mx-auto">
    <img 
    src={recipe.image}
    alt="Pizza" />
    <h1 id="title">{recipe.title}</h1>
    <div id="description">
    {recipe.description}</div>
    <h2>Ingredients</h2>
    <ul key={recipe.id}>{recipe.extendedIngredients.map(renderIngredients)}</ul>
    <h2>Instructions</h2>
    <div id="instructions">{recipe.instructions}</div>
</div>
        </>
     );
}
 
export default RecipeList;