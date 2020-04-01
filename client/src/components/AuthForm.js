import React, { useState } from 'react';

const AuthForm = props => {
  const [state, setState] = useState({
    email: '',
    username: '',
    password: '',
    profileImageUrl: ''
  });

  const { heading, buttonText, signin, signup, onAuth, errors, history } = props;
  const { email, username, password, profileImageUrl } = state;

  const onChangeHandler = e => {
    const newState = { ...state, [e.target.name]: e.target.value };
    setState(newState);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const authType = signin ? 'signin' : signup ? 'signup' : null;
    onAuth(authType, state)
      .then(() => history.push('/'))
      .catch(() => {
        return;
      });
  };

  return (
    <div className="row justify-content-md-center text-center">
      <div className="col-md-6">
        <form onSubmit={onSubmitHandler}>
          <h2>{heading}</h2>
          {errors.message && <div className="alert alert-danger">{errors.message}</div>}
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onChangeHandler}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onChangeHandler}
          />
          {signup && (
            <div>
              <label htmlFor="username">Username</label>
              <input
                autoComplete="off"
                className="form-control"
                id="username"
                name="username"
                onChange={onChangeHandler}
                type="text"
                value={username}
              />
              <label htmlFor="image-url">Image URL</label>
              <input
                autoComplete="off"
                className="form-control"
                id="image-url"
                name="profileImageUrl"
                onChange={onChangeHandler}
                type="text"
                value={profileImageUrl}
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary btn-block btn-lg">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {};

export default AuthForm;
