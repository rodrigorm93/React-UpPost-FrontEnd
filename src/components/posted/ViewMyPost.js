import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostMyEntry } from "./PostMyEntry";
import { Spinner } from "react-bootstrap";
import { Row, Col } from "antd";
import { StartLoadingMyPosts } from "../../action/post";

export const ViewMyPost = () => {
  const { data, isLoading } = useSelector((state) => state.dataFetch);
  const { deletePost } = useSelector((state) => state.posts);
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    let didCancel = false;
    const startSelectMyPost = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const results = await StartLoadingMyPosts(uid);

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: results });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    startSelectMyPost();
    return () => {
      didCancel = true;
    };
  }, [deletePost, dispatch, uid]);

  return (
    <div>
      {isLoading ? (
        <div className="spinner">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <>
          {data.map((post) => (
            <Row justify="space-around" align="middle" key={post.id}>
              <Col className="col-post-myPost" key={post.id} span={12}>
                <PostMyEntry {...post} />
              </Col>
            </Row>
          ))}
        </>
      )}
    </div>
  );
};
