import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux";

import {signIn} from "../../store/actions/authActions"

console.log(signIn)

function SıgnIn(props) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const dispatch=useDispatch()
    
    function handleChange(e){
        switch(e.target.id){
            case "email":
                setEmail(e.target.value)
            case "password":
                setPassword(e.target.value)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(signIn(email,password))
    }

   
    return (
     <div className="container">
         <form onSubmit={handleSubmit} className="white">

             <h5 className="grey-text text-darken-3">Sign In</h5>
             <div className="input-field">
                 <label htmlFor="email">Email</label>
                 <input type="email" id="email" onChange={handleChange}/>
             </div>
             <div className="input-field">
                 <label htmlFor="password">password</label>
                 <input type="password" id="password" onChange={handleChange}/>
             </div>
             <div className="input-field">
                 <button className="btn lighten-1 z-deph-0">Login</button>
             </div>
         </form>
     </div>
    )
}

export default SıgnIn


