import React from 'react';
import MessageList from '../containers/MessageList';
import UserAside from './UserAside';

const MessageTimeline = ({ user }) => {
  return (
    <div className="row">
      <UserAside username={user.username} profileImgageUrl={user.profileImgageUrl} />
      <MessageList />
    </div>
  );
};

export default MessageTimeline;
