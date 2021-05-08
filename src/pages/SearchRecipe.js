/* This contains recipe search code */
/* Still working on it */
/* Not included in Medieinstitutet assignment 2 */
import React, { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchRecipe } from "../components/API"
import RecipeList from "./RecipeList"
//import RecipeList from "../pages/RecipeList"

const SearchRecipe =()=>{
const {id} = useParams()
const [value] = useState(id)
const [recipe, setRecipe] = useState(null)

useEffect(()=>{
  fetchRecipe(value)
  .then(res=>{setRecipe(res)})
},[value])
    return (
        <div className="mainDiv">
  
{recipe && <RecipeList recipe={recipe} />
}
        </div>)
 
}

export default SearchRecipe