import React, { useState } from 'react';
import {editProject} from "../../store/actions/ProjectActions";
import {useDispatch,useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import { StyledProjectTemplateForm, StyledProjectTemplateWrapper,StyledProjectTemplateTitle, StyledProjectTemplateFooterButton ,StyledProjectTemplateFlexColumn,StyledProjectTemplateTitleInput,StyledProjectTemplateContentInput,StyledProjectTemplateCancelButtonWrapper} from './styles/EditAndCreate.style';

const EditProject = (props) => {
    const [values, setValues] = useState({
        title:"",
        content:""
    })

    const project=props.history.location.state
    const projectId=props.match.params.id
  /*   console.log(project) */
    const  dispatch=useDispatch()
   
    function handleChange(e) {
        setValues({ ...project, [e.target.id]: e.target.value })
      
    }
 
    function handleSubmit(e) {
        e.preventDefault();
       
        dispatch(editProject(values,projectId))
         props.history.push("/")
        
    }


    const {auth} = useSelector(state => state.firebaseReducer)
    if(!auth.uid) return(<Redirect to="/signIn"/>)

    return (
        <StyledProjectTemplateWrapper >
        
            <StyledProjectTemplateForm onSubmit={handleSubmit}>

                {/* <StyledProjectTemplateTitle>Edit your Project</StyledProjectTemplateTitle> */}
                <StyledProjectTemplateFlexColumn>
                    <StyledProjectTemplateTitle htmlFor="title">Title</StyledProjectTemplateTitle>
                    <StyledProjectTemplateTitleInput type="text" id="title" onChange={handleChange} defaultValue={project.title}/>
                </StyledProjectTemplateFlexColumn>
                <div >
                    <StyledProjectTemplateTitle htmlFor="content">Project Content</StyledProjectTemplateTitle>
                    <StyledProjectTemplateContentInput name="content" id="content" onChange={handleChange} defaultValue={project.content} style={{}} ></StyledProjectTemplateContentInput>
                </div>
                <div >
                    <StyledProjectTemplateFooterButton>Update</StyledProjectTemplateFooterButton> 
                </div>
                <StyledProjectTemplateCancelButtonWrapper>

                <StyledProjectTemplateFooterButton onClick={()=>props.history.push("/")}>Cancel</StyledProjectTemplateFooterButton>
                </StyledProjectTemplateCancelButtonWrapper>
            </StyledProjectTemplateForm>
        </StyledProjectTemplateWrapper>
    )

}

export default EditProject;