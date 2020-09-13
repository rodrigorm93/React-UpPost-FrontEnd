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
