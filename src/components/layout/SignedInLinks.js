import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME, CREATE_PROJECT } from '../constants/routers';

export default function SignedInLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to={CREATE_PROJECT}>New Project</NavLink>
      </li>
      <li>
        <NavLink to={HOME}>Log Out</NavLink>
      </li>
      <li>
        <NavLink to={HOME} className="btn btn-floating pink lighten-1">NN</NavLink>
      </li>
    </ul>
  )
}
