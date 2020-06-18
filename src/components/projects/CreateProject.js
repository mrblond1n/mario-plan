import React, { useState } from 'react'

export default function CreateProject() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const onSubmit = e => {
    e.preventDefault()
    console.log({ title, content });

  }
  return (
    <div className="container">
      <form className="while" onSubmit={e => onSubmit(e)}>
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="email" id="title" onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea id="content" className="materialize-textarea" onChange={e => setContent(e.target.value)} />
        </div>
        <button type="submit" className="btn pink lighten-1 z-depth-0">Submit</button>
      </form>
    </div>
  )
}
