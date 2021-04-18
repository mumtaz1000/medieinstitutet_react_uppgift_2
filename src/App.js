import React from "react"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Recipe from "./pages/Recipedata"

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
        <Route exact path="/" />
        <Home />
        <Route path="/contact" />
        <Contact />
        <Route path="/recipe" component={Recipe} />
    </Switch>
    
    </div> 
    
    )
  }
}

export default App;
