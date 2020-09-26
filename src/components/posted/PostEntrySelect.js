import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostEntry } from "./PostEntry";
import { Row, Col } from "antd";
import { Empty } from "antd";

import { Spinner } from "react-bootstrap";
import { StartLoadingPostsByCategoria } from "../../action/post";

export const PostEntrySelect = () => {
  const { categoryid } = useParams();
  const { data, isLoading } = useSelector((state) => state.dataFetch);
  const dispatch = useDispatch();

  useEffect(() => {
    let didCancel = false;
    const startSelectCategory = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const results = await StartLoadingPostsByCategoria(categoryid);

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: results });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    startSelectCategory();
    return () => {
      didCancel = true;
    };
  }, [dispatch, categoryid]);

  return (
    <>
      {isLoading ? (
        <>
          <div className="spinner">
            <Spinner animation="border" variant="info" />
          </div>
        </>
      ) : (
        <>
          <Row
            className="row-card animate__animated animate__fadeIn"
            gutter={[32, 16]}
            align="middle"
          >
            {data.length > 0 ? (
              <>
                {data.map((post) => (
                  <Col key={post.id} className="col-conteiner-post">
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
