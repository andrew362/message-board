import React, { useState } from 'react';

const AuthForm = (props) => {
  const [state, setState] = useState({
    email: '',
    username: '',
    password: '',
    profileImageUrl: '',
  });

  const { heading, buttonText, signin, signup, onAuth, errors, history } = props;
  const { email, username, password, profileImageUrl } = state;

  const onChangeHandler = (e) => {
    const newState = { ...state, [e.target.name]: e.target.value };
    setState(newState);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const authType = signin ? 'signin' : signup ? 'signup' : null;
    onAuth(authType, state)
      .then(() => history.push('/'))
      .catch(() => {
        return;
      });
  };

  return (
    <div className="rgba-gradient one-page d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <form onSubmit={onSubmitHandler} className="text-center" style={{ color: '#757575' }}>
              <h3 className="font-weight-bold my-4 pb-2 text-center dark-grey-text">{heading}</h3>
              {errors.message && <div className="alert alert-danger">{errors.message}</div>}
              <input
                type="email"
                className="form-control mb-4"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChangeHandler}
              />

              <input
                type="password"
                className="form-control mb-4"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChangeHandler}
              />

              {signup && (
                <div>
                  <input
                    autoComplete="off"
                    className="form-control mb-4"
                    id="username"
                    name="username"
                    onChange={onChangeHandler}
                    placeholder="Username"
                    type="text"
                    value={username}
                  />
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="image-url"
                    name="profileImageUrl"
                    placeholder="Image URL"
                    onChange={onChangeHandler}
                    type="text"
                    value={profileImageUrl}
                  />
                </div>
              )}

              <div className="text-center">
                <button type="submit" className="btn btn-outline-orange btn-rounded my-4 waves-effect">
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
