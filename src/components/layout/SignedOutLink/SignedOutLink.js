import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbarLinksRight,StyledNavbarLinksRightLi } from "./SignedOutLinks.style";


const SignedOutLink = () => {
    return (
       <StyledNavbarLinksRight>
            <StyledNavbarLinksRightLi> 
                <NavLink to="/signUp" className="navLink" >Signup</NavLink>
            </StyledNavbarLinksRightLi>

            <StyledNavbarLinksRightLi>
                <NavLink to="/signIn" className="navLink">Login</NavLink>
            </StyledNavbarLinksRightLi>
            
        </StyledNavbarLinksRight>
   
    )
}

export default SignedOutLink;
