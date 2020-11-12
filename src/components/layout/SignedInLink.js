import React from "react";
import { NavLink } from "react-router-dom";
import * as authActions from "../../store/actions/authActions";
import {useSelector,useDispatch} from "react-redux";

const SignedInLink = () => {
    const dispatch=useDispatch();
    // console.log(dispatch(authActions.signOut))
    return (
        <ul className="right">
            <li> <NavLink to={"/newProject"}>New Project</NavLink></li>
            <li> <NavLink to="/" onClick={()=>dispatch(authActions.signOut())}>Log Out</NavLink></li>
            <li> <NavLink to="/" className="btn btn-floating turquise lighten-">IK</NavLink></li>
        </ul>
    )
}

export default SignedInLink;

