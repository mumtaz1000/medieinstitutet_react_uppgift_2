import React from "react"
import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Recipe from "./pages/Recipedata"
import Card from "./components/Card"

class App extends React.Component {
  constructor(){
    super()
    this.state ={}
  }
  render(){
  return (
    <div class="bg-indigo-100"> 
    <Navbar />
   
    <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/contact" component={Contact }/>
        <Route path="/recipe" component={Recipe} />
    </Switch>
    
    </div> 
    
    )
  }
}

export default App;
