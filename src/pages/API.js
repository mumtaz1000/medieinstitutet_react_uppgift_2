import React, {useEffect, useState} from 'react';
import axios from "axios";

function  API () {

    const [data , setData ] = useState([]);
    
    useEffect(()=>{
         const fetchData = async()=> {

            try {                
         const response=   await axios.get("http://localhost:1337/user-bookings")
          // axios är ett fetch bibliotek , http get, post, update , delete  
          console.log(response.data)
          const res = response.data 
          // json.string
          setData(res)

         
        }
    
    catch(err) {
        console.log(err)    
    }
        
}
        fetchData()   
    }, [])

  
    return (
    <>
    data kommer att kunna skriva ut här:-  
    {data.map(  e=> <div> {e.name} </div>)}
    <div> Hello from api </div> 
    </>
    
    )

}


export default API;