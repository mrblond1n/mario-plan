import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../constants/routers';

export default function Navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to={HOME} className="brand-logo">MarioPlan</Link>
      </div>
    </nav>
  )
}
