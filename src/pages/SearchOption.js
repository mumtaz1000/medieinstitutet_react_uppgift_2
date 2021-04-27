import React, { useState } from "react"
import  { fetchRecipes, fetchRecipe} from "../components/API"
import RecipeList from "../pages/RecipeList"

const SearchOption = () => {
const [search, setSearch] = useState("")
const [recipe, setRecipe] = useState(null)
function getRecipeData(){
    fetchRecipes(search)
    .then(res => fetchRecipe(res.results[0].id))
    .then(res => setRecipe(res))
}
function handleChange(e){
setSearch(e.target.value)
}

    return ( 
        <div>
            <input 
            type="text"
            placeholder="Pizza"
            onChange={handleChange}
            />
            <button 
            onClick={getRecipeData}>Search</button>

{recipe && <RecipeList recipe={recipe} />}
        </div>
     );
}
 
export default SearchOption;