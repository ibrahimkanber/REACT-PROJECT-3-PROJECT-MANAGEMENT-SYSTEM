import styled from 'styled-components';

export const StyledAuthCardWrapper=styled.div`
width:100%;
min-height:80vh;
display:flex;
justify-content:center;
align-items:center;

`  
export const StyledFlexCardRow=styled.div`
display:flex;
justify-content:center;
align-items:center;

`  
export const StyledFlexCardColumn=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
color:red;

`  
export const StyledAuthForm=styled.form`
background-color:rgba(0,0,0,0.8);
border-radius:10px;
width:20%;
min-width:300px;
height:fit-content;
padding:30px;
justify-content:center;
display:flex;
flex-direction:column;
        

`  
export const StyledAuthSubmitButton=styled.button`
padding:10px 30px;
background-color:rgba(242, 48, 22,0.9);
color:white;
outline:none;
border:none;
font-size:1rem;
border-radius:5px;
margin-top:15%;
    &:hover{
        background-color:white;
        color:rgba(242, 48, 22,0.9);
    }


`  
export const StyledAuthHeader=styled.h5`
text-align:center;
color:rgb(0,206,209);
font-size:1.5rem

`  