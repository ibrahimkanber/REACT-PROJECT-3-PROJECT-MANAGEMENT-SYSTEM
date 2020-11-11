export const signIn=(email,password)=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            email,password
        ).then(()=>{
            dispatch({type:"LOGIN_SUCCESS"})
        }).catch(err=>{
            dispatch({type:"LOGIN_ERROR",payload:err})
        })
    }
}