import React from "react"
import "./App.css"
import {Route, Switch, HashRouter} from "react-router-dom"
import Navbar from "./components/Navbar/index.js"
/* This contains main App code */
/* Still working on it */
/* Included in Medieinstitutet assignment 2 */
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import UploadFile from "./pages/UploadFile"
import AddToCard from "./components/AddToCard"


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

        <Route path="/registration" component={Registration} />

        <Route path="/login" component={Login} />

        <Route path="/upload" component={UploadFile} />

        <Route path="/addtocard" component={AddToCard} />
        

        <Route path="*" component={NotFound} />
    </Switch>
    </HashRouter>
    
    </div> 
    
    )
  }
}

export default App;
