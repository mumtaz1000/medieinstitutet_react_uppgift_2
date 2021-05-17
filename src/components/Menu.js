import React , {useState, useEffect}from 'react';
import {
Nav, 
NavLink, 
Bars, 
NavMenu, 
NavBtn, 
NavBtnLink} from "../components/Navbar/NavbarElements"


//jsonwebtoken
function Menu() {
const [jwt, setJwt] = useState(null);

// hooks -> life cycle method,  en component anropning-> render (JSX)  -> ComponentDidMount

// varje gång din state uppdateras , uppdaterar din component/jsx

                                    //-> componentDidUpdate -> componentwillUnmount
// life cycle method, -> componentDidRendered()
useEffect(()=>{
       const JWT = localStorage.getItem("jwt")
       setJwt(JWT)  
   //return ()=>  fun(); 
  },  [])


function clearLocalStorage() {
  localStorage.clear();
  window.location.reload();

}

return (   
     <>
     { jwt ? 
      ( <Nav>
        <NavLink to="/" >
            <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/contact" >
            Contact Form
            </NavLink>            
            <NavLink to="/upload" >
            Upload
            </NavLink>
            <NavLink to="/registration" >
            Registration
            </NavLink>
            <NavLink to="/login" >
            Logout
            </NavLink>
            <NavLink to="/addtocard" >
            Add to Cart
            </NavLink>
        </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">SignIn</NavBtnLink>
            </NavBtn>
    </Nav>): 


  ( <Nav>
    <NavLink to="/" >
        <h1>Logo</h1>
    </NavLink>
    <Bars />
    <NavMenu>
        <NavLink to="/contact" >
        Contact Form
        </NavLink>            
        <NavLink to="/upload" >
        Upload
        </NavLink>
        <NavLink to="/registration" >
        Registration
        </NavLink>
        <NavLink to="/login" >
        Login
        </NavLink>
        <NavLink to="/addtocard" >
        Add to Cart
        </NavLink>
    </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">SignIn</NavBtnLink>
        </NavBtn>
</Nav>)
}

        </>
    )
}

export default Menu