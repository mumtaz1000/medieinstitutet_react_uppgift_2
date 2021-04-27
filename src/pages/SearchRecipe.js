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
        <>
  
{recipe && <RecipeList recipe={recipe} />
}
        </>)
 
}

export default SearchRecipe