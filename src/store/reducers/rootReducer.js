import {combineReducers} from 'redux';
import projectreducer from "./projectReducer";
import authtreducer from "./authReducer";
import {firestoreReducer} from "redux-firestore"



const rootReducer=combineReducers({
    authtreducer,projectreducer,firestoreReducer
})

export default rootReducer;