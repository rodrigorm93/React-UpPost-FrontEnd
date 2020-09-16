import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startLoadingPostDetail } from "../../action/post";
import { DetailPostScreen } from "./DetailPostScreen";
import { Spinner } from "react-bootstrap";

export const DetailPost = () => {
  const { posts } = useSelector((state) => state.posts);

  const { id } = useParams();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function anyNameFunction() {
      await dispatch(startLoadingPostDetail(id));
      setLoading(false);
    }

    anyNameFunction();
  }, [dispatch, id]);

  console.log(id);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <>
          {posts.map((post) => (
            <DetailPostScreen key={post.id} {...post} />
          ))}
        </>
      )}
    </div>
  );
};
