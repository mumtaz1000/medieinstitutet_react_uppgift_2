import React from "react"
import { fetchRecipes, fetchRecipe } from "./components/API"
//import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
//import Navbar from "./components/Navbar"
//import Home from "./pages/Home"
//import Contact from "./pages/Contact"
import Recipe from "./pages/Recipe"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={}
  }
  
  componentDidMount(){
    fetchRecipes("Pizza")
    .then(res => fetchRecipe(res.results[0].id))
    .then(res => this.setState({recipe:res}))
  }
  render(){
  return (
    <div className=""> 
    <Recipe recipe={this.state.recipe}/>
    {/*<Router>
    <Navbar />
    <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        
    </Switch>
    </Router>*/}
    </div> 
    
    )
  }
}

export default App;
