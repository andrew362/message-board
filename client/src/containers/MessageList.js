import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

const MessageList = props => {
  const { messages, fetchMessages, removeMessage, currentUserId } = props;

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="col-sm-12 col-md-10">
      <div className="col-sm-12 col-md-10">
        <ul className="list-group list-unstyled" id="messages">
          {messages.map(m => (
            <MessageItem
              key={m._id}
              date={m.createdAt}
              text={m.text}
              user={m.user}
              profileImageUrl={m.user.profileImageUrl}
              removeMessage={() => removeMessage(m.user._id, m._id)}
              currentUserId={currentUserId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToPros = state => {
  return {
    messages: state.messages,
    currentUserId: state.currentUser.user.id
  };
};

export default connect(mapStateToPros, { fetchMessages, removeMessage })(MessageList);
