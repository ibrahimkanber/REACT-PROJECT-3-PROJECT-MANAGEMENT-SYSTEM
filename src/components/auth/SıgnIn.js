import React,{useState} from 'react'

function SıgnIn() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    function handleChange(e){
        setEmail(e.target.id)
    }

    function handleSubmit(e){
        e.preventDefault()
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


