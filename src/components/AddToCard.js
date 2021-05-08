import axios from 'axios';
import React, {useState} from 'react'

function AddToCard() {


    // initalvalues 

    const initialValues = {

        name:"",
        description:"",
        price:0
    }



    // state

    const [formValues , setFormValues] = useState(initialValues)


    // onhandlechange

    function handleOnchange(e) {
        setFormValues({...formValues, [e.target.name]:e.target.value})
      }




    // onsubmit  value={formValues.email} onChange={handleOnchange}

        
function onHandleSubmit(e) {
     e.preventDefault();

     // api post request 

     axios.post("http://localhost:1337/products", {
         name:formValues.name, 
         description:formValues.description,
         price : formValues.price
     }).then(  (res)=> {
         console.log(res.data)


     }).catch(  (err)=> {
            console.log(err)
     })



}

// 11.00


    return (
        <>

<div >
  <div>
            <form  method="post" onSubmit={onHandleSubmit}>
               



        <div>
          <label>Product Name </label>
          <input id="email-address"  value={formValues.name} 
          onChange={handleOnchange}   name="name" type="text" 
          required  placeholder="product name"/>
        </div>
         

        <div>
          <label >Product Description </label>
          <input id="email-address" 
          value={formValues.description} 
          onChange={handleOnchange}  name="description" 
          type="text" required  placeholder="Description"/>
        </div>

        <div>
          <label >Product price </label>
          <input id="email-address" value={formValues.price} 
          onChange={handleOnchange}  name="price" type="number" 
          required  placeholder="price"/>
        </div>



  
     <button type="submit">  
          <span >  
          </span>
          Add product 
        </button> 
            
            </form>

            </div>
        </div>

</>
    )
}

export default AddToCard