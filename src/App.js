import React from "react"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className=""> 
    <Router>
    <Navbar />
    <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
    </Switch>
    </Router>
    </div> 
    
  );
}

export default App;
