import React from 'react'
import { useSelector} from "react-redux";
import { Route, Switch } from 'react-router-dom'
import SıgnIn from './components/auth/SıgnIn'
import SignUp from './components/auth/SıgnUp'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar/Navbar'
import CreateProject from './components/projects/CreateProject'
import EditProject from './components/projects/EditProject'
import ProjectDetails from './components/projects/ProjectDetails'
import "./App.css"
import imgLogOut from "./img/project-manager-roll.jpg";
import imgLogin from "./img/deneme.jpg";
/* backgroundImage:`url(${img})` */
function App() {
  const {auth} = useSelector(state => state.firebaseReducer)
  return (

    <div style={{minHeight:"100%" ,backgroundImage:auth.uid? `url(${imgLogin})`: `url(${imgLogOut})`,backgroundSize:"cover",backgroundBlendMode:"overlay",backgroundColor: auth.uid? "rgba(0,0,0,0.2)":"rgba(0,0,0,0.5)"}}>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/project/:id" component={ProjectDetails}/>
        <Route  exact path="/signIn" component={SıgnIn}/>
        <Route  exact path="/signUp" component={SignUp}/>
        <Route  exact path="/newProject" component={CreateProject}/>
        <Route  exact path="/edit/:id" component={EditProject}/>
      </Switch>
    </div>
  )
}

export default App;

