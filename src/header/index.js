import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export default () => <Fragment>
  <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: '#fffffa' }}>
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img className="logo" src={logo} alt="PCEA MUKUYU CHURCH" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="navbar-nav mr-auto mt-lg-0 ">
          <li className="nav-item nav">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item nav">
            <Link className="nav-link" to="/">About Us</Link>
          </li>
          <li className="nav-item nav">
            <Link className="nav-link" to="/">Groups</Link>
          </li>
          <li className="nav-item nav">
            <Link className="nav-link " to="/">Districts</Link>
          </li>
          <li className="nav-item nav">
            <Link className="nav-link" to="/">Sermons</Link>
          </li>
          <li className="nav-item nav">
            <Link className="nav-link" to="/">Events</Link>
          </li>
          <li className="nav-item nav">
            <Link className="nav-link" to="/">Contact Us</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <i className="fas fa-search btn btn-outline-primary "></i>
        </form>
      </div>
      </div>

  </nav>
</Fragment>


