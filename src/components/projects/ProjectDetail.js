import React from 'react'

export default function ProjectDetail(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minus quas voluptatibus hic ex autem perspiciatis ipsum praesentium cumque inventore.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Nikita</div>
          <div>2rd september, 2am</div>
        </div>
      </div>
    </div>
  )
}
