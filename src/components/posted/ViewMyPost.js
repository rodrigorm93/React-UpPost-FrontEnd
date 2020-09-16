import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingMyPosts } from "../../action/post";
import { PostMyEntry } from "./PostMyEntry";
import { Spinner } from "react-bootstrap";
import { Row, Col, Button } from "antd";

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
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <>
          {posts.map((post) => (
            <Row justify="space-around" align="middle">
              <Col className="col-post-myPost" key={post.id} span={12}>
                <PostMyEntry key={post.id} {...post} />
              </Col>
            </Row>
          ))}
        </>
      )}
    </div>
  );
};
