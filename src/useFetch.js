import {useEffect, useState} from "react"
import {fetchRecipe, fetchRecipes} from "./components/API"
const useFetch = (SearchQuery) => {
const [recipe, setRecipe] = useState(null)
const [isPending, setIsPending] = useState(true)
const[error, setError] = useState(null)

useEffect(()=>{
    setTimeout(()=>{
    fetchRecipes(SearchQuery)
        .then(res => {
            if (res.results.length > 0)
            {return fetchRecipe(res.results[0].id) }
           else
           {throw Error('could not fetch the data for that resource');}
})
        .then(res => {
            setRecipe(res);
            setIsPending(false);
            setError(null);
            })
        .catch(err=>{
            setIsPending(false);
            setError(err.message)
        })
        },10);
    },[SearchQuery])
    return {recipe, isPending, error}
}
 
export default useFetch;