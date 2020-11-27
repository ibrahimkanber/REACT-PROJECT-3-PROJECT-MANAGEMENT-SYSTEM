
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
export const editProject=(values,projectId)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore=getFirestore()
        
        firestore.collection("projects").doc(projectId).update({
            "title":values.title,
            "content":values.content,
            "createdAt":new Date()
        }).then(()=>{
            dispatch({type:"EDIT_PROJECT"})
        }).catch((err)=>{
            dispatch({type:"EDIT_PROJECT_ERROR",payload:err})
        })
        
    }
}
export const deleteProject=(projectId,notificationId)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore=getFirestore()
        
        firestore.collection("projects").doc(projectId).delete().then(()=>{
            dispatch({type:"DELETE_PROJECT"})
        }).catch((err)=>{
            dispatch({type:"DELETE_PROJECT_ERROR",payload:err})
        })
        
        if (notificationId){
            
            firestore.collection("notifications").doc(notificationId).delete().then(()=>{
                dispatch({type:"DELETE_NOTIFICATION"})
            }).catch((err)=>{
                dispatch({type:"DELETE_NOTIFICATION",payload:err})
            })
        }



      
        
    }
}
export const sendDeleteRequest=(project,id)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore=getFirestore()
        
        firestore.collection("notifications").add({
            personalName:project.authorFirstName,
            projectId:id,
            sendedAt:new Date()
        }).then(()=>{
            dispatch({type:"CREATE_NOTIFICATIONS"})
        }).catch((err)=>{
            dispatch({type:"CREATE_NOTIFICATIONS",err})
        })
        
    }
}
