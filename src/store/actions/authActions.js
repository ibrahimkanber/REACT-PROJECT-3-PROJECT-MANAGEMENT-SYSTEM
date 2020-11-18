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

export const signOut=()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        firebase.auth().signOut().then(()=>{
            dispatch({type:"SIGNOUT_SUCCESS"})
        })

    }
}


export const signUp=(email,password,firstName,lastName)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();

    

        firebase.auth().createUserWithEmailAndPassword(
            email,password
            
        ).then(res=>{
            return firestore.collection("users").doc(res.user.uid).set({
                firstName:firstName,
                lastName:lastName,
                initials:firstName[0]+lastName[0]
            })
        }).then(()=>{
            dispatch({type:"SIGNUP_SUCCESS"})
        }).catch((err)=>{
            dispatch({type:"SIGNUP_FAILED",payload:err})
        })
    }
}