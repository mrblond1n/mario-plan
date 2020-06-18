import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import { HOME, PROJECT_DETAIL } from './components/constants/routers';
import ProjectDetail from './components/projects/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={HOME} component={Dashboard} />
          <Route path={PROJECT_DETAIL} component={ProjectDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
