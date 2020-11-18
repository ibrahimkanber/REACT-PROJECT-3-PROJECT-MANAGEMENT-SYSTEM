
export const createProject=(project,activeUser,uid)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore=getFirestore()
        
        firestore.collection("projects").add({
            ...project,
            authorFirstName:activeUser.firstName,

            authorLastName:activeUser.lastName,
            authorId:uid,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"CREATE_PROJECT",payload:project})
        }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR",err})
        })
        
    }
}
export const editProject=(title,content,projectId)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore=getFirestore()
        
        firestore.collection("projects").doc(projectId).update({
            "title":title,
            "content":content,
            "createdAt":new Date()
        }).then(()=>{
            dispatch({type:"EDIT_PROJECT"})
        }).catch((err)=>{
            dispatch({type:"EDIT_PROJECT_ERROR",payload:err})
        })
        
    }
}

// dispatch({type:"CREATE_PROJECT",payload: project})