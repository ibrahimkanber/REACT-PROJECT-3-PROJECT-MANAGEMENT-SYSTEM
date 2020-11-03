import React from 'react'

function ProjectSummary({ project }) {
    console.log(project)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Ibrahim</p>
                <div className="grey-text">{new Date(project.createdAt).toLocaleDateString('de-DE', options)}</div>
            </div>
        </div>
    )
}

export default ProjectSummary
