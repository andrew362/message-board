import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';

const Main = props => {
  const { authUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact={true} path="/" render={props => <Homepage {...props} />} />
        <Route
          exact={true}
          path="/signin"
          render={props => <AuthForm onAuth={authUser} signin buttonText="Log In!" heading="Welcome Back" {...props} />}
        />
        <Route
          exact={true}
          path="/signup"
          render={props => <AuthForm onAuth={authUser} signup buttonText="Sign me up!" heading="Join Us" {...props} />}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

// const mapDispatchToProps = dispatch => {
//   console.log( authUser);
//   return authUser;
// };

export default withRouter(connect(mapStateToProps, {authUser})(Main));
