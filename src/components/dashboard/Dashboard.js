import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { useSelector } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from "redux";
import { Redirect } from 'react-router-dom';
import { SIGNIN } from '../constants/routers';

const Dashboard = () => {
  const projects = useSelector(state => state.firestore.ordered.projects)
  const auth = useSelector(state => state.firebase.auth)
  const notifications = useSelector(state => state.firestore.ordered.notifications)
  if (!auth.uid) return <Redirect to={SIGNIN} />
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  )
}


export default compose(
  firestoreConnect([
    { collection: 'projects', orderBy: ['createAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);
// export default Dashboard;