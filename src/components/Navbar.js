/* This contains old navbar code */
/* Not included in Medieinstitutet assignment 2 */
import React from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar(){


    return (
      <nav className="topnav" id="myTopnav"> 
     
      <Link to="/" className="link">Home</Link>
      <Link to="/contact" className="link">
        Contact Form
      </Link>
      <Link to="/search/:id" className="link">
        Search Recipe
      </Link>
      
      <button className="loginbutton">Login/Logout</button>
    <Link class="icon" >
    <FontAwesomeIcon icon="fa-bars" />

    </Link>
           
      </nav>
    )
}
export default Navbar