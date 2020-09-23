import { types } from "../types/types";

import {
  fetchConToken,
  fetchSinToken,
  fetchLoginGoogle,
} from "../helpers/fetch";
import Swal from "sweetalert2";

//acciones para nuestro backend

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("auth", { email, password }, "POST");
    const body = await resp.json();

    console.log(body);

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        loginBackend({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const loginStartGoogle = (idToken) => {
  return async (dispatch) => {
    const resp = await fetchLoginGoogle(idToken);
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        loginBackend({
          uid: body.uid,
          name: body.name,
        })
      );
    }
  };
};

//funciones para revalidar el token
export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchConToken("auth/renew");
    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        loginBackend({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      //si el token no es correcto cancelaremos el checkin
      dispatch(checkinFinish());
    }
  };
};

const checkinFinish = () => ({
  type: types.authChekingFinish,
});

const loginBackend = (user) => ({
  type: types.login,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({
  type: types.authLogout,
});

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "auth/new",
      { email, password, name },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        loginBackend({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};
