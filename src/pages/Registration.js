import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Login from "../pages/Login"
import axios from "axios";


// useHistory
function Registration() {

  const intialValue = {
      username:"",
      email:"",
      password:""
  }

  const [registerValues, setRegisterValues] = useState(intialValue)
  const [username, setUsername] = useState("");
  const [loggedIn, SetLoggedIn] = useState(false);
  const [error, setError] = useState("")
  const history = useHistory();

    // onchange ?? 
    
function handleOnChange(e) {

       setRegisterValues({...registerValues, [e.target.name]: e.target.value})
}

function handleOnSubmit(e) {
       e.preventDefault();
     
      axios.post('http://localhost:1337/auth/local/register', {
                username: registerValues.username,
                email: registerValues.email,
                password: registerValues.password,
            })
            .then( (e)=> {  
                
                if(e.data.user) 
                //history.push("/login")
                SetLoggedIn(true)
                // redirect user login page
            
            })
            .catch((err)=> {setError(err.response.data.message[0].messages[0].message)}) 
            
    } 
    return (
        <>
        {loggedIn ?   
        
        <Login/> 
         :(<div >
  <div >
        <div >
            <div >
                <div >
                    <div >
                    Register User  
                    </div>
                    
                    <form   onSubmit={handleOnSubmit}>
                        <div >
                            <div >
                                <span >Username</span>
                                <input placeholder="" type="text" name="username" value={registerValues.username} onChange={handleOnChange} 
                                      />
                            </div>
                            <div >
                            <div > {error}</div>
                                <span >Email</span>
                                <input placeholder="" type="email" name="email" value={registerValues.email} onChange={handleOnChange}
                                       />
                            </div>
                            <div >
                                <span >Password</span>
                                <input placeholder="" type="password" x-model="password" name="password" value={registerValues.password} onChange={handleOnChange}
                                       />
                            </div>
                            <div >
                                <span >Password Confirm</span>
                                <input placeholder="" type="password" 
                                       />
                            </div>     
                            <div >
                                <label >
                                    <input type="checkbox"/>
                                    <span >Accept the
                                          <a href="#"
                                             >
                                           Terms and Conditions of the site
                                          </a>and
                                          <a href="#"
                                             >
                                            the information data policy.</a>
                                    </span>
                                </label>
                            </div>
          

                            <button >
                                Register
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)}          
</>    
    )
}



export default Registration