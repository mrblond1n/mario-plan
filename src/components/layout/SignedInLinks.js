import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME, CREATE_PROJECT } from '../constants/routers';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/actions/authActions';

export default function SignedInLinks() {
  const dispatch = useDispatch();
  return (
    <ul className="right">
      <li>
        <NavLink to={CREATE_PROJECT}>New Project</NavLink>
      </li>
      <li onClick={() => dispatch(signOut())}>
        <NavLink to={HOME}>Log Out</NavLink>
      </li>
      <li>
        <NavLink to={HOME} className="btn btn-floating pink lighten-1">NN</NavLink>
      </li>
    </ul>
  )
}
