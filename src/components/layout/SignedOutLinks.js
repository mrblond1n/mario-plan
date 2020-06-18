import React from 'react';
import { NavLink } from 'react-router-dom';
import { SIGNIN, SIGNUP } from '../constants/routers';

export default function SignedOutLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to={SIGNUP}>Sign Up</NavLink>
      </li>
      <li>
        <NavLink to={SIGNIN}>Log In</NavLink>
      </li>
    </ul>
  )
}
