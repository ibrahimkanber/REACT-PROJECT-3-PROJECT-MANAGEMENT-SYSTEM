import React, { useState } from 'react';
import {editProject} from "../../store/actions/ProjectActions";
import {useDispatch,useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const EditProject = (props) => {
    const project=props.history.location.state
    const projectId=props.match.params.id
  /*   console.log(project) */
    const  dispatch=useDispatch()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");




    function handleChange(e) {
        switch (e.target.id) {
            case "title":
                setTitle(e.target.value)
                break;
            case "content":
                setContent(e.target.value)
                break;
        }
      
    }
 
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e.target);
        
        dispatch(editProject(title,content,projectId))
         props.history.push("/")
        
    }


    const {auth} = useSelector(state => state.firebaseReducer)
    if(!auth.uid) return(<Redirect to="/signIn"/>)

    return (
        <div className="container">
            
            <form onSubmit={handleSubmit}>

                <h5 className="grey-text text-darken-3">Edit your Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} defaultValue={project.title} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea name="content" id="content" className="materialize-textarea" onChange={handleChange} defaultValue={project.content}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn lighten-1 z-deph-0">Update</button>
                </div>
            </form>
        </div>
    )

}

export default EditProject;