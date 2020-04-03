import React from 'react';
import defaultImageUrl from '../images/user.svg';

const UserAside = ({ profileImageUrl, username }) => {
  return (
    <aside className="col-sm-2">
      <div className="panel panel-default">
        <div className="panel-body">
          <img src={profileImageUrl || defaultImageUrl} alt={username} className="img-thubnail" />
          <h3>@{username}</h3>
        </div>
      </div>
    </aside>
  );
};

export default UserAside;
