const initialState={
    projects: [
        {id:1,title:"deneme1",content:"blah blah blah"},
        {id:2,title:"deneme2",content:"blah blah blah2"},
        {id:3,title:"deneme3",content:"blah blah blah3"}
    ]
}


const projectReducer=(state=initialState.projects,action)=>{
    switch(action.type){
        case "CREATE_PROJECT":
            console.log("created project",action.payload)
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log(action.err)
            return state;
            
        case "EDIT_PROJECT_ERROR":
            console.log("edit error:"+action.payload)
            return state
    }
    return state
}

export default projectReducer;
