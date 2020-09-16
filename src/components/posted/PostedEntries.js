import React, { useEffect, useState } from "react";
import { PostEntry } from "./PostEntry";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoadpaginationNext,
  startLoadpaginationPrevious,
  startLoadSinPagination,
} from "../../action/post";
import { Row, Col, Button } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

import { Spinner } from "react-bootstrap";
import { CarouselsApp } from "../carousels/CarouselsApp";
export const PostedEntries = () => {
  const { posts } = useSelector((state) => state.posts);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    async function anyNameFunction() {
      await dispatch(startLoadSinPagination());
      setLoading(false);
    }

    anyNameFunction();
  }, [dispatch]);

  const handlePaginationNext = () => {
    dispatch(startLoadpaginationNext());
  };

  const handlePaginationPrevious = () => {
    dispatch(startLoadpaginationPrevious());
  };

  return (
    <>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <>
          <Row
            className="row-card"
            justify="space-around"
            gutter={[24, 16]}
            align="middle"
          >
            <Col span={24}>
              <CarouselsApp />
            </Col>
          </Row>
          <Row
            className="row-card "
            justify="space-around"
            gutter={[24, 16]}
            align="middle"
          >
            {posts.map((post) => (
              <Col className="col-post" key={post.id} span={9}>
                <PostEntry {...post} key={post.id} />
              </Col>
            ))}
          </Row>
          <Row className="row-pagination" justify="center">
            <Col span={8} className="col-pagination">
              <Button
                icon={<LeftCircleOutlined />}
                onClick={handlePaginationPrevious}
              >
                previous
              </Button>
            </Col>
            <Col className="col-pagination">
              <Button
                icon={<RightCircleOutlined />}
                onClick={handlePaginationNext}
              >
                next
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
