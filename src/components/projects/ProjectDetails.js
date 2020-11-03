import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";


function ProjectDetails(props) {
    const id = props.match.params.id
    const projectObj = useSelector(state => {
        return (
            state.firestoreReducer.data
        )
    })


    // console.log(Object.keys(project).length)

    useFirestoreConnect([
        { collection: "projects" }
    ]
    )


    if (Object.keys(projectObj).length) {
        const project = projectObj.projects[id]
      
        return (
            <div>
                <div className="container section project-details">
                    <div className="card z-deph-0">
                        <div className="card-content">
                            <span className="card-title">{project.title}</span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted By {project.authorFirstName} {project.authorLastName} </div>
                            <div>{
                            
                            new Date(project.createdAt).toLocaleString('en-Gb')}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading bekle gardaş</p>
            </div>
        )
    }

}

export default ProjectDetails






