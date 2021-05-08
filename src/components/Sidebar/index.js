/* This contains sidebar menu code */
/* Still working on it */
/* Not included in Medieinstitutet assignment 2 */
import React from "react"
import {SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink,SideBtnWrap, SidebarRoute} from "./SidebarElements"

const Sidebar = () => {
    return ( 
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
<SidebarMenu>
    <SidebarLink to="home">
<h1>Logo</h1>
    </SidebarLink>
    <SidebarLink to="contact">
Contact Form
    </SidebarLink>
    <SidebarLink to="searchop">
Search Bar
    </SidebarLink>
    <SidebarLink to="signup">
Sign Up
    </SidebarLink>
</SidebarMenu>
<SideBtnWrap>
    <SidebarRoute to="/signin">Sign In </SidebarRoute>
</SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
     );
}
 
export default Sidebar;