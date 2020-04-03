import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messages';

const MessageForm = props => {
  const [message, setMessage] = useState('');
  const { errors, postNewMessage, history } = props;

  const handleNewMessage = (e) => {
    e.preventDefault();
    postNewMessage(message);
    setMessage('');
    history.push('/');
  };

  return (
    <form onSubmit={handleNewMessage}>
      {errors.message && (<div className="alert alert-danger">{errors.message}</div>)}
      <input type="text" className="form-control" value={message} onChange={e => setMessage(e.target.value)} />
      <button type="submit" className="btn btn-success pull-right">
        Send!
      </button>
    </form>
  );
};

const mapsStateToProps = state => {
  return {
    errors: state.errors
  };
};

export default connect(mapsStateToProps, {postNewMessage})(MessageForm);
