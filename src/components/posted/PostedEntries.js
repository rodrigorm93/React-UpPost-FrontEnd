import React, { useEffect, useState } from "react";
import { PostEntry } from "./PostEntry";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Button } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

import { Spinner } from "react-bootstrap";
import { CarouselsApp } from "../carousels/CarouselsApp";
import { desactivePost } from "../../action/post";

export const PostedEntries = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const [loading, setLoading] = useState(true);

  //cada vez que entremos al home limpiamos el post seleccionado
  useEffect(() => {
    dispatch(desactivePost());
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <>
          <Row gutter={[8, 8]} align="middle">
            <Col span={24}>
              <CarouselsApp />
            </Col>
          </Row>
          <Row gutter={[32, 8]} align="middle">
            {posts.map((post) => (
              <Col key={post.id} span={12}>
                <PostEntry {...post} key={post.id} />
              </Col>
            ))}
          </Row>
          <Row className="row-pagination" justify="center">
            <Col span={8} className="col-pagination">
              <Button icon={<LeftCircleOutlined />}>previous</Button>
            </Col>
            <Col className="col-pagination">
              <Button icon={<RightCircleOutlined />}>next</Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
