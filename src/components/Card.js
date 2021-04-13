import React from "react"
import ImageOne from "../images/pizza.jpg"
const Card = () =>{
    return(
        <div class="flex flex-col 
        justify-center items-center  
        h-screen 
        font-mono 
        py-40 
        bg-indigo-100
        px-40
        overflow-hidden
        ">
        <img src={ImageOne} 
        alt="egg" 
        class="h-full w-6/12 rounded-t-lg" />
        <div class="bg-white  text-center w-6/12 py-5 rounded-b-lg">
        <h2 class="text-2xl mb-2">Pizza</h2>
        <p class="mb-2">I am just a humble pizza!</p>
        <button class="bg-indigo-900 
        hover:bg-indigo-300
        text-white 
        font-bold 
        py-2 px-4 rounded">50 sek</button>
        </div>
        </div>
        
        
    )
}
export default Card