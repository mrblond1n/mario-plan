import React from 'react';

const ProjectSummary = ({ project }) => {
  const date = new Date(project?.createAt?.seconds * 1000).toLocaleDateString()
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">{project.title}</div>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{date}</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
