import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import { HOME, PROJECT_DETAIL, SIGNIN, SIGNUP } from './components/constants/routers';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={HOME} component={Dashboard} />
          <Route path={PROJECT_DETAIL} component={ProjectDetail} />
          <Route path={SIGNIN} component={SignIn} />
          <Route path={SIGNUP} component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
