import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startLoadingPostBycategory } from "../../action/post";
import { PostEntry } from "./PostEntry";
import { Row, Col } from "antd";
import { Empty } from "antd";

import { Spinner } from "react-bootstrap";

export const PostEntrySelect = () => {
  const { categoryid } = useParams();

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
    <>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <>
          <Row
            className="row-card "
            justify="space-around"
            gutter={[24, 16]}
            align="middle"
          >
            {posts.length > 0 ? (
              <>
                {posts.map((post) => (
                  <Col className="col-post" key={post.id} span={10}>
                    <PostEntry {...post} key={post.id} />
                  </Col>
                ))}
              </>
            ) : (
              <Col className="col-empty" span={24}>
                <Empty />
              </Col>
            )}
          </Row>
          <Row className="row-pagination" justify="center">
            <Col span={2}></Col>
            <Col span={2}></Col>
          </Row>
        </>
      )}
    </>
  );
};
