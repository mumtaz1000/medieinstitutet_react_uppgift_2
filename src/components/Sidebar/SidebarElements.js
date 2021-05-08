/* This contains sidebar menu styling code */
/* Still working on it */
/* Not included in Medieinstitutet assignment 2 */
import styled from "styled-components"
import {FaTimes} from "react-icons/fa"
import { LinkS } from "@fortawesome/free-solid-svg-icons"


export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#0d0d0d;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
color:#fff;
`

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline:none;
`

export const SidebarWrapper = styled.div`
color:#fff;
`

export const SidebarLink = styled(LinkS)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration:none;
color:#fff;
cursor:pointer;

&:hover{
    color:#01bf71;
    transition: 0.2s ease-in-out;
}
`
export const SideBtnWrap = styled.div`
display:flex;
justify-content: center;
`

//time 1:01:44