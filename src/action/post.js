import { db } from "../firebase/firebase-config";
import {
  loadMyPosts,
  loadPostByCategory,
  loadPostDetail,
  loadPosts,
  retonarDocumentos,
} from "../helpers/loadPosts";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

//tarea asincrona
export const startNewPost = (
  name,
  title,
  body,
  decripcion,
  urlVideo,
  selection,
  file
) => {
  return async (dispatch, getState) => {
    // el getState es el segundoa argumento y fucniona como el useSlector para pooder obtener el estado
    //y asi opbtener el uid del usuario que subira la nota. nos estragar todos los state de los reducers

    const uid = getState().auth.uid;

    let fileUrl = "";
    if (file !== false) {
      fileUrl = await dispatch(startUploading(file));
    }

    //creamos la nota que queremos crear.
    const newPost = {
      title: title,
      descripcion: decripcion,
      body: body,
      date: new Date().getTime(),
      url: fileUrl,
      urlVideo: urlVideo,
      category: selection,
      name: name,
      user: uid,
    };

    //ahora el objeto lo mandaremos a firestore
    //el primer argumento es el path de donde yo quiero grabar la informaicon
    //devuleve un prmesa por lo que usaremos el async

    const doc = await db
      .collection(`/posts`)
      .add(newPost)
      .then(() => {
        const msj = "Post subido Correctamente";
        Swal.fire("Saved", newPost.title, "success");
        dispatch(PostUp(msj));
      })
      .catch((e) => {
        const msj = null; //la dejamos en null asi no nos derigira al home
        dispatch(PostUp(msj));
        Swal.fire("Error", e.message, "error");
      });

    //dispatch(activePost(doc.id, newPost));

    //console.log(doc);
  };
};

export const activePost = (id, post) => ({
  type: types.postsActive,
  payload: {
    id,
    ...post,
  },
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

export const startLoadingPosts = () => {
  return async (dispatch) => {
    const posts = await loadPosts(); //como recibe una promesa usaremos un async
    dispatch(setPosts(posts));

    dispatch(desactivePost());
  };
};

export const startLoadSinPagination = () => {
  return async (dispatch) => {
    const postSnap = await db.collection(`/posts`);

    const query = await postSnap.orderBy("date");

    query
      .limit(4)
      .get()
      .then(async (snap) => {
        dispatch(await setPosts(retonarDocumentos(snap)));
        dispatch(desactivePost());
      });
  };
};

//pagination

let firstDocument = null; //referencia al primer documento
let lastDocument = null; //referencia al utlimo documento
export const startLoadpaginationNext = () => {
  return (dispatch) => {
    const postSnap = db.collection(`/posts`);

    const query = postSnap.orderBy("date").startAfter(lastDocument);

    const query2 = postSnap.orderBy("date");

    query
      .limit(4)
      .get()
      .then((snap) => {
        firstDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length - 1] || null; //sacamos el ultimo documento, hacemos la referencia al ultimo docmuento, en el caso que lleguemos al limite regresamos un null y heso hace que se reinicie la paginacion

        if (!lastDocument) {
          query2
            .limit(4)
            .get()
            .then((snap) => {
              dispatch(setPosts(retonarDocumentos(snap)));
            });
        } else {
          dispatch(setPosts(retonarDocumentos(snap)));
        }
      });
  };
};

export const startLoadpaginationPrevious = () => {
  return (dispatch) => {
    const postSnap = db.collection(`/posts`);

    const query = postSnap.orderBy("date"); //cual termine antes que ese primer documento, queremos los anteriores a ese

    query
      .endBefore(firstDocument)
      .limitToLast(4)
      .get()
      .then((snap) => {
        firstDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length - 1] || null; //sacamos el ultimo documento, hacemos la referencia al ultimo docmuento, en el caso que lleguemos al limite regresamos un null y heso hace que se reinicie la paginacion
        if (firstDocument) {
          dispatch(setPosts(retonarDocumentos(snap)));
        } else if (!firstDocument) {
          query
            .limit(4)
            .get()
            .then((snap) => {
              dispatch(setPosts(retonarDocumentos(snap)));
            });
        }
      });
  };
};

export const startLoadingMyPosts = (uid) => {
  return async (dispatch) => {
    const posts = await loadMyPosts(uid); //como recibe una promesa usaremos un async
    dispatch(setPosts(posts));
  };
};

export const startLoadingPostDetail = (id) => {
  return async (dispatch) => {
    const posts = await loadPostDetail(id); //como recibe una promesa usaremos un async
    dispatch(setPosts(posts));
  };
};

export const startLoadingPostBycategory = (category) => {
  return async (dispatch) => {
    const posts = await loadPostByCategory(category); //como recibe una promesa usaremos un async
    dispatch(setPosts(posts));
  };
};
//funcion para recibir las notas desde firebase

export const setPosts = (posts) => ({
  type: types.postsLoad,
  payload: posts,
});

//Accion para guardar en las base de datos

export const startSavedPost = (post, body, file) => {
  return async (dispatch, getState) => {
    // const uid = getState().auth.uid;

    //borrarem el url
    Swal.fire({
      title: "Actualizando...",
      text: "Please wait...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    let fileUrl = "";
    if (file) {
      fileUrl = await dispatch(startUploading(file));
    }

    //const fileUrl = await dispatch(startUploading(file));
    post.url = fileUrl; //solo deberemos actualizar el URL

    post.body = body;

    //hay que eliminar el id d ela nota que ya la tenmos

    const postToFirestore = { ...post };
    delete postToFirestore.id;

    //,mandamos la actualizacion
    await db.doc(`/posts/${post.id}`).update(postToFirestore);

    Swal.close();
    dispatch(desactivePost()); //sacamos el post seleccionado
  };
};

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

//Eliminar post
export const startDeleting = (id) => {
  return async (dispatch) => {
    await db.doc(`/posts/${id}`).delete();

    //una vez borrada de la bd lo barraremos del store de redux
    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: types.postDelete,
  payload: id,
});
