import React from "react"
import {Route, Switch, HashRouter} from "react-router-dom"
import Navbar from "./components/Navbar/index.js"
//import Sidebar from "./components/Sidebar/index"
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
      <HashRouter basename='/'>
    <Navbar />
   <Switch>
        <Route exact path='/' component={Home}/>
        
        <Route path="/contact" component={Contact }/>
        
        <Route path="/search/:id" component={Search}/>

        <Route path="/searchop" component={SearchOption} />

        <Route path="*" component={NotFound} />
    </Switch>
    </HashRouter>
    
    </div> 
    
    )
  }
}

export default App;
