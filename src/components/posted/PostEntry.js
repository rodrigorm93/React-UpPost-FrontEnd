import React, { useEffect, useState } from "react";
import { Row, Col, Avatar } from "antd";

import { Card } from "react-bootstrap";

import momente from "moment";
import ReactPlayer from "react-player";

export const PostEntry = ({ id, name, body, title, date, urlVideo, url }) => {
  const newDate = momente(date);
  const [urlVideoState, setUrlVideoState] = useState(null);

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
                <Avatar size={40} className="avatar-card">
                  {name.substr(0, 2).toUpperCase()}
                </Avatar>

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
                <Card.Text className="body-card">{body}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                {newDate.format("MMM Do YY")}
                <br />
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
