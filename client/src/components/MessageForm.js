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
    <form style={{width: '80%', margin: '50px auto', textAlign: 'right'}} onSubmit={handleNewMessage}>
      {errors.message && (<div className="alert alert-danger">{errors.message}</div>)}
      <input type="text" className="form-control" value={message} onChange={e => setMessage(e.target.value)} />
      <button style={{backgroundColor: '#0065c8'}} type="submit" className="btn">
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
