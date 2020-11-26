export const signIn=(values)=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            values.email,values.password
        ).then(()=>{
            dispatch({type:"LOGIN_SUCCESS"})
        }).catch(err=>{
            dispatch({type:"LOGIN_ERROR",payload:err})
        })
    }
}

export const signOut=()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        firebase.auth().signOut().then(()=>{
            dispatch({type:"SIGNOUT_SUCCESS"})
        })

    }
}


export const signUp=(values)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();

    

        firebase.auth().createUserWithEmailAndPassword(
            values.email,values.password
            
        ).then(res=>{
            return firestore.collection("users").doc(res.user.uid).set({
                firstName:values.firstName,
                lastName:values.lastName,
                role:values.role,
                initials:values.firstName[0]+values.lastName[0]
            })
        }).then(()=>{
            dispatch({type:"SIGNUP_SUCCESS"})
        }).catch((err)=>{
            dispatch({type:"SIGNUP_FAILED",payload:err})
        })
    }
}