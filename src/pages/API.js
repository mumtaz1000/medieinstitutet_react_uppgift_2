import React, {useEffect, useState} from 'react';
import axios from "axios";

function  API () {

    const [data , setData ] = useState([]);
    const [token]= useState(localStorage.getItem("jwt"));
    
    useEffect(()=>{
         const fetchData = async()=> {

            try {                
         const response= await axios.get("http://localhost:1337/userbookings?users_permissions_user.id=1",
         {
             headers: {
            Authorization: `Bearer ${token}`
          }  
        })
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
    {data.map(  e=> <div key={e.id}> {e.name} </div>)}
    <div> Hello from api </div> 
    </>
    
    )

}


export default API;