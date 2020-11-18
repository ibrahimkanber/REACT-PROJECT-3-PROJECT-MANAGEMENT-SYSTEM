const initialState={
    authError:null
}


const authReducer=(state=initialState,action)=>{
    switch (action.type){
        case "LOGIN_ERROR":
            console.log("login error")
            return{
                ...state,authError:"Login Failed"
            }
        case "LOGIN_SUCCESS":
            console.log("login success")
            return{
                ...state,authError:null
            }
        case "SIGNOUT_SUCCESS":
            console.log("signout success")
            return state
        case "SIGNUP_SUCCESS":
            console.log("sugnUp success")
            return{
                ...state,authError:null
            }
        case "SIGNUP_FAILED":
            console.log("sugnUp failed")
            return{
                ...state,authError:action.payload.message
            }

        default:
            return state
    }
}

export default authReducer;