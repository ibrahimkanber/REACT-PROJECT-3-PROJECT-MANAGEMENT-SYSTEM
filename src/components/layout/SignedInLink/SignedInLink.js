import React from "react";
import { NavLink } from "react-router-dom";
import * as authActions from "../../../store/actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { StyledNavbarLinksRight,StyledNavbarLinksRightLi} from "../SignedOutLink/SignedOutLinks.style";
import { StyledNavbarLinksRightCircle } from "./SignInLink.style";

const SignedInLink = () => {
    useFirestoreConnect(
        [
            { collection: "users" }, { collection: "projects" }
        ]
    )


    const { auth: { uid } } = useSelector(state => state.firebaseReducer)
    const { data: { users } } = useSelector(state => state.firestoreReducer)
    const activeuser = users ? users[uid] : null


    const dispatch = useDispatch();
    return (
        <StyledNavbarLinksRight>
            <StyledNavbarLinksRightLi>
                <NavLink to={"/newProject"} className="navLink">New Project</NavLink>
            
            </StyledNavbarLinksRightLi>
            <StyledNavbarLinksRightLi>
                <NavLink to="/" onClick={() => dispatch(authActions.signOut())} className="navLink">Log Out</NavLink>
            </StyledNavbarLinksRightLi> 
            
            <StyledNavbarLinksRightCircle>
                <NavLink to="/" className="navLink" > {activeuser ? activeuser.initials : null} </NavLink>
            </StyledNavbarLinksRightCircle>
        </StyledNavbarLinksRight>
    )
}

export default SignedInLink;

