import React from "react"
import "./App.css"
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Navbar from "./components/Navbar/Menu.js"
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
import Bookningar from "./pages/MinaBookningar"
import ForgetPassword from "./pages/Forgot-password"
import ResetPassword from "./pages/Reset-Password"
import CardList from "./components/CardList"
import Api from "./pages/API"

class App extends React.Component {
  constructor(){
    super()
    this.state ={}
  }
  render(){
  return (
    <div > 
    <Router>
    <Navbar />
   <Switch>
        <Route exact path='/' component={Home}/>
        
        <Route exact path='/card' component={Home}/>

        <Route path="/form" component={Contact }/>

        <Route path="/register" component={Registration} />

        <Route path="/login" component={Login} />

        <Route path="/upload" component={UploadFile} />

        <Route path="/addtocard" component={AddToCard} />

        <Route path="/bookningar" component={Bookningar} />

        <Route path="/forgot-password" component={ForgetPassword} />

        <Route path="/reset-password" component={ResetPassword} /> 
        
        <Route path="/cardlist" component={CardList} />

        <Route path="/api" component={Api} />
        
        <Route path="*" component={NotFound} />
    </Switch>
    </Router>
    </div> 
    
    )
  }
}

export default App;
