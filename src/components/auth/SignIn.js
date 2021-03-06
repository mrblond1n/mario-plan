import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { HOME } from '../constants/routers';

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.authError)
  const auth = useSelector(state => state.firebase.auth)

  if (auth.uid) return <Redirect to={HOME} />

  const onSubmit = e => {
    e.preventDefault()
    dispatch(signIn({ email, password }))
  }

  const disabled = !email || !password
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
        <button disabled={disabled} type="submit" className="btn pink lighten-1 z-depth-0">Login</button>
        <div className="red-text center">
          {authError}
        </div>
      </form>
    </div>
  )
}
