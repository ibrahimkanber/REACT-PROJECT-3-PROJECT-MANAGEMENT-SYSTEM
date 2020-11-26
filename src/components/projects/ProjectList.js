import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from "react-router-dom";
import { StyledProjectListWrapper } from './styles/Projectlist.style';

const ProjectList = ({ projects }) => {
   
    return (
        <StyledProjectListWrapper>
            {
                projects && projects.map((project, index) => {
                    return (
                        <Link to={"/project/"+project.id} key={index}>
                            <ProjectSummary  project={project} />
                        </Link>
                    )
                })
            }
        </StyledProjectListWrapper>
    )
}

export default ProjectList;
