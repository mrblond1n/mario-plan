import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../constants/routers';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useSelector } from 'react-redux';

export default function Navbar() {

  const state = useSelector(state => state)
  console.log(state);

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to={HOME} className="brand-logo">MarioPlan</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}
