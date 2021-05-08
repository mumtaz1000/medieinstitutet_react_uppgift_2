import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from "../components/Card"



function CardList() {

    // useState for products 
    const [products, setProducts] = useState([]);

    useEffect(()=>{


        
        const fecthProducts= async()=>{
           const response =   await axios.get("http://localhost:1337/products")
           console.log(response)

           setProducts(response.data)
        }


        fecthProducts()

    }, [])

    // useEffect för att kunna hämta data från database 

    return (
        <div>
            
             {products.map((product)=>{
                 return (
                     <Card key={product.id} image={product.image}  productName={product.name}  price={product.price} description= {product.description} />
                 )
             }) }
               
        </div>
    )
}

export default CardList