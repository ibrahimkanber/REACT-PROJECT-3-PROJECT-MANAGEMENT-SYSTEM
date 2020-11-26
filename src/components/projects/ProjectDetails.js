import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import moment from 'moment';
import { deleteProject } from '../../store/actions/ProjectActions';
import { 
    StyledProjectDetailsWrapper,
    StyledProjectDetailsContentWrapper,
     StyledProjectDetailsSmallWrapper ,
     StyledProjectDetailsFooterLeft,
     StyledProjectDetailsFooterRight
     ,StyledProjectDetailsFooterButton,StyledProjectDetailsTitle,
     StyledProjectDetailsFooterContainer} from './styles/ProjectDetails.style';

function ProjectDetails(props) {
    const dispatch=useDispatch()
   
    const id = props.match.params.id
    const projectObj = useSelector(state => {
        return (
            state.firestoreReducer.data
        )
    })

    const deletehandler=()=>{
        dispatch(deleteProject(id))
        props.history.push("/")
    }

    const { auth } = useSelector(state => state.firebaseReducer)
    if (!auth.uid) return (<Redirect to="/signIn" />)


    if (Object.keys(projectObj).length && projectObj.projects[id]) {
        const project = projectObj.projects[id]

        return (
            <StyledProjectDetailsWrapper>
                <StyledProjectDetailsContentWrapper>
                    <StyledProjectDetailsSmallWrapper>
                        <StyledProjectDetailsTitle>{project.title.toUpperCase()}</StyledProjectDetailsTitle>
                        <p>{project.content}</p>
                    </StyledProjectDetailsSmallWrapper>
                    <StyledProjectDetailsFooterContainer >
                        <StyledProjectDetailsFooterLeft >
                            <Link to={{
                                    pathname:`/edit/${id}`,
                                    state:{...project}
                                    }}>
                            <StyledProjectDetailsFooterButton >edit</StyledProjectDetailsFooterButton>
                            </Link>
                            <StyledProjectDetailsFooterButton onClick={deletehandler}>Delete</StyledProjectDetailsFooterButton>
                            <StyledProjectDetailsFooterButton onClick={()=>props.history.push("/")}>Cancel</StyledProjectDetailsFooterButton>
                        </StyledProjectDetailsFooterLeft>
                        <StyledProjectDetailsFooterRight>
                            <p>Posted By {project.authorFirstName.toUpperCase()} {project.authorLastName.toUpperCase()} </p>
                            <p style={{color:"red"}}>{moment(project.createdAt.toDate()).calendar()}</p>
                        </StyledProjectDetailsFooterRight>
                    </StyledProjectDetailsFooterContainer>
                </StyledProjectDetailsContentWrapper>
            </StyledProjectDetailsWrapper>
        )
    } else {
        return (
            <div >
                <p>Loading bekle gardaş</p>
            </div>
        )
    }

}

export default ProjectDetails






