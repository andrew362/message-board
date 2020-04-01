import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';

const Main = props => {
  const { authUser, errors, removeError, history, currentUser } = props;

  history.listen(() => removeError());

  return (
    <div className="container">
      <Switch>
        <Route exact={true} path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
        <Route
          exact={true}
          path="/signin"
          render={props => (
            <AuthForm errors={errors} onAuth={authUser} signin buttonText="Log In!" heading="Welcome Back" {...props} />
          )}
        />
        <Route
          exact={true}
          path="/signup"
          render={props => (
            <AuthForm errors={errors} onAuth={authUser} signup buttonText="Sign me up!" heading="Join Us" {...props} />
          )}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
};

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));
