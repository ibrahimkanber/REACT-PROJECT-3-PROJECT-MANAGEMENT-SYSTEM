import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Redirect} from "react-router-dom";
import { signIn } from "../../store/actions/authActions"
import { CustomInput } from '../../tools/CustomInput';
import { StyledAuthCardWrapper, StyledAuthForm,StyledAuthSubmitButton,StyledFlexCardColumn,StyledAuthHeader} from './Auth.style';

// console.log(signIn)

function SıgnIn(props) {
    const dispatch = useDispatch()
    const { authError } = useSelector(state => state.authReducer)

    const [values, setValues] = useState({
        email: "",
        password: ""
    })


    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })

    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(signIn(values))
    }

    const {auth} = useSelector(state => state.firebaseReducer)
    
    if(auth.uid) return(<Redirect to="/"/>)


    return (
        <StyledAuthCardWrapper>
            <StyledAuthForm onSubmit={handleSubmit}>
                <StyledAuthHeader>Sign In</StyledAuthHeader>
                <CustomInput type="email" function={handleChange} name="E-Mail" id="email"/>
                <CustomInput type="password" function={handleChange} name="Password" id="password"/>
                <StyledFlexCardColumn>
                    <StyledAuthSubmitButton>Send</StyledAuthSubmitButton>
                    <div>
                        {authError || <p>{authError}</p>}
                    </div>
                </StyledFlexCardColumn>
            </StyledAuthForm>
        </StyledAuthCardWrapper>
    )
}

export default SıgnIn


