import React,{useState} from 'react';
import {useSelector ,useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {signUp} from "../../store/actions/authActions"
function SignUp() {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function handleChange(e){
       switch(e.target.id){
           case "firstName":
                  setFirstName(e.target.value)
                  break;
           case "lastName":
                  setLastName(e.target.value)
                  break;
           case "email":
                  setEmail(e.target.value)
                  break;
           case "password":
                  setPassword(e.target.value)
                  break;
        }
    }

/*     console.log(firstName,lastName,password,email) */
    const dispatch=useDispatch()
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(signUp(email,password,firstName,lastName))

    }

    const {auth} = useSelector(state => state.firebaseReducer)
    if(auth.uid) return(<Redirect to="/"/>)
   
    return (
     <div className="container">
         <form onSubmit={handleSubmit} className="white">

             <h5 className="grey-text text-darken-3">Sign Up</h5>
             <div className="input-field">
                 <label htmlFor="firstName">First Name</label>
                 <input type="text" id="firstName" onChange={handleChange}/>
             </div>
             <div className="input-field">
                 <label htmlFor="lastName">Last Name</label>
                 <input type="text" id="lastName" onChange={handleChange}/>
             </div>
             <div className="input-field">
                 <label htmlFor="email">Email</label>
                 <input type="email" id="email" onChange={handleChange}/>
             </div>
             <div className="input-field">
                 <label htmlFor="password">password</label>
                 <input type="password" id="password" onChange={handleChange}/>
             </div>
             <div className="input-field">
                 <button className="btn lighten-1 z-deph-0">Sing Up</button>
             </div>
         </form>
     </div>
    )
}

export default SignUp;


