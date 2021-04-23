import React from "react"
//import Card from "../components/Card"
import useFetch from "../useFetch"
import RecipeList from "./RecipeList"
function Home(){
    const {error, isPending, recipe} = useFetch("Pizza")
    return(
        <>
{error && <div>{error}</div>}
{isPending && <div>Loading...</div>}
{recipe && <RecipeList recipe={recipe} />}
        </>
    )
}
export default Home