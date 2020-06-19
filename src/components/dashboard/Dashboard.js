import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { useSelector } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from "redux";

const Dashboard = () => {
  const projects = useSelector(state => state.firestore.ordered.projects)
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}


export default compose(
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard);
// export default Dashboard;