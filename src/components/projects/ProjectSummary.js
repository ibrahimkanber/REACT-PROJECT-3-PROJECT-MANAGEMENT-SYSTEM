import React from 'react';
import moment from 'moment';


function ProjectSummary({ project }) {
    /* console.log(moment(project.createdAt.toDate()).calendar()) */

    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName.toUpperCase()}</p>
                <div className="grey-text">{moment(project.createdAt.toDate()).calendar() }</div>
            </div>
        </div>
    )
}

export default ProjectSummary
