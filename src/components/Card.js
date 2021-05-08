/* This contains product card code */
/* Still working on it */
/* Included in Medieinstitutet assignment 2 */
import React from 'react';

function Card( {productName, price, description, image}   ) {
    return (
        
        <>
        <div  >
        <div >
        <div > 
        <img src={`http://localhost:1337${image.url}`} 
        alt="mobile iphone"/>
        </div> 
        <div >
        <h1 >{productName}</h1>
        <p >{description}</p>
        <div >
        </div>
        <div >
        <h1 >{price}</h1>
        <button >Add to Cart</button>
        </div>
        </div>
        </div>
        </div>
        
        </>
       
    )
}

export default Card