import React from 'react'
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import moment from 'moment';

function ProjectDetails(props) {
    /* console.log(props) */
    const id = props.match.params.id
    const projectObj = useSelector(state => {
        return (
            state.firestoreReducer.data
        )
    })




    const { auth } = useSelector(state => state.firebaseReducer)
    if (!auth.uid) return (<Redirect to="/signIn" />)


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
                            <div>Posted By {project.authorFirstName.toUpperCase()} {project.authorLastName.toUpperCase()} </div>
                            <div className="grey-text">{moment(project.createdAt.toDate()).calendar()}</div>
                        </div>
                        <div className="input-field">
                            <Link to={{
                                pathname:`/edit/${id}`,
                                state:{...project}

                            }}>
                            <button className="btn lighten-1 z-deph-0">Create</button>
                            </Link>
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






