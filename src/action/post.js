import { types } from "../types/types";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";
import {
  fetchConToken,
  fetchConTokenUpload,
  fetchSinToken,
} from "../helpers/fetch";

const limitPagination = 4;
export const eventStartAddNew = (post, fileup) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth; //para obtener la informaicon del redux y ais pasarla la eventAddNew

    if (post.categoria === "imagen") {
      post.categoria = "5f68d932b1e49a0834c351c7";
    } else if (post.categoria === "video") {
      post.categoria = "5f6ae33b7da35419289239d4";
    }

    try {
      const resp = await fetchConToken("posts", post, "POST");
      const body = await resp.json();

      let bodyUploadImg;

      console.log(fileup);

      if (body.ok && fileup) {
        const respUploadImg = await fetchConTokenUpload(
          `upload/posts/${body.post.id}`,
          fileup
        );

        bodyUploadImg = await respUploadImg.json();

        post.id = body.post.id; //le agreganmos los campos que le faltan los cuales estan guardados en la bd
        post.user = {
          _id: uid,
          name: name,
          img: bodyUploadImg.img,
        };
      } else if (body.ok) {
        post.id = body.post.id; //le agreganmos los campos que le faltan los cuales estan guardados en la bd
        post.user = {
          _id: uid,
          name: name,
        };
      }

      //hay un  error
      else {
        let msgError = [];
        //sacamos los mesnjes de error del JSON
        for (var clave in body.errors) {
          //console.log(clave)

          //console.log(body.errors[clave]["msg"]);
          //console.log(json[clave]['titulo']);
          msgError.push(body.errors[clave]["msg"]);
        }

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: msgError[0],
        });
      }

      const msj = "Post subido Correctamente";
      Swal.fire("Saved", body.post.title, "success");
      // dispatch(postAddNew(newPost)); no lo utilizaremso ya que al hacer el load de los post de la pagination cargaremos solo 4 y
      //haciendo esta action  cargamos todos los posts

      dispatch(postAddNew(post));

      dispatch(PostUp(msj));
    } catch (error) {
      console.log(error);
    }
  };
};

//mostrar post de la BD

export const StartLoadingPosts = () => {
  return async (dispatch) => {
    try {
      let respImg;
      let bodyImg;
      const resp = await fetchSinToken("posts");
      const body = await resp.json();

      if (body.ok) {
        for (let index = 0; index < body.posts.length; index++) {
          if (body.posts[index].img) {
            respImg = await fetchSinToken(
              `upload/imagen/posts/${body.posts[index].img}`
            );

            bodyImg = await respImg.url;

            body.posts[index].urlImg = bodyImg;
          }
        }
      }

      dispatch(LoadingPosts(body.posts));
      dispatch(checkinFinish());
    } catch (error) {
      console.log(error);
    }
  };
};

//falta probarlo

export const StartLoadingPostsSearch = (text = "", page) => {
  return async (dispatch) => {
    dispatch(checkinFinishSearch(true));
    try {
      let respImg;
      let bodyImg;

      let resp;
      let body;

      if (!text) {
        resp = await fetchSinToken(
          `posts/pagination?page=${page}&limit=${limitPagination}`
        );
        body = await resp.json();

        if (body.ok) {
          for (let index = 0; index < body.posts.results.length; index++) {
            if (body.posts.results[index].img) {
              respImg = await fetchSinToken(
                `upload/imagen/posts/${body.posts.results[index].img}`
              );

              bodyImg = await respImg.url;

              body.posts.results[index].urlImg = bodyImg;
            }
          }
          dispatch(LoadingPosts(body.posts.results));
        }
      } else {
        resp = await fetchSinToken(`posts/search/${text}`);
        body = await resp.json();

        if (body.ok) {
          for (let index = 0; index < body.posts.length; index++) {
            if (body.posts[index].img) {
              respImg = await fetchSinToken(
                `upload/imagen/posts/${body.posts[index].img}`
              );

              bodyImg = await respImg.url;

              body.posts[index].urlImg = bodyImg;
            }
          }
        }
        dispatch(LoadingPosts(body.posts));
      }
      dispatch(checkinFinishSearch(false));
    } catch (error) {
      console.log(error);
    }
  };
};

const checkinFinishSearch = (estado) => ({
  type: types.postFinishLoadingSearch,
  payload: estado,
});

