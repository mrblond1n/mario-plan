import React, { useState } from 'react'

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const onSubmit = e => {
    e.preventDefault()
    if (confirmPassword !== password) console.log('Не совпадают пароли!');

    console.log({ email, password, firstName, lastName });

  }
  return (
    <div className="container">
      <form className="white" onSubmit={e => onSubmit(e)}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="LastName">Last Name</label>
          <input type="text" id="LastName" onChange={e => setLastName(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" autoComplete="username" id="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" autoComplete="new-password" id="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="confirmPassword">Password</label>
          <input type="password" autoComplete="new-password" id="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn pink lighten-1 z-depth-0">SignUp</button>
      </form>
    </div>
  )
}
