import React,{useState} from 'react';
import {useSelector} from "react-redux";
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import {useFirestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";
 
// console.log(useFirestoreConnect)

function Dashboard() {
    
    useFirestoreConnect([
        {collection:"projects",orderBy:["createdAt","desc"]}
    ])

    const {projects}=useSelector(state=>state.firestoreReducer.ordered)
    const {auth} = useSelector(state => state.firebaseReducer)
    if(!auth.uid) return(<Redirect to="/signIn"/>)
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
