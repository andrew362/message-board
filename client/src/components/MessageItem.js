import React from 'react';
import { Link } from 'react-router-dom';
import defaultImageUser from '../images/user.svg';
import Moment from 'react-moment';

const MessageItem = ({ date, profileImageUrl, text, user, removeMessage, currentUserId }) => {
  return (
    <div className="message_item">
      <img src={profileImageUrl || defaultImageUser} style={{ height: '50px' }} alt={user.username} />
      <div className="message_item_info">
        <Link to="/">@{user.username}</Link>
        <span className="text-muted">
          <Moment className="text-muted" format="DD/MM/YYYY">
            {date}
          </Moment>
        </span>
        <span>
          {currentUserId === user._id ? (
            <a className="btn btn-danger" onClick={removeMessage}>
              X
            </a>
          ) : null}
        </span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MessageItem;
