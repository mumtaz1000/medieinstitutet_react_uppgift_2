import React from "react"
import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Recipe from "./pages/Recipedata"
import NotFound from "./pages/NotFound"


class App extends React.Component {
  constructor(){
    super()
    this.state ={}
  }
  render(){
  return (
    <div className="bg-indigo-100"> 
    <Navbar />
    <Switch>
        <Route exact path='/' component={Home}/>

        <Route path="/contact" component={Contact }/>
        <Route path="/recipe" component={Recipe} />
        <Route path="*" component={NotFound} />
    </Switch>
    
    </div> 
    
    )
  }
}

export default App;
