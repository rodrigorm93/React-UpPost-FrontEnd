import React from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startLogin, loginStartGoogle } from "../../action/auth";
import { Link, Redirect } from "react-router-dom";

import { GoogleLogin } from "react-google-login";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);
  const { name } = useSelector((state) => state.auth);

  const [formValues, handleInputChange] = useForm({
    email: "rodrigoRm@gmail.com",
    password: "123456",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    // dispatch(startLoginEmailPassword(email, password));
    dispatch(startLogin(email, password));
  };

  //npm i react-google-login
  const responseGoogle = (response) => {
    let id_token = response.tokenId;

    dispatch(loginStartGoogle(id_token));

    console.log(id_token);
  };

  return (
    <>
      <div className="auth__main">
        <div className="auth__box-container">
          {name && <Redirect to="/" />}
          <h3 className="auth__title">Login</h3>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="auth__input"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              className="auth__input"
              value={password}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={loading}
            >
              Login
            </button>

            <div className="auth__social-networks">
              <p>Login with social networks</p>
              <GoogleLogin
                clientId="256402099185-6f7anjk52ttgucld44qacbrfv9q0dne1.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>

            <Link to="/register" className="link">
              Create new account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
