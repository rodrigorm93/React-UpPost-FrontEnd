import React, { useEffect, useState } from "react";
import { PostEntry } from "./PostEntry";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingPosts } from "../../action/post";

export const PostedEntries = () => {
  const { posts } = useSelector((state) => state.posts);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function anyNameFunction() {
      await dispatch(startLoadingPosts());
      setLoading(false);
    }

    anyNameFunction();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Espere2...</h1>
      ) : (
        <>
          {posts.map((post) => (
            <PostEntry key={post.id} {...post} />
          ))}
        </>
      )}
    </>
  );
};
