import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import { HOME, PROJECT_DETAIL, SIGNIN, SIGNUP, CREATE_PROJECT } from './components/constants/routers';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import ProtectRouter from './components/auth/ProtectRouter'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <ProtectRouter exact path={HOME} component={Dashboard} />
          <ProtectRouter path={PROJECT_DETAIL} component={ProjectDetail} />
          <Route path={SIGNIN} component={SignIn} />
          <Route path={SIGNUP} component={SignUp} />
          <ProtectRouter path={CREATE_PROJECT} component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
