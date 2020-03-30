import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img style={{width: '50px'}} src={Logo} alt="Home" />
        </Link>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link className='btn btn-secondary m-2' to="/signup">Sign up</Link>
          </li>
          <li>
            <Link className='btn btn-secondary m-2' to="/signin">Log in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, null)(Navbar);
