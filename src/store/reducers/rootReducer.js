import {combineReducers} from 'redux';
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase"


const rootReducer=combineReducers({
    authReducer,projectReducer,firestoreReducer,firebaseReducer
})

export default rootReducer;