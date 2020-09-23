//harmeos un fetch con token y otro sin token

//endpoint : el / que queremos llarmar por ejemplo /auth
//data: la data que enviaremos al backend
//methos: get,post o otro lo dejarmeos por defecto en GET

const baseUrl = process.env.REACT_APP_API_URL;
const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    //sino se un get
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  //vamos a leer el token del local storage ya que ahi e guarda cuando hacmeos el login

  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "x-token": token,
      },
    });
  } else {
    //sino se un get
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchConTokenUpload = (endpoint, file) => {
  const url = `${baseUrl}/${endpoint}`;

  //vamos a leer el token del local storage ya que ahi e guarda cuando hacmeos el login

  //const token = localStorage.getItem("token") || "";

  const archivo = new FormData();
  archivo.append("files", file[0]);

  //sino se un get
  return fetch(url, {
    method: "PUT",

    body: archivo,
  });
};

const fetchLoginGoogle = (token) => {
  const url = `${baseUrl}/auth/google`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      idtoken: token,
    },
  });
};

export { fetchSinToken, fetchConToken, fetchLoginGoogle, fetchConTokenUpload };
