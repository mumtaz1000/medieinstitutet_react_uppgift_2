import React from "react"
import {Link} from "react-router-dom"
import ImageOne from "../images/pizza.jpg"
const Card = () =>{
    return(
        <div class=" px-4 py-8 max-w-md mx-auto">
        <img src={ImageOne} 
        alt="egg" 
        class=" rounded-t-lg" />
        <div class="bg-white  text-center w-full py-5 rounded-b-lg">
        <h2 class="text-2xl mb-2">Pizza</h2>
        <p class="mb-2">I am just a humble pizza!</p>
        <button class="bg-indigo-900 
        hover:bg-indigo-300
        text-white 
        font-semibold 
        py-2 px-2 rounded">50 sek</button>
         <button class="bg-indigo-900 
        hover:bg-indigo-300
        text-white 
        font-semibold 
        py-2 px-2 
        rounded
        ml-2">
         <Link to="/recipe">
        Recipe
      </Link>
        </button>
        </div>
        </div>
        
        
    )
}
export default Card