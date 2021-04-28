import React from 'react';

function Card( {productName, price, description, image}   ) {
    return (
        
        <>
        <div className="py-6 mx-6" >
        <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/3 bg-cover" > 
        Here comes image
        </div> 
        <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-2xl">{productName}</h1>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <div className="flex item-center mt-2">
        </div>
        <div className="flex item-center justify-between mt-3">
        <h1 className="text-gray-700 font-bold text-xl">{price}</h1>
        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Cart</button>
        </div>
        </div>
        </div>
        </div>
        
        </>
       
    )
}

export default Card