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
    <Router>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/recipe" component={Recipe} />
    </Switch>
    </Router>
    </div> 
    
    )
  }
}

export default App;
