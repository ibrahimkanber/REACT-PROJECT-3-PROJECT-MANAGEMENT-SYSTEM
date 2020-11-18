import React from "react";
import { NavLink } from "react-router-dom";
import * as authActions from "../../store/actions/authActions";
import {useSelector,useDispatch} from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const SignedInLink = () => {
    useFirestoreConnect([
        { collection: "users" },{ collection: "projects" }
    ]
    )

    const data=useSelector(state=>state.firebaseReducer)
 /*    console.log(data) */
    const {auth:{uid}}=useSelector(state=>state.firebaseReducer)
    const {data:{users}}=useSelector(state=>state.firestoreReducer)
    const activeuser= users? users[uid]:null 
  
  
    const dispatch=useDispatch();
    return (
        <ul className="right">
            <li> <NavLink to={"/newProject"}>New Project</NavLink></li>
            <li> <NavLink to="/" onClick={()=>dispatch(authActions.signOut())}>Log Out</NavLink></li>
    <li> <NavLink to="/" className="btn btn-floating turquise lighten-"> {activeuser? activeuser.initials:null}</NavLink></li>
        </ul>
    )
}

export default SignedInLink;

