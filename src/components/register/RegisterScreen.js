import React from "react";
import { useForm } from "../../hooks/useForm";
import { startRegisterWithEmailPasswordName } from "../../action/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../action/ui";

import validator from "validator";
import { Redirect } from "react-router-dom";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const { name: nameLogin } = useSelector((state) => state.auth);

  const [formValues, handleInputChange] = useForm({
    name: "Hernando",
    email: "nando@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <div className="auth__main">
        <div className="auth__box-container">
          {nameLogin && <Redirect to="/" />}
          <h3 className="auth__title">Register</h3>

          {msgError && <div className="auth__alert-error">{msgError}</div>}

          <form onSubmit={handleRegister}>
            {msgError && <div className="auth__alert-error">{msgError}</div>}

            <input
              type="text"
              placeholder="Name"
              name="name"
              className="auth__input"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
            />

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

            <input
              type="password"
              placeholder="Confirm password"
              name="password2"
              className="auth__input"
              value={password2}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-primary btn-block mb-5">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
