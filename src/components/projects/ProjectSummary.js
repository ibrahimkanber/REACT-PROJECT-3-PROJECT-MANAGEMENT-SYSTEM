import React from 'react';
import moment from 'moment';
import {useDispatch,useSelector} from "react-redux";
import { StyledSummaryWrapper } from './styles/ProjectSummary.style';

function ProjectSummary({ project }) {
    const {auth:{uid}}=useSelector(state=>state.firebaseReducer)
    const dinamicStyle={
        backgroundColor: uid==project.authorId? "yellow":"white"
    }
    return (
        <StyledSummaryWrapper style={dinamicStyle}>

            <p>{project.title}</p>
            <div >
                <p>Posted by {project.authorFirstName.toUpperCase()}</p>
                <div >{moment(project.createdAt.toDate()).calendar()}</div>
            </div>

        </StyledSummaryWrapper>
    )
}

export default ProjectSummary

