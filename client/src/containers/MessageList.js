import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

const MessageList = props => {
  const { messages, fetchMessages } = props;

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="col-sm-8">
      <div className="offset-1 col-sm-10">
        <ul className="list-group" id="messages">
          {messages.map(m => (
            <MessageItem
              key={m._id}
              date={m.createAt}
              text={m.text}
              username={m.user.username}
              profileImageUrl={m.user.profileImageUrl}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToPros = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToPros, { fetchMessages })(MessageList);
