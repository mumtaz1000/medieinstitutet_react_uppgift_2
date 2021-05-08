import React, {useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";


function Login() {

  // steg 1: ?? 
  const initailValues= {
    email:"",
    password:""
  }
const [formValues, setFormValues]= useState(initailValues);
const [error, setError]= useState("")
//const [authenticated, setAuthenticated] = useState(false);
const [username, setUsername] = useState("")
const [jwt, setJwt] = useState("")
const history= useHistory();

function handleOnchange(e) {
    setFormValues({...formValues, [e.target.name]:e.target.value})
  }

  useEffect(()=>{
     
   const JWT = localStorage.getItem("jwt")
   setJwt(JWT);


  }, [])





   function handleOnSubmit(e){
     e.preventDefault();

    // axios request till login sidan 
  axios
  .post('http://localhost:1337/auth/local', {
    identifier: formValues.email,
    password: formValues.password,
  })
  .then(response => {
    // Handle success.
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
     
    //setJwt(response.data.jwt)
    // spara response.data.jwt i client sidan 
    localStorage.setItem("jwt", response.data.jwt);

     //setUsername(response.data.user.username)
     
    history.push("/")
    window.location.reload();

    //const JWT= localStorage.getItem("jwt")
    //console.log(testJWT)

   // setJwt(JWT)
      
   // console.log("jwt state", jwt)


    //console.log("user data ", response.data)
    //setUsername(response.data.user.username)
    // ändra state som kommer att rendera nån component vid inloggning
  })
  .catch( (err)=>{
     console.log(err); 
     // if user is not registered show that he needs to be registered
    setError("Dina inloggningar stämmer inte eller du inte är registerat")
    //setError(err.response.message[0].messages[0].message)
  })
   }
// 11.00
   


return (  

    <> 
     
<div >
<div >
  <div>
    
    <h2 >
      Sign in to your account
    </h2>
    <h1>{error}</h1>
  <form  onSubmit={handleOnSubmit}  method="POST">
    <input type="hidden" name="remember" value="true"/>
    <div >
      <div>
        <label >Email address</label>
        <input id="email-address" value={formValues.email} onChange={handleOnchange}   name="email" type="email" 
        required 
         placeholder="Email address"/>
      </div>
      <div>
        <label >Password</label>
        <input id="password" value={formValues.password} onChange={handleOnchange} name="password" type="password" 
        required 
         placeholder="Password"/>
      </div>
    </div>

    <div>
      <div >
        <input id="remember_me" name="remember_me" type="checkbox" 
        />
        <label  >
          Remember me
        </label>
      </div>
      <div >
        <a href="#" >
          Forgot your password?
        </a>
      </div>
    </div>

    <div>
      <button type="submit">
        Sign in
      </button>
    </div>
  </form>

</div>
</div>
</div>

</>
  )
}

export default Login

