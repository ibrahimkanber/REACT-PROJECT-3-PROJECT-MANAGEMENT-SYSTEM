import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/">My Plan</Link>
                <SignedInLink/>
                <SignedOutLink/>
            </div>

        </nav>
    )
}

export default Navbar;