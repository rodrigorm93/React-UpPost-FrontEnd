//para cargar las notas de firebase

import { db } from "../firebase/firebase-config";

export const loadPosts = async () => {
  //sacmaos las notas de firebase mandando el path d ela ubicacion
  const postSnap = await db.collection(`/posts`).get();

  const posts = [];

  postSnap.forEach((snapHijo) => {
    //para sacar directmente lo que necesitamos
    posts.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  return posts;
};

export const retonarDocumentos = (snapshot) => {
  const documentos = [];

  snapshot.forEach((snapHijo) => {
    //para sacar directmente lo que necesitamos
    documentos.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  return documentos;
};

export const loadMyPosts = async (uid) => {
  //sacmaos las notas de firebase mandando el path d ela ubicacion
  const postSnap = await db.collection(`/posts`).get();

  const posts = [];

  postSnap.forEach((snapHijo) => {
    //para sacar directmente lo que necesitamos

    if (snapHijo.data().user === uid) {
      posts.push({
        id: snapHijo.id,
        ...snapHijo.data(),
      });
    }
  });

  return posts;
};

export const loadPostByCategory = async (category) => {
  //sacmaos las notas de firebase mandando el path d ela ubicacion
  const postSnap = await db.collection(`/posts`).get();

  const posts = [];

  postSnap.forEach((snapHijo) => {
    //para sacar directmente lo que necesitamos

    if (snapHijo.data().category === category) {
      posts.push({
        id: snapHijo.id,
        ...snapHijo.data(),
      });
    }
  });

  return posts;
};

export const loadPostDetail2 = async (category) => {
  //sacmaos las notas de firebase mandando el path d ela ubicacion
  const postSnap = await db.collection(`/posts`).get();

  const posts = [];

  postSnap.forEach((snapHijo) => {
    //para sacar directmente lo que necesitamos

    if (snapHijo.data().category === category) {
      posts.push({
        id: snapHijo.id,
        ...snapHijo.data(),
      });
    }
  });

  return posts;
};

export const loadPostDetail = async (id) => {
  //sacmaos las notas de firebase mandando el path d ela ubicacion
  const postSnap = await db.collection(`/posts`).get();

  const posts = [];

  postSnap.forEach((snapHijo) => {
    //para sacar directmente lo que necesitamos

    if (snapHijo.id === id) {
      posts.push({
        id: snapHijo.id,
        ...snapHijo.data(),
      });
    }
  });

  return posts;
};
