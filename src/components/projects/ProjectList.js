import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from "react-router-dom";
import { StyledProjectListWrapper } from './styles/Projectlist.style';

const ProjectList = ({ projects,userRole }) => {
   
    return (
        <StyledProjectListWrapper>
            {
                projects && projects.map((project, index) => {
                    return (
                        <Link to={{
                            pathname:"/project/"+project.id,
                            state:userRole

                        }} key={index} className="navLink1">
                            <ProjectSummary  project={project} userRole={userRole} />
                        </Link>
                    )
                })
            }
        </StyledProjectListWrapper>
    )
}

export default ProjectList;
