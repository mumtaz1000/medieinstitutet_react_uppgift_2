import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return (
      <nav className="flex justify-between items-center py-4 bg-indigo-400 font-bold"> 
      <h1 className="text-2xl text-white text-grey-800 py-2 px-4"> Foodie App</h1> 
      <div className="flex">
      
      <div className="text-xl text-white hover:text-indigo-900 py-2 px-4 ">
      <Link to="/" >Home</Link>
      </div>
      <div className="text-xl text-white hover:text-indigo-900 py-2 px-4">
      <Link to="/contact">
        Contact Form
      </Link>
      <Link to="/search/:id">
        Search Recipe
      </Link>
      </div>
      <button className="bg-indigo-900 
      hover:bg-indigo-300
      mr-8
      text-white text-xl
      font-bold 
      py-2 px-4 rounded">Login/Logout</button>
      </div> 
           
      </nav>
    )
}
export default Navbar