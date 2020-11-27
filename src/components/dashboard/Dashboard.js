import React from 'react';
import { useSelector } from "react-redux";
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import { useFirestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import Calendar from "react-calendar"
import { StyledDashboardCardWrapper,StyledNotificationsWrapper,StyledDashboardRightSideCardWrapper } from './Dashboard.style';
import 'react-calendar/dist/Calendar.css';

function Dashboard() {

    useFirestoreConnect(
        [
            { collection: "users" }, { collection: "projects", orderBy: ["createdAt", "desc"] },{collection: "notifications"}
        ]
    )

    const { projects } = useSelector(state => state.firestoreReducer.ordered)
    const { users } = useSelector(state => state.firestoreReducer.ordered)
    const { auth } = useSelector(state => state.firebaseReducer)
    if (!auth.uid) return (<Redirect to="/signIn" />)

    /* console.log(auth)
    console.log(users) */
    const data = users?.filter(user=>user.id==auth.uid)
 
    const userRole=data && data[0]?.role

    const dinamicStyle={
        display:userRole=="admin"? "block":"none"
    }

    return (
        <StyledDashboardCardWrapper >
            <ProjectList projects={projects} userRole={userRole} />
            <StyledDashboardRightSideCardWrapper>
                    <Calendar />
                <StyledNotificationsWrapper style={dinamicStyle}>
                <Notifications />
                </StyledNotificationsWrapper>
            </StyledDashboardRightSideCardWrapper>
        </StyledDashboardCardWrapper>
    )
}

export default Dashboard;
