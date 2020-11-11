import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLink = () => {
    return (
        <ul className="right">
            <li> <NavLink to={"/newProject"}>New Project</NavLink></li>
            <li> <NavLink to="/">Log Out</NavLink></li>
            <li> <NavLink to="/" className="btn btn-floating turquise lighten-">IK</NavLink></li>
        </ul>
    )
}

export default SignedInLink;

