import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingMyPosts } from "../../action/post";
import { PostMyEntry } from "./PostMyEntry";

export const ViewMyPost = () => {
  const { posts } = useSelector((state) => state.posts);

  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function anyNameFunction() {
      await dispatch(startLoadingMyPosts(uid));
      setLoading(false);
    }

    anyNameFunction();
  }, [dispatch, uid]);

  return (
    <div>
      <h1>Mis Post</h1>
      {loading ? (
        <h1>Espere...</h1>
      ) : (
        <>
          {posts.map((post) => (
            <PostMyEntry key={post.id} {...post} />
          ))}
        </>
      )}
    </div>
  );
};
