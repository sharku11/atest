import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
export const FlexDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
export const NavBar = styled.nav`
display:flex;l
align-items:center;
justify-content:space-around;
background-color:blue;
height:50px
`;
export const NavLink = styled(Link)`
color:white;
width:60px;
height:30px;
cursor:pointer;
text-decoration:none;
padding:2px;
`; 
export const Logo = styled(FaBars)`
width:50px;
height:50px;
color:white;
font-weight:500;
`;