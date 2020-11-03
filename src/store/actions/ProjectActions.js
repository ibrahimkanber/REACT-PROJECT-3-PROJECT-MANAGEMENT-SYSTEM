export const createProject=(project)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore=getFirestore()
        firestore.collection("projects").add({
            ...project,
            authorFirstName:"Ibrahim",
            authorLastName:"Kanber",
            authorId:12345,
            createdAt:Date.now()
        }).then(()=>{
            dispatch({type:"CREATE_PROJECT",payload:project})
        }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR",err})
        })
        

      
    }
}


// dispatch({type:"CREATE_PROJECT",payload: project})