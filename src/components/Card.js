import React from "react"
//import {Link} from "react-router-dom"

const Card = ({recipe}) =>{
    return(
        <div className=" px-4 py-8 max-w-md mx-auto">
        <img src={recipe.image} 
        alt="egg" 
        className=" rounded-t-lg" />
        <div className="bg-white  text-center w-full py-5 rounded-b-lg">
        <h2 className="text-2xl mb-2">{recipe.title}</h2>
        <p className="mb-2">I am just a humble pizza!</p>
        <button className="bg-indigo-900 
        hover:bg-indigo-300
        text-white 
        font-semibold 
        py-2 px-2 rounded">50 sek</button>
         <button className="bg-indigo-900 
        hover:bg-indigo-300
        text-white 
        font-semibold 
        py-2 px-2 
        rounded
        ml-2">
        
        </button>
        </div>
        </div>
        
        
    )
}
export default Card