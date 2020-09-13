import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";

import { Card } from "react-bootstrap";

import momente from "moment";
import { useDispatch } from "react-redux";
import { activePost } from "../../action/post";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export const PostMyEntry = ({ id, body, title, date, urlVideo, url }) => {
  const [urlVideoState, setUrlVideoState] = useState(null);
  const newDate = momente(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(
      activePost(id, {
        date,
        title,
        body,
        urlVideo,
        url,
      })
    );
  };

  useEffect(() => {
    setUrlVideoState(`${urlVideo}`);
  }, [urlVideo]); // DE LAS VARIABLES QUE SE VAN A EJECUTAR SE HARA QUE EL USEEFECT SE VUELVA A EJECUTAR, si alguna de
  //esas dos variables sufre un cambio el useEffect se actualizara

  return (
    <div className="post__main">
      <div className="post__box-container">
        <Row justify="space-around" align="middle">
          <Col span={10}>
            <Card className="text-center">
              <Card.Header className="header-card">
                <Card.Title className="title-card">{title}</Card.Title>
                {urlVideoState ? (
                  <ReactPlayer
                    className="react-player"
                    url={urlVideoState}
                    controls={true}
                  />
                ) : (
                  <Card.Img variant="top" src={url} />
                )}
              </Card.Header>

              <Card.Body>
                <Card.Text>{body}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                {newDate.format("MMM Do YY")}
                <br />
                <Link to="/private/editPost" onClick={handleEntryClick}>
                  Edit
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
