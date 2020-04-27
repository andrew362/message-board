import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/logo.svg';
import { logout } from '../store/actions/auth';

const Navbar = props => {
  const { currentUser, logout } = props;

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img style={{ width: '50px' }} src={Logo} alt="Home" />
        </Link>
        {currentUser.isAuthenticated ? (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link className="btn btn-secondary m-2" to={`/users/${currentUser.user.id}/messages/new`}>
                New Message
              </Link>
            </li>
            <li>
              <div className="btn btn-secondary m-2" onClick={logout}>
                Logout
              </div>
            </li>
          </ul>
        ) : (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link className="btn btn-secondary m-2" to="/signup">
                Sign up
              </Link>
            </li>
            <li>
              <Link className="btn btn-secondary m-2" to="/signin">
                Log in
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
