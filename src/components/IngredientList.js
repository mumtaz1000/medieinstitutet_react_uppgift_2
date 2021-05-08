/* This contains spoonacular search recipe with id code */
/* Not included in Medieinstitutet assignment 2 */
import React,{ useState} from "react"


const IngredientList = (items) => {
const [cart, setCart] = useState([])
const addToCart = (el) =>{
    setCart([...cart, el])    
}

    return ( 
        <li key={items.id}>
            {items.name} 
            ({items.measures.metric.amount*1}
            {items.measures.metric.unitShort})
            &nbsp;
            <input type="submit" value="add to cart"
                onClick={()=>addToCart(items)}
            />
        </li>
     );
}
 
export default IngredientList;