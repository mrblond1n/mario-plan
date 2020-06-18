import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME } from '../constants/routers';

export default function SignedOutLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to={HOME}>Sign Up</NavLink>
      </li>
      <li>
        <NavLink to={HOME}>Log In</NavLink>
      </li>
    </ul>
  )
}
