import React, { useEffect, useState } from "react";
import { PostEntry } from "./PostEntry";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Pagination, Input } from "antd";

import { Spinner } from "react-bootstrap";
import { CarouselsApp } from "../carousels/CarouselsApp";
import {
  desactivePost,
  StartLoadingPostsNumberPagination,
  StartLoadingPostsSearch,
  StartLoadingUltimosPosts,
} from "../../action/post";
import { StartLoadingPostsPagination } from "../../action/post";
export const PostedEntries = () => {
  const dispatch = useDispatch();
  const {
    posts,
    pages,
    loadingPostPagination,
    loadingPostSearch,
  } = useSelector((state) => state.posts);
  const [pagination, setPagination] = useState(1);

  //  const [search, setSearch] = useState("");

  //const [loading, setLoading] = useState(true);

  //cada vez que entremos al home limpiamos el post seleccionado y la data de los loading para volver a cargar todo
  useEffect(() => {
    dispatch(desactivePost());
    dispatch({ type: "FETCH_CLEAR" });
    //cada vez que se entr a una categoria este reducer se llena de informacion aca se limpia
    //esta es la entrada prncipal

    dispatch(StartLoadingPostsNumberPagination());
    dispatch(StartLoadingUltimosPosts());

    dispatch(StartLoadingPostsPagination(pagination));
  }, [dispatch, pagination]);

  const onChange = (e) => {
    setPagination(e); //pagina actual
  };

  console.log("hola2");

  const handleSearch = (e) => {
    console.log(e.target.value);

    dispatch(StartLoadingPostsSearch(e.target.value, pagination));
  };

  return (
    <>
      {loadingPostPagination ? (
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

          <Row>
            <Col span={12} offset={6} className="search">
              <Input placeholder="Search..." onChange={handleSearch} />
            </Col>
          </Row>

          {loadingPostSearch ? (
            <div className="spinner">
              <Spinner animation="border" variant="info" />
            </div>
          ) : (
            <Row
              gutter={[48, 40]}
              align="middle"
              className="conteiner-post animate__animated animate__fadeIn"
            >
              {posts.map((post) => (
                <Col key={post.id} className="col-conteiner-post">
                  <PostEntry {...post} key={post.id} />
                </Col>
              ))}
            </Row>
          )}

          <Row className="row-pagination" justify="center">
            <Col span={8} className="col-pagination">
              <Pagination
                onChange={onChange}
                defaultCurrent={1}
                total={pages.number}
                current={pagination}
                defaultPageSize={1}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
