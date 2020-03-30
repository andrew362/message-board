import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = (props) => {
  return (
    <div className="container">
      <Switch>
        <Route exact={true} path="/" render={props => <Homepage {...props} />} />
        <Route exact={true} path="/signin" render={props => <AuthForm signin buttonText='Log In!' heading='Welcome Back' {...props} />} />
        <Route exact={true} path="/signup" render={props => <AuthForm signup buttonText='Sign me up!' heading='Join Us' {...props} />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default withRouter(connect(mapStateToProps, null)(Main));
