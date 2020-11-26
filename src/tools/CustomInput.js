import React from 'react'

export const CustomInput = (props) => {
    return (
        <div>
            <label htmlFor={props.id} style={{fontSize:18,color:"rgb(0,206,209)"}} >{props.name}</label>
            <input type={props.type}  id={props.id} onChange={props.function} style={{padding:"15px 0 15px 20px",borderRadius:10,width:"98%",display:"block",color:"black",backgroundColor:"rgba(255,255,255,0.8)",outline:"none",border:"none",marginTop:10,marginBottom:10}} />
        </div>
    )
}
