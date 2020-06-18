import React, { useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = e => {
    e.preventDefault()
    console.log({ email, password });

  }
  return (
    <div className="container">
      <form className="white" onSubmit={e => onSubmit(e)}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" autoComplete="username" id="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" autoComplete='current-password' id="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn pink lighten-1 z-depth-0">Login</button>
      </form>
    </div>
  )
}
