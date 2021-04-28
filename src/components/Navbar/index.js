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
            <NavLink to="/contact" activeStyle>
            Contact Form
            </NavLink>
            <NavLink to="/search/:id" activeStyle>
            Search with id
            </NavLink>
            <NavLink to="/searchop" activeStyle>
            Search Bar
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