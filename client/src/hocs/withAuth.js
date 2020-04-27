import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Auth extends Component {
    componentWillMount() {
      if (this.props.isAuthenticated === false) {
        this.props.history.push('/signin');
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated === false) {
        this.props.history.push('/signin');
      }
    }
    render() {
      return this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : null;
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.currentUser.isAuthenticated
    };
  };

  return connect(mapStateToProps)(Auth);
}
