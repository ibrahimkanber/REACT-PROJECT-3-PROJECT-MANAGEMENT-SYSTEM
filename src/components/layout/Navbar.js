import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";
import { useSelector,useDispatch} from "react-redux";
import { editProject } from "../../store/actions/ProjectActions";

const Navbar = () => {
    const dispatch=useDispatch();
    const {auth} = useSelector(state => state.firebaseReducer)

    const links=auth.uid ? <SignedInLink/>:<SignedOutLink/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/">My Plan</Link>
                {/* // alternative solution : {auth.isLoaded && links} */}
                {links}
            </div>

        </nav>
    )
}

export default Navbar;