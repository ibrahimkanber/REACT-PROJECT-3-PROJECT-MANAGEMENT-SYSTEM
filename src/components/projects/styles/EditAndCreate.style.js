import styled from 'styled-components';

export const StyledProjectTemplateWrapper=styled.div`
    width:100%;
    min-height:60vh;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Heebo', sans-serif
    padding:10px;;
    position:relative;
 
    

`  
export const StyledProjectTemplateForm=styled.form`
    width:40%;
    display:flex;
    flex-direction:column;
    background-color:rgba(255,255,255,0.8);
    min-width:500px;
    border-radius:10px
    

`  
 
export const StyledProjectTemplateTitle=styled.label`
color:red;
font-size:1.2rem;
padding:0 10px;
width:100%

`  
export const StyledProjectTemplateFlexColumn=styled.div`
    display:flex;
    flex-direction:column;
`  
export const StyledProjectTemplateTitleInput=styled.input`
    padding:10px;
    border-radius:10px;
    outline:none;
    border:none;
    font-size:1.2rem;
    margin-top:10px;
    margin-bottom:5px;
    width:95%;
    color:rgb(57, 121, 184)
`  
export const StyledProjectTemplateContentInput=styled.textarea`
    width:95%;
    padding:10px;
    line-height:1.7rem;
    min-height:400px;
    font-family: 'Heebo', sans-serif;
    border-radius:10px;
    margin-top:5px;
    border:none;
    outline:none;
    font-size:1.2rem;
    
    
`  
export const StyledProjectTemplateCancelButtonWrapper=styled.div`
        position:absolute;
        bottom:20px;
        left:35%   
`  




export const StyledProjectTemplateFooterButton=styled.button`
    padding:10px;
    margin-right:10px;
    margin-left:5px;
    min-width:75px;
    border-radius:10px;
    background-color:white;
    outline:none;
    border:none;
    color:red;

    &:hover{
        background-color:red;
        color:white

    }
`
