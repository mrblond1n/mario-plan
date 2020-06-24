import React from 'react'
import { useSelector } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetail = props => {
  const id = props.match.params.id;
  const projects = useSelector(state => state.firestore.data.projects)
  const project = projects ? projects[id] : null;
  const date = new Date(project?.createAt?.seconds * 1000).toLocaleDateString()

  if (project) {
    return (<div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">{project.title}</div>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>{project.authorFirstName} {project.authorLastName}</div>
          <div>{date}</div>
        </div>
      </div>
    </div>)
  }
  return (
    <div className="container center">
      <p>Loading project...</p>
    </div>
  )
}

export default compose(
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetail)