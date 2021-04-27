import React from "react"
import Recipe from "./Recipe"
import { fetchRecipes, fetchRecipe } from "../components/API"

class Recipedata extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
      }

      componentDidMount(){
        fetchRecipes("Pizza")
        .then(res => fetchRecipe(res.results[0].id))
        .then(res => this.setState({
            recipe : res
        }))
      }

    render(){
        return (
            <>
                <Recipe recipe={this.state.recipe}/>
            </>
        )
    }
}
export default Recipedata;