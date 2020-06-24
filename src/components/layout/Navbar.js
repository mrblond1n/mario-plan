import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../constants/routers';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to={HOME} className="brand-logo">MarioPlan</Link>
        {links}
      </div>
    </nav>
  )
}
