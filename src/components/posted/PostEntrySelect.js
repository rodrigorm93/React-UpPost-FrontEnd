import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startLoadingPostBycategory } from "../../action/post";
import { PostEntry } from "./PostEntry";

export const PostEntrySelect = ({ history }) => {
  const { categoryid } = useParams();

  console.log(categoryid);

  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function anyNameFunction() {
      await dispatch(startLoadingPostBycategory(categoryid));
      setLoading(false);
    }

    anyNameFunction();
  }, [dispatch, categoryid]);

  return (
    <div>
      <h1>PostEntrySelect</h1>
      {loading ? (
        <h1>Espere...</h1>
      ) : (
        <>
          {posts.map((post) => (
            <PostEntry key={post.id} {...post} />
          ))}
        </>
      )}
    </div>
  );
};
