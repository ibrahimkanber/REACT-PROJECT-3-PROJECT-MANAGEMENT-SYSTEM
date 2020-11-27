import React from 'react';
import moment from 'moment';
import {useDispatch,useSelector} from "react-redux";
import { StyledSummaryWrapper } from './styles/ProjectSummary.style';

function ProjectSummary({ project,userRole,...props }) {
  
    const {auth:{uid}}=useSelector(state=>state.firebaseReducer)
    const dinamicStyle={
        display: uid==project.authorId || userRole=="admin"? "flex":"none"
    }
    return (
        <StyledSummaryWrapper style={dinamicStyle}>

            <p style={{textDecoration:"none"}}>{project.title}</p>
            <div >
                <p>Posted by {project.authorFirstName.toUpperCase()}</p>
                <div >{moment(project.createdAt.toDate()).calendar()}</div>
            </div>

        </StyledSummaryWrapper>
    )
}

export default ProjectSummary