export const StartLoadingPostsPagination = (page) => {
  return async (dispatch) => {
    dispatch(checkinFinishPagination(true));
    try {
      let respImg;
      let bodyImg;
      const resp = await fetchSinToken(
        `posts/pagination?page=${page}&limit=${limitPagination}`
      );
      const body = await resp.json();

      if (body.ok) {
        for (let index = 0; index < body.posts.results.length; index++) {
          if (body.posts.results[index].img) {
            respImg = await fetchSinToken(
              `upload/imagen/posts/${body.posts.results[index].img}`
            );

            bodyImg = await respImg.url;

            body.posts.results[index].urlImg = bodyImg;
          }
        }
      }

      dispatch(LoadingPosts(body.posts.results));
      dispatch(checkinFinishPagination(false));
      dispatch(checkinFinish());
    } catch (error) {
      console.log(error);
    }
  };
};

const checkinFinishPagination = (estado) => ({
  type: types.postFinishLoadingPages,
  payload: estado,
});
export const StartLoadingUltimosPosts = () => {
  return async (dispatch) => {
    try {
      //sacar lso numero de paginas

      let respImg;
      let bodyImg;

      const resp = await fetchSinToken(
        `posts/pagination?page=${1}&limit=${limitPagination}`
      );
      const body = await resp.json();
      if (body.ok) {
        for (let index = 0; index < body.posts.results.length; index++) {
          if (body.posts.results[index].img) {
            //condicion de cargar las imagene soslo si existen
            respImg = await fetchSinToken(
              `upload/imagen/posts/${body.posts.results[index].img}`
            );

            bodyImg = await respImg.url;

            body.posts.results[index].urlImg = bodyImg;
          }
        }
        dispatch(LoadingUltimosPosts(body.posts.results));
        dispatch(checkinFinish()); //decir que ya esta todo cargado
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const StartLoadingPostsNumberPagination = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken(
        `posts/pagination?page=${1}&limit=${limitPagination}`
      );
      const body = await resp.json();
      let number;

      if (body.ok) {
        //calculo para obtneer el numero de paginas utilizadas en la paginacion
        number = body.numberPages / limitPagination;
        number = Math.round(number);

        //console.log(Math.round(number));

        dispatch(numMaxPage(number));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const numMaxPage = (number) => ({
  type: types.postNumberPage,
  payload: { number },
});

export const StartLoadingPostsByCategoria = async (category) => {
  try {
    //limpiamos el store
    //dispatch(desactivePost());

    let respImg;
    let bodyImg;

    const resp = await fetchSinToken("posts");
    const body = await resp.json();
    let postSelec = [];

    if (body.ok) {
      for (let index = 0; index < body.posts.length; index++) {
        if (body.posts[index].categoria.tipo === category) {
          respImg = await fetchSinToken(
            `upload/imagen/posts/${body.posts[index].img}`
          );

          bodyImg = await respImg.url;

          body.posts[index].urlImg = bodyImg;

          postSelec.push(body.posts[index]);
        }
      }
    }
    //dispatch(LoadingPosts(body.posts));
    //dispatch(checkinFinish());
    //dispatch(activePost(postSelec));

    return postSelec;
  } catch (error) {
    console.log(error);
  }
};

export const StartLoadingMyPosts = async (idUser) => {
  try {
    //limpiamos el store
    //dispatch(desactivePost());

    let respImg;
    let bodyImg;

    const resp = await fetchSinToken("posts");
    const body = await resp.json();

    let postSelec = [];

    if (body.ok) {
      for (let index = 0; index < body.posts.length; index++) {
        if (body.posts[index].user._id === idUser) {
          if (body.posts[index].img) {
            respImg = await fetchSinToken(
              `upload/imagen/posts/${body.posts[index].img}`
            );
            bodyImg = await respImg.url;

            body.posts[index].urlImg = bodyImg;
          }

          postSelec.push(body.posts[index]);
        }
      }
    }
    //dispatch(LoadingPosts(body.posts));
    //dispatch(checkinFinish());
    //dispatch(activePost(postSelec));

    return postSelec;
  } catch (error) {
    console.log(error);
  }
};

//cargar los detalles del post que seleccionemos
export const StartDetailPosts = async (id) => {
  //return async (dispatch) => {
  try {
    //limpiamos el store
    //dispatch(desactivePost());
    let respImg;
    let bodyImg;

    let postSelec = [];
    const resp = await fetchSinToken(`posts/search/post/${id}`);
    const body = await resp.json();

    if (body.ok && !!body.posts.img) {
      respImg = await fetchSinToken(`upload/imagen/posts/${body.posts.img}`);

      bodyImg = await respImg.url;

      body.posts.urlImg = bodyImg;
    }

    //activamos el post selecionado y lo mostramos en la vista DetailPost

    postSelec.push(body.posts);

    return postSelec;
    //dispatch(LoadingPosts(p));
    //dispatch(activePost(body.post));
  } catch (error) {
    console.log(error);
  }
  //};
};

export const eventStartUpdate = (post, file) => {
  return async (dispatch) => {
    console.log(post);

    if (post.categoria === "imagen") {
      post.categoria = "5f68d932b1e49a0834c351c7";
    } else if (post.categoria === "video") {
      post.categoria = "5f6ae33b7da35419289239d4";
    }

    try {
      let bodyUploadImg;
      let bodyDeleteImg;
      if (!!post.idImg) {
        const deleteImg = await fetchSinToken(
          `upload/imagen/posts/${post.idImg}`,
          {},
          "DELETE"
        );

        bodyDeleteImg = await deleteImg.json();
        console.log(bodyDeleteImg);

        //limpiamos las imagenes del post para luego no guardarla ne la siguiente consulta
        post.img = "";
        post.urlImg = "";
      }

      const resp = await fetchConToken(`posts/${post.id}`, post, "PUT");
      const body = await resp.json();

      if (body.ok) {
        if (file) {
          const respUploadImg = await fetchConTokenUpload(
            `upload/posts/${body.post.id}`,
            file
          );

          bodyUploadImg = await respUploadImg.json();

          console.log(bodyUploadImg);
        }
      }
      Swal.fire("Saved", body.msg, "success");

      const msj = "Post subido Correctamente";

      dispatch(PostUp(msj));

      //const resp = await fetchConToken(`events/${event.id}`, event, "PUT");
      // const body = await resp.json();
    } catch (error) {}
  };
};

export const eventStartDelete = (post, img) => {
  return async (dispatch) => {
    console.log(post, img);
    let bodyDeleteImg;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (!!img) {
          const deleteImg = await fetchSinToken(
            `upload/imagen/posts/${img}`,
            {},
            "DELETE"
          );

          bodyDeleteImg = await deleteImg.json();
          console.log(bodyDeleteImg);
        }
        const resp = await fetchConToken(`posts/${post}`, {}, "DELETE");
        const body = await resp.json();
        if (body.ok) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");

          const msj = "Post eliminado Correctamente";

          //dispatch(PostUp(msj));

          dispatch(PostDeleteOkay(msj));
        }
      }
    });

    try {
      //const resp = await fetchConToken(`events/${event.id}`, event, "PUT");
      // const body = await resp.json();
    } catch (error) {}
  };
};

const PostDeleteOkay = (id, msj) => ({
  type: types.stateDelete,
  payload: {
    id,
    msj,
  },
});
/*
const postUpdated = (post) => ({
  type: types.postUpdated,
  payload: post,
});

*/
export const activePost = (id, post) => ({
  type: types.postsActive,
  payload: {
    id,
    ...post,
  },
});

const checkinFinish = () => ({
  type: types.postFinishLoading,
});

export const postAddNew = (newPost) => ({
  type: types.postsAddNew,
  payload: newPost,
});

const LoadingPosts = (posts) => ({
  type: types.postsLoad,
  payload: posts,
});

const LoadingUltimosPosts = (posts) => ({
  type: types.postsLoadUltimosPost,
  payload: posts,
});

export const PostUp = (id, msj) => ({
  type: types.postUpCorrect,
  payload: {
    id,
    msj,
  },
});

export const desactivePost = () => ({
  type: types.postsDesactive,
  payload: {},
});

export const clearState = () => ({
  type: types.postsClear,
  payload: {},
});

//accion para guardar la imagen

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    //const { active: activePost } = getState().posts;

    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    console.log(fileUrl);
    Swal.close();

    return fileUrl;
  };
};

export const deleteNote = (id) => ({
  type: types.postDelete,
  payload: id,
});
