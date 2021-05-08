/* This contains Navbar menu code */
/* Included in Medieinstitutet assignment 2 */
import React from "react"
import {
Nav, 
NavLink, 
Bars, 
NavMenu, 
NavBtn, 
NavBtnLink} from "./NavbarElements"
const Navbar = () => {
    return ( 
<>
    <Nav>
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
    </Nav>
</>
     );
}
 
export default Navbar;