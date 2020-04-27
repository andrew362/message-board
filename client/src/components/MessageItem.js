import React from 'react';
import { Link } from 'react-router-dom';
import defaultImageUser from '../images/user.svg';
import Moment from 'react-moment';

const MessageItem = ({ date, profileImageUrl, text, user, removeMessage, currentUserId }) => {
  return (
    <li className="message_item d-flex justify-content-start align-items-start flex-column flex-md-row mb-4">
      <img
        className="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"
        src={profileImageUrl || defaultImageUser}
        style={{ height: '50px' }}
        alt={user.username}
      />
      <div className="message_item_info chat-body white p-3 ml-2 z-depth-1 w-100 col-sm-12">
        <div className="header d-flex justify-content-between">
          <span className="primary-font">
            {/* <Link to="/"> */}
            <strong>@{user.username}</strong>
            {/* </Link> */}
          </span>
          <span className="text-muted">
            <Moment className="text-muted" format="DD/MM/YYYY, HH:mm">
              {date}
            </Moment>
            {currentUserId === user._id ? (
              <button className="btn btn-danger btn-sm" onClick={removeMessage}>
                x
              </button>
            ) : null}
          </span>
        </div>
        <hr className="w-100" />
        <p className="mb-0">{text}</p>
      </div>
    </li>
  );
};

export default MessageItem;
