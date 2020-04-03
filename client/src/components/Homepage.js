import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from './MessageTimeline';

const Homepage = ({ currentUser }) => {
  if (currentUser.isAuthenticated) {
    return (
      <div className="homel-hero container-fluid text-center">
        <h1>Hello {currentUser.user.username}!</h1>
        <MessageTimeline user={currentUser.user} />
      </div>
    );
  }
  return (
    <div className="homel-hero container-fluid text-center">
      <h1>Welcome</h1>
      <Link type="button" className="btn btn-primary" to="/signin">
        Sign in
      </Link>
    </div>
  );
};

export default Homepage;
