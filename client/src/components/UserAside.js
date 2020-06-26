import React from 'react';
import defaultImageUrl from '../images/user.svg';

const UserAside = ({ profileImageUrl, username }) => {
  console.log(profileImageUrl)
  return (
    <aside className="col-sm-2">
      <div className="panel panel-default">
        <div className="panel-body">
          <img style={{width: '100%'}} src={profileImageUrl || defaultImageUrl} alt={username} className="img-thubnail" />
          <h3>@{username}</h3>
        </div>
      </div>
    </aside>
  );
};

export default UserAside;
