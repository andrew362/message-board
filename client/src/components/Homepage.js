import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from './MessageTimeline';

const Homepage = ({ currentUser }) => {
  return (
    <div className="homepage">
      {currentUser.isAuthenticated ? (
        <div className="rgba-gradient">
          <div className="message-timeline container text-center pt-5">
            <MessageTimeline user={currentUser.user} />
          </div>
        </div>
      ) : (
        <div className="welcome-page one-page rgba-gradient d-flex justify-content-center align-items-center px-md-3 px-sm-0">
          <div className="row wow fadeIn">
            <div className="col-md-12 mb-4 white-text text-center wow fadeIn">
              <h3 className="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">Messanger</h3>
              <hr className="hr-light my-4 w-75" />
              <h4 className="subtext-header mt-2 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit deleniti consequuntur nihil.
              </h4>
              <Link type="button" className="btn btn-rounded btn-outline-white" to="/signin">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
