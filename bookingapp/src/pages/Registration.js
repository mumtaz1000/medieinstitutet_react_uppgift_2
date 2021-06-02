import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import Login from "./Login"
import axios from "axios";


// useHistory
function Registration() {

  const intialValue = {
      username:"",
      email:"",
      password:""
  }

  const [registerValues, setRegisterValues] = useState(intialValue)
  //const [username, setUsername] = useState("");
  const [loggedIn, SetLoggedIn] = useState(false);
  const [error, setError] = useState("")
  const history = useHistory();

    // onchange ?? 
    
function handleOnChange(e) {

       setRegisterValues({...registerValues, [e.target.name]: e.target.value})
}

function handleOnSubmit(e) {
       e.preventDefault();

       // registerValues.username, 

      
      axios.post('http://localhost:1337/auth/local/register', {
                username: registerValues.username,
                email: registerValues.email,
                password: registerValues.password
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
         :(<div className="container max-w-full 
         mx-auto md:py-24 px-6">
  <div className="max-w-sm mx-auto px-6">
        <div className="relative flex flex-wrap">
            <div className="w-full relative">
                <div className="md:mt-6">
                    <div className="text-center 
                    font-semibold text-black">
                    Register User  
                    </div>
                    
                    <form className="mt-8" 
                    x-data="{password: '',password_confirm: ''}"  
                    onSubmit={handleOnSubmit}>
                        <div className="mx-auto max-w-lg ">
                            <div className="py-1">
                                <span className="px-1 
                                text-sm text-gray-600">Username</span>
                                <input placeholder="" 
                                type="text" name="username" 
                                value={registerValues.username} onChange={handleOnChange} 
                                       className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div className="py-1">
                            <div className="text-purple-600"> {error}</div>
                                <span className="px-1 text-sm text-gray-600">Email</span>
                                <input placeholder="" type="email" name="email" value={registerValues.email} onChange={handleOnChange}
                                       className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div className="py-1">
                                <span className="px-1 text-sm text-gray-600">Password</span>
                                <input placeholder="" type="password" x-model="password" name="password" value={registerValues.password} onChange={handleOnChange}
                                       className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div className="py-1">
                                <span className="px-1 text-sm text-gray-600">Password Confirm</span>
                                <input placeholder="" type="password" x-model="password_confirm"
                                       className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>     
                            <div className="flex justify-start">
                                <label className="block text-gray-500 font-bold my-4 flex items-center">
                                    <input className="leading-loose text-pink-600 top-0" type="checkbox"/>
                                    <span className="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                                          <a href="#"
                                             className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                           Terms and Conditions of the site
                                          </a>and
                                          <a href="#"
                                             className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                            the information data policy.</a>
                                    </span>
                                </label>
                            </div>
          

                            <button className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
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