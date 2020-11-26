/* eslint-disable no-undef */
import React, { useState } from 'react';
import {createProject} from "../../store/actions/ProjectActions";
import {useDispatch,useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import { StyledProjectTemplateForm, StyledProjectTemplateWrapper,StyledProjectTemplateTitle, StyledProjectTemplateFooterButton ,StyledProjectTemplateFlexColumn,StyledProjectTemplateTitleInput,StyledProjectTemplateContentInput,StyledProjectTemplateCancelButtonWrapper} from './styles/EditAndCreate.style';


const CreateProject = (props) => {
    const [project, setProject] = useState({
        title:"",
        content:""
    })
    const  dispatch=useDispatch()

    const {auth:{uid}}=useSelector(state=>state.firebaseReducer)
    const {data:{users}}=useSelector(state=>state.firestoreReducer)
    const activeuser= users? users[uid]:null 
 

    function handleChange(e) {
        setProject({ ...project, [e.target.id]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
       
        dispatch(createProject(project,activeuser,uid))
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
                <StyledProjectTemplateTitleInput type="text" id="title" onChange={handleChange}/>
            </StyledProjectTemplateFlexColumn>
            <div >
                <StyledProjectTemplateTitle htmlFor="content">Project Content</StyledProjectTemplateTitle>
                <StyledProjectTemplateContentInput name="content" id="content" onChange={handleChange} style={{}} ></StyledProjectTemplateContentInput>
            </div>
            <div >
                <StyledProjectTemplateFooterButton>Create</StyledProjectTemplateFooterButton> 
            </div>
            <StyledProjectTemplateCancelButtonWrapper>

            <StyledProjectTemplateFooterButton onClick={()=>props.history.push("/")}>Cancel</StyledProjectTemplateFooterButton>
            </StyledProjectTemplateCancelButtonWrapper>
        </StyledProjectTemplateForm>
    </StyledProjectTemplateWrapper>
    )

}

export default CreateProject;
