import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "../SignedInLink/SignedInLink";
import SignedOutLink from "../SignedOutLink/SignedOutLink";
import { useSelector} from "react-redux";
import { StyledWrapper } from "./Navbar.style";


const Navbar = () => {
    const {auth} = useSelector(state => state.firebaseReducer)

    const links=auth.uid ? <SignedInLink/>:<SignedOutLink/>
    return (
       
            <StyledWrapper>
                <Link to="/"  className="navLink">Clarusway Project Tracking System</Link>
                {/* // alternative solution : {auth.isLoaded && links} */}
                {links}
            </StyledWrapper>
   
    )
}

export default Navbar;