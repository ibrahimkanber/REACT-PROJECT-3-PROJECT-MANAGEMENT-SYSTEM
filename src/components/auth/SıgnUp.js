import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions"
import { CustomInput } from '../../tools/CustomInput';
import { StyledAuthCardWrapper, StyledAuthForm,StyledAuthSubmitButton,StyledFlexCardColumn,StyledAuthHeader} from './Auth.style';
function SignUp() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        role:"",
        email: "",
        password: ""
    })
    
    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })

    }

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(signUp(values))
    }

    const { auth } = useSelector(state => state.firebaseReducer)
    if (auth.uid) return (<Redirect to="/" />)

    return (
        <StyledAuthCardWrapper>
            <StyledAuthForm>
                <StyledAuthHeader>Sign Up</StyledAuthHeader>
                <CustomInput type="text" function={handleChange} name="First Name" id="firstName"/>
                <CustomInput type="text" function={handleChange} name="Last Name" id="lastName"/>
                <CustomInput type="text" function={handleChange} name="Role" id="role"/>
                <CustomInput type="email" function={handleChange} name="E-Mail" id="email"/>
                <CustomInput type="password" function={handleChange} name="Password" id="password"/>
                <StyledFlexCardColumn>
                <StyledAuthSubmitButton>Send</StyledAuthSubmitButton>
                </StyledFlexCardColumn>
            </StyledAuthForm>
        </StyledAuthCardWrapper>
    )
}

export default SignUp;


