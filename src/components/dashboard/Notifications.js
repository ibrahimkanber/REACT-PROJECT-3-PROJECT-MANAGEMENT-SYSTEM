import React from 'react'
import { StyledNotificationsCardWrapper } from './Notifications.style'
import { useSelector,useDispatch } from "react-redux";
import {Link} from "react-router-dom";
const Notifications=()=> {
    const data=useSelector(state=>state.firestoreReducer)
  /*   console.log(data) */
    const {ordered:{notifications}}=useSelector(state=>state.firestoreReducer)
    return (
        <StyledNotificationsCardWrapper>
            <p>Notifications</p>
            {
                notifications?.map((notification,index)=>(
                    <div key={index} style={{display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"yellow",margin:5,color:"black"}}>

                        <p >{index+1}.{notification.personalName} sent new Close request</p>
                        <Link to={{pathname:`/project/${notification.projectId}`,state:{
                            role:"admin",
                            notificationId:notification.id
                        }}}  className="navLink1">
                            <button>
                                Details..
                            </button>
                        </Link>
                    </div>
                ))
            }


        </StyledNotificationsCardWrapper>
    )
}

export default Notifications
