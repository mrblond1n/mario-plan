import React, { useState } from 'react'
import { createProject } from '../store/actions/projectActions';
import { useDispatch } from 'react-redux';

export default function CreateProject() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()
    dispatch(createProject({ title, content }))
  }
  return (
    <div className="container">
      <form className="white" onSubmit={e => onSubmit(e)}>
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={e => setTitle(e.target.value)} />
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
