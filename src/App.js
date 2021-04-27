import React from "react"
import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
//import Shop from "./pages/Shop"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Search from "./pages/SearchRecipe"
import SearchOption from "./pages/SearchOption"

class App extends React.Component {
  constructor(){
    super()
    this.state ={}
  }
  render(){
  return (
    <div > 
    <Navbar />
   
   <Switch>
        <Route exact path='/' component={Home}/>
        
        <Route path="/contact" component={Contact }/>
        
        <Route path="/search/:id" component={Search}/>

        <Route path="/searchop" component={SearchOption} />

        <Route path="*" component={NotFound} />
    </Switch>
    
    </div> 
    
    )
  }
}

export default App;
