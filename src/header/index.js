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
        <ul className="navbar-nav mr-auto mt-lg-0">
          <li className="nav-item nav ">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item nav">
            <Link className="nav-link" to="/">About Us</Link>
          </li>
          <li className="nav-item nav dropdown">
          <Link className="nav-link dropdown-toggle " data-toggle="dropdown" id="navbarDropdown" aria-expanded="false" aral-haspopup="true" to="/">Groups</Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/">PCMF</Link>
              <Link className="dropdown-item" to="/">Men's Fellowship</Link>
              <Link className="dropdown-item" to="/">Women's Guild</Link>
              <Link className="dropdown-item" to="/">Youth</Link>
              <Link className="dropdown-item" to="/">Brigade</Link>
              <Link className="dropdown-item" to="/">Choir</Link>
              <Link className="dropdown-item" to="/">Church School</Link>
            </div>
          </li>
          <li className="nav-item nav dropdown">
            <Link className="nav-link dropdown-toggle " data-toggle="dropdown" id="navbarDropdown" aria-expanded="false" aral-haspopup="true" to="/">Districts</Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/">Berea</Link>
              <Link className="dropdown-item" to="/">Shalom</Link>
              <Link className="dropdown-item" to="/">Elshadaai</Link>
              <Link className="dropdown-item" to="/">Riverside</Link>
              <Link className="dropdown-item" to="/">Betheli</Link>
              <Link className="dropdown-item" to="/">Birishiba</Link>
              <Link className="dropdown-item" to="/">Reli</Link>
              <Link className="dropdown-item" to="/">Zion</Link>
              <Link className="dropdown-item" to="/">Tumaini</Link>
              <Link className="dropdown-item" to="/">Ebenezer</Link>
              <Link className="dropdown-item" to="/">Bethsaida</Link>

            </div>
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


