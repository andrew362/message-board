import React from 'react';
import MessageList from '../containers/MessageList';
import UserAside from './UserAside';

const MessageTimeline = ({ user }) => {
  console.log(user);
  return (
    <div className="row">
      <UserAside username={user.username} profileImageUrl={user.profileImageUrl} />
      <MessageList />
    </div>
  );
};

export default MessageTimeline;
