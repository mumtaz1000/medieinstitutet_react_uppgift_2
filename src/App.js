import React from "react"
import "./App.css"
import {Route, Switch, HashRouter} from "react-router-dom"
import Navbar from "./components/Navbar/index.js"
import Home from "./components/Home"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import Registration from "./components/Registration"
import Login from "./components/Login"
import UploadFile from "./components/UploadFile"
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
