import React, {useState} from 'react'


const isAdmin=true;

function Form() {


    const initialValues = {
        productName:" ",
        price: " "
    }
    const [formValues, setFormValues] = useState(initialValues)
   

    function onHandleSubmit(e) {
      e.preventDefault();

      console.log(formValues)
      // ska skickas till database via api /Api endpoint 
    }
  

    function onHandleChange(e) {
         //console.log("SINGLE NAME " , e.target.name);
        // console.log("VALUE" , e.target.value);
         //console.log("Form values " , formValues);
        setFormValues({...formValues, [e.target.name]:e.target.value})
        
    }

    //10.00

    return (
        <>
            
      {isAdmin &&  
      (<form onSubmit={onHandleSubmit} >
            <label> ProductName:  </label> <input className="border" placeholder="Ange product name" value={formValues.productName} name="productName" onChange={onHandleChange} />
            <label> ProductName:  </label>  <input className="border " placeholder="Ange price " type="number" name="price" value ={formValues.price} onChange={onHandleChange}/>
            <button className="bg-purple-600">Lägg till </button>
       </form>) }
        
    </>
    )
}

export default Form