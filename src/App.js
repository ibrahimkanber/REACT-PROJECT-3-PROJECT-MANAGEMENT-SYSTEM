import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SıgnIn from './components/auth/SıgnIn'
import SignUp from './components/auth/SıgnUp'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import CreateProject from './components/projects/CreateProject'
import ProjectDetails from './components/projects/ProjectDetails'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/project/:id" component={ProjectDetails}/>
        <Route  exact path="/signIn" component={SıgnIn}/>
        <Route  exact path="/signUp" component={SignUp}/>
        <Route  exact path="/newProject" component={CreateProject}/>
      </Switch>
    </div>
  )
}

export default App;

