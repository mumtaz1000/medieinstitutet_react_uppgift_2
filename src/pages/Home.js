import React,{useState,useEffect} from "react"
import Card from "../components/Card"
import axios from "axios"

function Home(){
    //const {error, isPending, recipe} = useFetch("Pizza")
const [products, setProducts] = useState([])
useEffect(()=>{
const fetchProducts = async()=>{
    const response = await axios.get("http://localhost:1337/products")
    setProducts(response.data)
   console.log(products)
}
fetchProducts()
},[])

    return(
        <div className="mainDiv">
{products.map((product)=>{
                 return (
                     <Card key={product.id} image={product.img}  productName={product.name}  price={product.price} description= {product.description} />
                 )
             }) }
               
        </div>
    )
}
export default Home