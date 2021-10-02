import React from 'react';
import { FlexDiv, Logo, NavBar, NavLink } from './navbarelements';
function Navbar() {
    return ( 
        <NavBar>
        <FlexDiv>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Sign Up'>Sign Up</NavLink>
            <NavLink to='/Sign In'>Sign In</NavLink>
        </FlexDiv>
        <FlexDiv>
            <Logo/>
        </FlexDiv>
    </NavBar> 
    );
}

export default Navbar;