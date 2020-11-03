import React,{useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import {useFirestoreConnect} from "react-redux-firebase";

console.log(useFirestoreConnect)

function Dashboard() {
    const [list,setList]=useState([])
    useFirestoreConnect([
        {collection:"projects"}
    ])

    const projects=useSelector(state=>state.firestoreReducer.ordered.projects)

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
